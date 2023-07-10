import { Request, Response } from 'express';
import { createOrder } from '../../services/OrderServices/createOrder';

export const postOrder = async (req: Request, res: Response) => {
  try {
    const order = await createOrder(req.body);
    res.send(order);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
