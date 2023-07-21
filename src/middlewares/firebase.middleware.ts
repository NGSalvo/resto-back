import '../customTypes';

import admin from '../config/firebase-config';

import { Request, Response, NextFunction } from 'express';

export async function decodeToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    if (token) {
      const decodeValue: admin.auth.DecodedIdToken = await admin
        .auth()
        .verifyIdToken(token);
      if (decodeValue) {
        // Obtener el usuario desde Firestore según el UID del usuario decodificado
        // console.log(decodeValue);

        const userSnapshot = await admin
          .firestore()
          .collection('users')
          .where('email', '==', decodeValue.email)
          .get();

        if (!userSnapshot.empty) {
          // El usuario fue encontrado en Firestore, tomar el primer documento (debería haber solo uno)
          const userData = userSnapshot.docs[0].data();
          req.user = userData;
          req.user.id = decodeValue.uid;

          // console.log(userData); // Puedes imprimir los datos del usuario para verificar sus detalles
          return next();
        }
      }
    }
    return res.status(401).json({ message: 'Unauthorized' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server Internal Error' });
  }
}
