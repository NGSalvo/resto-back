import { Response, Request } from 'express';
import { createTable, getTable } from '../../services';

export const postTable = async (req: Request, res: Response) => {
  try {
    const existTable = await getTable();
    if (existTable)
      return res.append('Allow', ['GET', 'PUT']).status(405).json({
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
