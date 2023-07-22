import { Response, Request } from 'express';
import { getOrderById } from '../../services';

export const getOrderId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await getOrderById(id);
    res.send(order);
  } catch (error) {
    console.log(error);
    res.send(`No existe orden con ID: ${id}`);
  }
};
