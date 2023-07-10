import { DocumentType } from '@typegoose/typegoose';
import { Order, OrderModel } from '../../models';

export async function getAllOrder(): Promise<DocumentType<Order>[]> {
  try {
    const orders = await OrderModel.find().exec();
    return orders;
  } catch (error) {
    console.log(error);
    return [];
  }
}
