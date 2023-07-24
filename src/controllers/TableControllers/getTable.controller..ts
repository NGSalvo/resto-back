import { Response, Request } from 'express';
import { getTable as getTableService } from '../../services';

export const getTable = async (_req: Request, res: Response) => {
  try {
    const table = await getTableService();
    res.send(table);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al obtener el número de mesas' });
  }
};
