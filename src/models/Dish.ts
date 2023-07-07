import { prop, getModelForClass } from '@typegoose/typegoose';
import { modelOptions } from '@typegoose/typegoose';

export enum CATEGORIES {
  APPETIZER = 'appetizer',
  MAIN = 'main',
  DESSERT = 'dessert',
  DRINK = 'drink',
}

@modelOptions({
  schemaOptions: {
    _id: true,
    timestamps: true,
  },
})
export class Dish {
  @prop({ type: String, required: true, trim: true, unique: true }) // declaracion para typegoose (mongoose con typescript)
  title: string; // tipado comun de typescript

  @prop({ required: true, type: String })
  description: string;

  @prop({ required: true, type: String })
  image: string;

  @prop({ type: () => [Number] })
  reviews: number[];

  @prop({ required: true, enum: CATEGORIES })
  categories: CATEGORIES;

  @prop({ type: Number, required: true, min: 0, default: 0 })
  price: number;
}

export const DishModel = getModelForClass(Dish);
