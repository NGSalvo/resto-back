import admin from '../../config/firebase-config';
import { Request, Response, NextFunction } from 'express';

export async function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const userId = req.user?.uid; // Obtener el ID del usuario actual desde Firebase

  if (!userId) {
    return res.status(403).send('Acceso denegado'); // Si no hay usuario, no se permite el acceso
  }

  try {
    // Obtener el usuario desde Firestore usando el ID del usuario actual
    const userDoc = await admin
      .firestore()
      .collection('users')
      .doc(userId)
      .get();
    if (!userDoc.exists || userDoc.data()?.role !== 'admin') {
      return res.status(403).send('No Autorizado'); // Si no es admin, no se permite el acceso
    }

    // Si es admin, permitir el acceso a todas las rutas protegidas
    return next();
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error al verificar los permisos del usuario');
  }
}
