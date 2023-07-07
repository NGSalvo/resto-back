import { Response, Request } from 'express';
import { updateUser } from '../../services/UsersServices/updateUsers';
import { getUserById } from '../../services/UsersServices/getUsersById';


export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await updateUser(id, req.body);
    const userById = await getUserById(id);
    res.send(userById);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
