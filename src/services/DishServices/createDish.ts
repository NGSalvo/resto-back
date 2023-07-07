import { DishModel as Dish } from "../../models";

export async function createDish(dish:typeof Dish) {
    const newDish = new Dish(dish);
    await newDish.save();
    return dish;
}