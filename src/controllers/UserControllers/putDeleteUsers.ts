import { Response, Request } from 'express';
import { softDeleteUser } from '../../services/UsersServices/deleteUsers';

export const softDeleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userModified = await softDeleteUser(id);
    res.send(userModified);
  } catch (error) {
    res.send(error);
  }
};
