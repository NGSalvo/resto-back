import { DishModel, Dish } from '../../models';

export async function createDish(dish: Dish) {
  try {
    const newDish = new DishModel(dish);
    await newDish.save();
    return dish;
  } catch (error) {
    return new Error(`Error creando el platillo en la base de datos`);
  }
}
