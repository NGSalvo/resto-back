// import { Response, Request } from 'express';
// import { getAllUsers } from '../../services/UsersServices/getAllUsers';

// export const getUsers = async (req: Request, res: Response) => {
//   try {
//     const allUsers = await getAllUsers();
//     res.send(allUsers);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };

import { Response, Request } from 'express';
import { getAllUsers } from '../../services/UsersServices/getAllUsers';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await getAllUsers();
    res.send(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Error al obtener los usuarios' });
  }
};
