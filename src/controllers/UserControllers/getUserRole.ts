import { Response, Request } from 'express';
import { getUserRole } from '../../services/UsersServices/getUserRole';

export const getRole = async (req: Request, res: Response) => {
  const { email } = req.user;

  try {
    const role = await getUserRole(email);
    res.send(role);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error interno' });
  }
};
