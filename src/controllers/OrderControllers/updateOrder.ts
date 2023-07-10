import { Response, Request } from 'express';
import { updateOrder } from '../../services/OrderServices/updateOrder';

export const updateOrders = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await updateOrder(id, req.body);
    res.send(order);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
