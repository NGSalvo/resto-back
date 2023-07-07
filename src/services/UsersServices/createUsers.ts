import { User, UserModel } from '../../models';

export async function createUser(user: User) {
  const newUser = new UserModel(user);
  await newUser.save();
  return newUser;
}
