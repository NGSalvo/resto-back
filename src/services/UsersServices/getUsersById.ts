import { User, UserModel } from '../../models';

export async function getUserById(id: string): Promise<User | null> {
  try {
    const userId = await UserModel.findById(id);
    return userId;
  } catch (error) {
    console.log(error);
    return null;
  }
}
