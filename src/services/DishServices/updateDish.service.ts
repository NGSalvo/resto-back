import { Dish, DishModel } from '../../models';

export async function updateDish(id: string, dish: Dish): Promise<Dish | null> {
  try {
    await DishModel.findByIdAndUpdate(id, dish);
    const updatedDish = DishModel.findById(id);
    return updatedDish;
  } catch (error) {
    return null;
  }
}
