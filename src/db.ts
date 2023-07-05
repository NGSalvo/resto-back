require('dotenv').config();
import { connect } from 'mongoose';

const { MONGOUSER, MONGOPASS, MONGODB } = process.env;

export const connectDB = async () => {
  const db = await connect(
    `mongodb+srv://${MONGOUSER}:${MONGOPASS}@cluster9.lua1z.mongodb.net/${MONGODB}?retryWrites=true&w=majority`,
  );
  console.log(`DB "${db.connection.db.databaseName}" connection successful`);
};
