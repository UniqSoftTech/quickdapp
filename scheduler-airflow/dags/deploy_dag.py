from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta
import boto3
import subprocess
import logging
import zipfile
import os
import base64

# Default arguments for the DAG
default_args = {
    'start_date': datetime(2023, 8, 1),
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

# Initialization function
def init_environment():
    # Create necessary directories
    os.makedirs('/tmp', exist_ok=True)
    os.makedirs('/tmp/app_code', exist_ok=True)
    print("Environment initialized.")

# Function to build and push Docker image to ECR
def build_and_push_image(**kwargs):
    # Access the conf parameters
    conf = kwargs['dag_run'].conf
    s3_code_bucket = conf.get('s3_code_bucket', 'default-bucket')
    s3_code_key = conf.get('s3_code_key', 'default-path/code.zip')
    ecr_repository = conf.get('ecr_repository', '471112912931.dkr.ecr.us-east-1.amazonaws.com/generated-frontend-first')
    aws_region = conf.get('aws_region', 'us-east-1')
    image_tag = conf.get('image_tag', 'default')

    # Prepare logs
    log_messages = []

    # Step 1: Download code from S3
    s3 = boto3.client('s3')
    local_file = '/tmp/generated-frontend.zip'
    
    s3.download_file(s3_code_bucket, s3_code_key, local_file)
    print(f"Downloaded code from S3 bucket {s3_code_bucket} with key {s3_code_key}")
    log_messages.append(f"Downloaded code from S3 bucket {s3_code_bucket} with key {s3_code_key}")

    # Step 2: Unzip the code using Python's zipfile module
    extract_dir = '/tmp/app_code'
    with zipfile.ZipFile(local_file, 'r') as zip_ref:
        zip_ref.extractall(extract_dir)
    log_messages.append("Unzipped code.")
    print(f"Contents of {extract_dir}: {os.listdir(extract_dir)}")
    log_messages.append(f"Contents of {extract_dir}: {os.listdir(extract_dir)}")

    # Step 3: Build Docker image
    subprocess.run(['docker', 'build', '-t', f'{ecr_repository}:{image_tag}', extract_dir], check=True)
    log_messages.append(f"Built Docker image {ecr_repository}:{image_tag}")
    print(f"Built Docker image {ecr_repository}:{image_tag}")

    # Step 4: Authenticate Docker to AWS ECR
    ecr_client = boto3.client('ecr', region_name=aws_region)
    authorization_data = ecr_client.get_authorization_token()['authorizationData'][0]

    # Decode the Base64 authorization token
    auth_token = authorization_data['authorizationToken']
    decoded_token = base64.b64decode(auth_token).decode('utf-8')
    username, password = decoded_token.split(':')

    # Extract the ECR URL
    ecr_url = authorization_data['proxyEndpoint']

    # Log in to Docker
    subprocess.run(['docker', 'login', '-u', username, '-p', password, ecr_url], check=True)
    print(f"Logged in to ECR.")
    log_messages.append("Logged in to ECR.")

    # Step 5: Tag and push the Docker image to ECR
    subprocess.run([
        'docker', 'tag', f'{ecr_repository}:{image_tag}', f'{ecr_repository}:{image_tag}'
    ], check=True)
    subprocess.run([
        'docker', 'push', f'{ecr_repository}:{image_tag}'
    ], check=True)
    print(f"Pushed Docker image to ECR: {ecr_repository}:{image_tag}")
    log_messages.append(f"Pushed Docker image to ECR: {ecr_repository}:{image_tag}")

    # Push logs to XCom
    kwargs['ti'].xcom_push(key='build_logs', value=log_messages)

    # Store ECR image URL in XCom for the next task
    image_uri = f'{ecr_repository}:{image_tag}'
    kwargs['ti'].xcom_push(key='image_uri', value=image_uri)

    return image_uri

# Function to deploy the image to AWS App Runner
def deploy_to_apprunner(**kwargs):
    # Access the conf parameters
    conf = kwargs['dag_run'].conf
    aws_region = conf.get('aws_region', 'us-east-1')
    service_name = conf.get('service_name', 'default-service')

    # Pull the image URI and build logs from XCom
    image_uri = kwargs['ti'].xcom_pull(task_ids='build_and_push_image', key='image_uri')
    build_logs = kwargs['ti'].xcom_pull(task_ids='build_and_push_image', key='build_logs')

    print(f"{image_uri}")
    print(f"{build_logs}")
    print(f"{service_name}")

    apprunner_client = boto3.client('apprunner', region_name=aws_region)
    access_role_arn = 'arn:aws:iam::471112912931:role/service-role/AppRunnerECRAccessRole'

    # Create the App Runner service
    response = apprunner_client.create_service(
        ServiceName=service_name,
        SourceConfiguration={
            'ImageRepository': {
                'ImageIdentifier': image_uri,
                'ImageConfiguration': {
                    'Port': '3000',
                },
                'ImageRepositoryType': 'ECR'
            },
            'AutoDeploymentsEnabled': False,
            'AuthenticationConfiguration': {
                'AccessRoleArn': access_role_arn
            }
        },
        InstanceConfiguration={
            'Cpu': '1 vCPU',
            'Memory': '2 GB'
        }
    )

    # Retrieve and log the service URL
    service_url = response['Service']['ServiceUrl']
    logging.info("Build Logs:")
    for log in build_logs:
        logging.info(log)
    logging.info(f"AppRunner Service URL: {service_url}")

    # Push service URL to XCom
    kwargs['ti'].xcom_push(key='service_url', value=service_url)

    return service_url

# Define the DAG
with DAG('build_and_deploy_dag',
         default_args=default_args,
         schedule_interval=None,
         catchup=False) as dag:

    # Task 0: Initialize the environment
    init_environment_task = PythonOperator(
        task_id='init_environment',
        python_callable=init_environment
    )

    # Task 1: Build Docker image and push to ECR
    build_and_push_image_task = PythonOperator(
        task_id='build_and_push_image',
        python_callable=build_and_push_image,
        provide_context=True,
    )

    # Task 2: Deploy to App Runner and get the URL
    deploy_to_apprunner_task = PythonOperator(
        task_id='deploy_to_apprunner',
        python_callable=deploy_to_apprunner,
        provide_context=True,
    )

    # Set up task dependencies
    init_environment_task >> build_and_push_image_task >> deploy_to_apprunner_task
