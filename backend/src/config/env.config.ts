import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT as string || 3001;
export const BLOCKSCOUT_URL = process.env.BLOCKSCOUT_URL as string;
export const VERCEL_TOKEN = process.env.VERCEL_TOKEN as string;
export const TENDERLY_PROJECT_SLUG = process.env.TENDERLY_PROJECT_SLUG as string;
export const TENDERLY_ACCESS_KEY = process.env.TENDERLY_ACCESS_KEY as string;
export const TENDERLY_ACCOUNT_SLUG = process.env.TENDERLY_ACCOUNT_SLUG as string;
export const ALCHEMY_APP_API_KEY = process.env.ALCHEMY_APP_API_KEY as string;
export const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME as string;
export const S3_KEY = process.env.S3_KEY as string;
export const S3_SECRETKEY = process.env.S3_SECRETKEY as string;