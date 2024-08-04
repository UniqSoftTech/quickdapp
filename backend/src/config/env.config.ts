import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT as string || 3001;
export const BLOCKSCOUT_URL = process.env.BLOCKSCOUT_URL as string;