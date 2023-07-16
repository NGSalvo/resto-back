import { Response, Request } from 'express';
import { softDeleteUser } from '../../services/UsersServices/deleteUsers';

export const softDeleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userModified = await softDeleteUser(id);
    if (userModified !== null) {
      res.send(userModified);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    res.status(500).send('Error al intentar deshabilitar el usuario');
  }
};
