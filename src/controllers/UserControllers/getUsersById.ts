// import { Response, Request } from 'express';
// import { getUserById } from '../../services/UsersServices/getUsersById';

// export const getUserId = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const usersById = await getUserById(id);
//     res.send(usersById);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

import { Response, Request } from 'express';
import { getUserById } from '../../services/UsersServices/getUsersById';

export const getUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userById = await getUserById(id);
    res.send(userById);
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: 'Usuario no encontrado' });
  }
};
