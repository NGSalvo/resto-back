import { connect } from 'mongoose';
import { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } from './config';

export const connectDB = async () => {
  const db = await connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    // `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`,
  );
  console.log(`DB "${db.connection.db.databaseName}" connection successful`);
};
