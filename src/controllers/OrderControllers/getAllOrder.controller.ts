import { Response, Request } from 'express';
import { getAllOrder } from '../../services';

export const getOrder = async (_req: Request, res: Response) => {
  try {
    const orders = await getAllOrder();
    res.send(orders);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al obtener las órdenes' });
  }
};
