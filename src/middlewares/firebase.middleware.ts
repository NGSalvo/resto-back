import admin from '../config/firebase-config';
import { CustomRequest } from '../customTypes';

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
        const userSnapshot = await admin
          .firestore()
          .collection('users')
          .where('uid', '==', decodeValue.uid)
          .get();
        if (!userSnapshot.empty) {
          // El usuario fue encontrado en Firestore, tomar el primer documento (debería haber solo uno)
          const userData = userSnapshot.docs[0].data();

          req.user = userData;
          console.log(userData); // Puedes imprimir los datos del usuario para verificar sus detalles
          return next();
        }
      }
    }
    return res.status(401).json({ message: 'Unauthorized' });
  } catch (error) {
    return res.status(500).json({ message: 'Server Internal Error' });
  }
}
