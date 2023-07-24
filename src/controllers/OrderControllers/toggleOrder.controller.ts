import { Response, Request } from 'express';
import { toggleOrder } from '../../services';

export const toggleOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await toggleOrder(id);
    res.send(order);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al actualizar el estado de la orden' });
  }
};
