import { OrderModel, Order } from '../../models';

export async function createOrder(orderData: Order) {
  try {
    const newOrder = new OrderModel(orderData);
    await newOrder.save();
    return newOrder;
  } catch (error) {
    console.log(error);
    throw new Error('Error al crear la orden');
  }
}
