import { Response, Request } from 'express';
import { softDeleteUser } from '../../services';

export const softDeleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userModified = await softDeleteUser(id);
    if (userModified !== null) {
      res.send(userModified);
    } else {
      res.status(404).json({ message: 'No se encontró el usuario' });
    }
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al eliminar el usuario' });
  }
};
