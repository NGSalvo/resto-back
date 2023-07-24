import { Response, Request } from 'express';
import { getUserById } from '../../services';

// TODO: NO DEVUELVE ERROR CUANDO ES NULL
export const getUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userById = await getUserById(id);
    if (userById === null) {
      return res
        .status(404)
        .json({ message: `No se encontró un usuario con el ID: ${id}` });
    }
    res.send(userById);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error al obtener el usuario' });
  }
};
