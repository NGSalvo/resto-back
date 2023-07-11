import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { modelOptions } from '@typegoose/typegoose';
import { DishModel, Dish } from './Dish';

export enum STATES {
  INIT = 'init',
  PAID = 'paid',
  DELIVERED = 'delivered',
}

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
class OrderItem {
  @prop({ required: true, ref: () => DishModel })
  dish: Ref<Dish>;
  // dish: string; //para hacer pruebas

  @prop({ required: true, type: Number })
  quantity: number;

  @prop({ type: String })
  observation: string;

  @prop({ required: true, type: Number })
  totalPrice: number;
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Order {
  @prop({ type: [OrderItem], required: true })
  item: OrderItem[];

  @prop({ required: true, type: Number })
  totalPrice: number;

  @prop({ required: true, enum: STATES, default: STATES.INIT })
  state: STATES;

  @prop({ type: Boolean, default: true })
  active: boolean;
}

export const OrderModel = getModelForClass(Order);
