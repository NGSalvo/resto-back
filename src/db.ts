import { connect } from 'mongoose';

export const connectDB = async () => {
  const db = await connect('mongodb://localhost/restodb');
  console.log(`DB "${db.connection.db.databaseName}" connection successful`);
};
