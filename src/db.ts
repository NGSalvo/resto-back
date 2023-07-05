import { connect } from 'mongoose';

export const connectDB = async () => {
  const db = await connect(
    'mongodb+srv://main:eYexWHjVsquZMIBw@cluster9.lua1z.mongodb.net/resto?retryWrites=true&w=majority',
  );
  console.log(`DB "${db.connection.db.databaseName}" connection successful`);
};
