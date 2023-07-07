import { Dish, DishModel } from '../../models';


export async function updateDish(id:string, dish: Dish): Promise< Dish | null>{
  try {
    const updatedDish = await DishModel.findByIdAndUpdate(id,dish)
    console.log(updatedDish)
    return updatedDish
   
  } catch (error) {
    console.log(error)  
    return null
}}