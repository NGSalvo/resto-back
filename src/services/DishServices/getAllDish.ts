import { DocumentType } from '@typegoose/typegoose';
import { Dish, DishModel } from '../../models';


export async function getAllDish(): Promise<DocumentType< Dish>[]>{
  try {
    const dish = await DishModel.find().exec()
    return dish
   
  } catch (error) {
    console.log(error)  
    return []
}}
