import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { modelOptions } from '@typegoose/typegoose';
import { DishModel } from './Dish';

export enum STATES {
  INIT = 'init',
  PAID = 'paid',
  DELIVERED = 'delivered'
}

@modelOptions({
  schemaOptions: {
    _id: true,
    timestamps: true,
  },
})
class Order {
  @prop({ required: true, ref: () => DishModel as typeof DishModel })
  dish: Ref<typeof DishModel>;

  @prop({ required: true, type: Number })
  quantity: number;

  @prop({ type: String })
  observation: string;

  @prop({ required: true, type: Number })
  totalPrice: number;

  @prop({ required: true, enum: STATES, default: null})
  states: STATES
}

export const OrderModel = getModelForClass(Order);
