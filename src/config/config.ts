import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.MONGOHOST || 'localhost';
export const DB_USER = process.env.MONGOUSER || 'root';
export const DB_PASSWORD = process.env.MONGOPASS || 'root';
export const DB_NAME = process.env.MONGODB || 'resto';
export const DB_PORT = process.env.MONGOPORT || 27017;
export const DB_URL = process.env.MONGOURL || 'localhost:27017';

export const MP_API_KEY = process.env.MERCADOPAGO_API_KEY || 'Invalid Key';

// FIREBASE AUTHENTICATION
export const FB_TYPE = process.env.FB_TYPE || '';
export const FB_PROJECT_ID = process.env.FB_PROJECT_ID || '';
export const FB_PRIVATE_KEY_ID = process.env.FB_PRIVATE_KEY_ID || '';
export const FB_PRIVATE_KEY = process.env.FB_PRIVATE_KEY || '';
export const FB_CLIENT_EMAIL = process.env.FB_CLIENT_EMAIL || '';
export const FB_CLIENT_ID = process.env.FB_CLIENT_ID || '';
export const FB_AUTH_URI = process.env.FB_AUTH_URI || '';
export const FB_TOKEN_URI = process.env.FB_TOKEN_URI || '';
export const FB_AUTH_PROVIDER = process.env.FB_AUTH_PROVIDER || '';
export const FB_CLIENT = process.env.FB_CLIENT || '';
export const FB_UNIVERSE_DOMAIN = process.env.FB_UNIVERSE_DOMAIN || '';
