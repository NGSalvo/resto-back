// import { User, UserModel } from '../../models';

// export async function getUserById(id: string): Promise<User | null> {
//   try {
//     const userId = await UserModel.findById(id);
//     return userId;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

import admin from '../../config/firebase-config';

export async function getUserById(id: string) {
  try {
    const userSnapshot = await admin
      .firestore()
      .collection('users')
      .doc(id)
      .get();
    if (userSnapshot.exists) {
      const userData = userSnapshot.data();
      return userData;
    } else {
      return null; // No se encontró un usuario con el ID proporcionado
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
