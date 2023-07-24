import { Dish, DishModel } from '../../models';

export async function getDishById(id: string): Promise<Dish | null> {
  try {
    const dish = await DishModel.findById(id);
    return dish;
  } catch (error) {
    console.error(error);
    return null;
  }
}
