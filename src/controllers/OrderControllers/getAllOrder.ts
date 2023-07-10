import { Response, Request } from 'express';
import { getAllOrder } from '../../services/OrderServices/getAllOrder';

export const getOrder = async (req: Request, res: Response) => {
  try {
    const orders = await getAllOrder();
    res.send(orders);
  } catch (error) {
    console.log(error);
    res.send('Error al obtener las órdenes');
  }
};
