// import { DocumentType } from '@typegoose/typegoose';
// // import { User, UserModel } from '../../models';

// export async function getAllUsers(): Promise<DocumentType<User>[]> {
//   try {
//     const user = await UserModel.find().exec();
//     return user;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }
import admin from '../../config/firebase-config';

export async function getAllUsers() {
  try {
    const usersCollection = await admin.firestore().collection('users').get();
    const users = usersCollection.docs.map(doc => doc.data());
    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
}
