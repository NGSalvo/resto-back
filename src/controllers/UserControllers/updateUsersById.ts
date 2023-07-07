import { Response, Request } from 'express';
import { updateUser } from '../../services/UsersServices/updateUsers';

export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userById = await updateUser(id, req.body);
    res.send(userById);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
