import { Response, Request } from 'express';
import { createUser } from '../../services';

export const postUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req, res);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al crear usuario' });
  }
};
