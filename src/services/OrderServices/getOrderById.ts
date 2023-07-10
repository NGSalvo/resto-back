import { Order, OrderModel } from '../../models';

export async function getOrderById(id: string): Promise<Order | null> {
  try {
    const order = await OrderModel.findById(id);
    return order;
  } catch (error) {
    console.log(error);
    return null;
  }
}
