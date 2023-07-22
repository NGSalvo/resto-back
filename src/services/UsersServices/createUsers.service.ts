import { Request, Response } from 'express';
import admin from '../../config/firebase-config';

export async function createUser(req: Request, res: Response) {
  try {
    const { name, lastName, email, password, role, active } = req.body;

    // Crea un nuevo documento en la colección 'users' con los datos del usuario
    const userRef = await admin.firestore().collection('users').add({
      name,
      lastName,
      email,
      password,
      role,
      active,
    });

    // Obtén el ID del documento recién creado
    const userId = userRef.id;

    return res.status(201).send({ id: userId, ...req.body }); // Devuelve la respuesta con el ID del usuario creado
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Error al crear el usuario' });
  }
}
