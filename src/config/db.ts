import { connect } from 'mongoose';
import { DB_URL } from './config';
// import { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_URL } from './config';

// import { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } from './config';

export const connectDB = async () => {
  const db = await connect(
    DB_URL,
    // `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    // `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`,
  );
  console.log(`DB "${db.connection.db.databaseName}" connection successful`);
};
