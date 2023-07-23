import { DocumentType } from '@typegoose/typegoose';
import { DishModel, Order, OrderModel } from '../../models';

export async function getAllOrder(): Promise<DocumentType<Order>[]> {
  try {
    const orders = await OrderModel.find({}).populate({
      path: 'item.dish',
      model: DishModel,
    });
    return orders;
  } catch (error) {
    console.log(error);
    return [];
  }
}
