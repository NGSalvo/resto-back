import { Response, Request } from 'express';
import { getUserById, updateUser } from '../../services';

export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await updateUser(id, req.body);
    const userById = await getUserById(id);
    res.send(userById);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al actualizar el usuario' });
  }
};
