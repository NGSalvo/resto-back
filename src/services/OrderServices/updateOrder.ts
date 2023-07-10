import { Order, OrderModel } from '../../models';

export async function updateOrder(
  id: string,
  order: Order,
): Promise<Order | null> {
  try {
    const updateOrder = await OrderModel.findByIdAndUpdate(id, order);
    console.log(updateOrder);
    return updateOrder;
  } catch (error) {
    console.log(error);
    return null;
  }
}
