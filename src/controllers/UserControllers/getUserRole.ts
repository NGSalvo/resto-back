import { Response, Request } from 'express';
import { getUserRole } from '../../services/UsersServices/getUserRole';

export const getRole = async (req: Request, res: Response) => {
  const { email } = req.user;
  try {
    const role = await getUserRole(email);
    res.json(role);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno' });
  }
};
