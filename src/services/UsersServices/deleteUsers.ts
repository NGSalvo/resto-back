// import { UserModel } from '../../models';

// export async function softDeleteUser(id: string): Promise<string | null> {
//   try {
//     const foundedUser = await UserModel.findById(id);
//     await UserModel.findByIdAndUpdate(id, { active: !foundedUser?.active });
//     if (foundedUser?.active === true)

//       return `Usuario "${foundedUser.name[0].toUpperCase()}${foundedUser.name.slice(
//         1,
//       )}" desahabilitado`;

//     return `Usuario "${foundedUser?.name[0].toUpperCase()}${foundedUser?.name.slice(
//       1,
//     )}" habilitado`;

//   } catch (error) {
//     return null;
//   }
// }

import admin from '../../config/firebase-config';

export async function softDeleteUser(id: string): Promise<string | null> {
  try {
    // Obtener el documento del usuario por ID
    const userRef = admin.firestore().collection('users').doc(id);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return null; // Si el usuario no existe, devolvemos null
    }

    const userData = userDoc.data();

    // Comprobamos si userData no es undefined antes de acceder a sus propiedades
    if (userData?.active !== undefined) {
      // Cambiar el estado de "active" del usuario
      const activeValue = !userData.active;

      // Actualizar el documento con la nueva propiedad "active"
      await userRef.update({ active: activeValue });

      if (activeValue) {
        return `Usuario "${userData.name}" habilitado`;
      } else {
        return `Usuario "${userData.name}" deshabilitado`;
      }
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
