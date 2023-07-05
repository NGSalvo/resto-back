import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Review } from './Review';

export enum CATEGORIES {
  APPETIZER = 'appetizer',
  MAIN = 'main',
  DESSERT = 'dessert',
  DRINK = 'drink'
}

// Eliminarlo despues, creo que lo mejor para referencia va a ser User -> Order o algo
class Restaurant {
  @prop({ type: String, required: true })
  name: string;

  // owner: User definir User
}

class Dish {
  @prop({ type: String, required: true, trim: true, unique: true }) // declaracion para typegoose (mongoose con typescript)
  title: string; // tipado comun de typescript

  @prop({ type: String })
  description: string;

  @prop({ type: String })
  image: string;

  @prop({ type: () => [Number] })
  reviews: number[];

  @prop({ required: true, enum: CATEGORIES })
  categories: CATEGORIES;

  @prop({ type: Number, required: true, min: 0, default: 0 })
  price: number;

}

export const UserModel = getModelForClass(Dish);
