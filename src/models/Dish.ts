import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Review } from './Review';

enum CATEGORIES {
  APPETIZER = 'appetizer',
  MAIN = 'main',
  DESSERT = 'dessert',
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

  @prop({ type: () => [Review] })
  reviews: Review[];

  @prop({ required: true, enum: CATEGORIES })
  categories: CATEGORIES;

  @prop({ type: Number, required: true, min: 0, default: 0 })
  price: number;

  @prop({ required: true, ref: () => Restaurant }) // Relacion 1 a 1
  restaurant: Ref<Restaurant>;
}

export const UserModel = getModelForClass(Dish);
