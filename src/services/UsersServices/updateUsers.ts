import { User, UserModel } from '../../models';

export async function updateUser(id: string, user: User): Promise<User | null> {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, user);
    return updatedUser;
  } catch (error) {
    console.log(error);
    return null;
  }
}
