import { DishModel, Order, OrderModel } from '../../models';

export async function getOrderById(id: string): Promise<Order | null> {
  try {
    const order = await OrderModel.findById(id).populate({
      path: 'item.dish',
      model: DishModel,
    });
    return order;
  } catch (error) {
    console.log(error);
    return null;
  }
}
