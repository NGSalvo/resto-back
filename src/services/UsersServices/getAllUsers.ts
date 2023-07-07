import { DocumentType } from '@typegoose/typegoose';
import { User, UserModel } from '../../models';

export async function getAllUsers(): Promise<DocumentType<User>[]> {
  try {
    const user = await UserModel.find().exec();
    return user;
  } catch (error) {
    console.log(error);
    return [];
  }
}
