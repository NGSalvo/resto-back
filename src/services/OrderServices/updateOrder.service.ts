import { Order, OrderModel } from '../../models';

export async function updateOrder(
  id: string,
  order: Partial<Order>,
): Promise<Order | null> {
  try {
    const updateOrder = await OrderModel.findByIdAndUpdate(id, order);

    return updateOrder;
  } catch (error) {
    console.error(error);
    return null;
  }
}
