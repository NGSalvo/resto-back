import admin from '../../config/firebase-config';
import { Request, Response, NextFunction } from 'express';

export async function requireEmployee(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const userEmail = req.user?.email; // Obtener el email del usuario actual desde Firebase

  if (!userEmail) {
    return res.status(403).send('Acceso denegado'); // Si no hay usuario, no se permite el acceso
  }

  try {
    // Obtener el usuario desde Firestore usando el email del usuario actual
    const userDoc = await admin
      .firestore()
      .collection('users')
      .where('email', '==', userEmail)
      .get();
    console.log(userDoc.docs[0].data());

    if (
      !userDoc.empty &&
      (userDoc.docs[0].data()?.role == 'admin' ||
        userDoc.docs[0].data()?.role == 'employee')
    ) {
      return next();
    }

    return res.status(403).send('No Autorizado'); // Si no es admin o employee, no se permite el acceso
    // Si es admin o employee, permitir el acceso a todas las rutas protegidas
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error al verificar los permisos del usuario');
  }
}
