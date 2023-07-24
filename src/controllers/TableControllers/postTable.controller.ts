import { Response, Request } from 'express';
import { createTable, getTable } from '../../services';
import { CreateTable } from '../../schemas';

export const postTable = async (
  req: Request<unknown, unknown, CreateTable>,
  res: Response,
) => {
  try {
    const existTable = await getTable();
    if (existTable)
      return res.status(422).json({
        error:
          'No se puede crear nuevo documento de mesas. Actualice el existente',
      });
    const table = await createTable(req.body);
    res.send(table);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al crear el número de mesas' });
  }
};
