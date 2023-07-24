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
    console.error(error);
    throw new Error('Error al obtener las órdenes de la base de datos');
  }
}
export { STATES };
