import { OrderModel } from '../../models';

export async function toggleOrder(id: string): Promise<string | null> {
  try {
    const foundOrder = await OrderModel.findById(id);
    await OrderModel.findByIdAndUpdate(id, { active: !foundOrder?.active });
    if (foundOrder?.active === true)
      return `Orden deshabilitada: ${foundOrder.id}`;
    return `Se habilitó la orden: ${foundOrder?.id}`;
  } catch (error) {
    return null;
  }
}
