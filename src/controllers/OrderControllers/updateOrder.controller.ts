import { Response, Request } from 'express';
import { updateOrder } from '../../services';

export const updateOrders = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await updateOrder(id, req.body);
    res.send(order);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al actualizar la orden' });
  }
};
