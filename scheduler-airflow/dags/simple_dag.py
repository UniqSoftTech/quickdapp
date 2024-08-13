from airflow import DAG
from airflow.operators.dummy import DummyOperator
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta
import time

# Default arguments for the DAG
default_args = {
    'start_date': datetime(2023, 8, 1),
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

# Define the DAG
with DAG('simple_dag',
         default_args=default_args,
         schedule_interval=None,
         catchup=False) as dag:

    # Task 1: Start
    start = DummyOperator(task_id='start')

    # Task 2: Perform a simple calculation and sleep
    def calculate_and_sleep():
        result = sum([i**2 for i in range(10000)])  # Simple calculation
        time.sleep(5)  # Simulate a task that takes some time
        print(f"Calculation result: {result}")
        return result

    calculation_task = PythonOperator(
        task_id='calculate_and_sleep',
        python_callable=calculate_and_sleep
    )

    # Task 3: End
    end = DummyOperator(task_id='end')

    # Set up dependencies
    start >> calculation_task >> end
