import { Response, Request } from 'express';
import { createUser } from '../../services/UsersServices/createUsers';

export const postUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
