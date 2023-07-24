import { Response, Request } from 'express';
import { getAllUsers } from '../../services';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await getAllUsers();
    res.send(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};
