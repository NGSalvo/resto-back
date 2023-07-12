import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.MONGOHOST || 'localhost';
export const DB_USER = process.env.MONGOUSER || 'root';
export const DB_PASSWORD = process.env.MONGOPASS || 'root';
export const DB_NAME = process.env.MONGODB || 'resto';
