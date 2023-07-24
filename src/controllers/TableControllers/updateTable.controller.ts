import { Response, Request } from 'express';
import { updateTable as updateTableService } from '../../services';
import { UpdateTable } from '../../schemas';

export const updateTable = async (
  req: Request<unknown, unknown, UpdateTable>,
  res: Response,
) => {
  try {
    const table = await updateTableService(req.body);
    res.send(table);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al actualizar el número de mesas' });
  }
};
