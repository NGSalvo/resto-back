import { Request, Response } from 'express';
import { getUserById } from '../UsersServices';

export const login = async (req: Request, res: Response) => {
  const { accessToken, id } = req.body;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({ message: 'No se encontró el usuario' });
  }

  return res.send({ role: user?.role, token: accessToken });
};
