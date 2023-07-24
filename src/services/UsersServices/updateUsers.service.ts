// import { User, UserModel } from '../../models';

// export async function updateUser(id: string, user: User): Promise<User | null> {
//   try {
//     const updatedUser = await UserModel.findByIdAndUpdate(id, user);
//     return updatedUser;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

import admin from '../../config/firebase-config';

export async function updateUser(
  id: string,
  userData: any,
): Promise<any | null> {
  try {
    // Actualizar el documento del usuario con el ID proporcionado
    await admin.firestore().collection('users').doc(id).update(userData);

    // Obtener el usuario actualizado y devolverlo como resultado
    const updatedUserRef = await admin
      .firestore()
      .collection('users')
      .doc(id)
      .get();
    const updatedUser = updatedUserRef.data();

    return updatedUser;
  } catch (error) {
    console.error(error);
    return null;
  }
}
