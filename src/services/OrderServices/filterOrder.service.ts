import { OrderModel, Order, STATES } from '../../models/Order';

export async function getOrdersByStatusAndDate(
  status: STATES,
  startDate: Date,
  endDate: Date,
): Promise<Order[]> {
  try {
    const orders = await OrderModel.find({
      state: status,
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    return orders;
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    throw error;
  }
}
export { STATES };
