import { Response, Request } from 'express';
import { getOrderById } from '../../services';

export const getOrderId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await getOrderById(id);
    if (order === null) {
      return res
        .status(404)
        .json({ message: `No se encontró la orden con el ID: ${id}` });
    }
    res.send(order);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al obtener la orden' });
  }
};
