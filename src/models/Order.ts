import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { modelOptions } from '@typegoose/typegoose';
import { Dish } from './Dish';

export enum STATES {
  INIT = 'init',
  PAID = 'paid',
  CANCELLED = 'cancelled',
  INPROGRESS = 'in progress',
  READY = 'ready',
  DELIVERED = 'delivered',
}

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
class OrderItem {
  @prop({ required: true, ref: 'Dish' })
  dish: Ref<Dish>;

  @prop({ required: true, type: Number })
  quantity: number;

  @prop({ type: String })
  observation: string;

  @prop({ required: true, type: Number })
  totalPrice: number;
}

class Payment {
  @prop({ required: true, type: String })
  id: string;

  @prop({ required: true, type: String })
  status: string;

  @prop({ required: true, type: Number })
  netAmount: number;

  @prop({ required: true, type: Date })
  dateCreated: Date;

  @prop({ required: true, type: Date })
  dateAproved: Date;
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
    id: true,
  },
})
export class Order {
  @prop({ type: () => OrderItem, required: true })
  item: OrderItem[];

  @prop({ required: true, type: Number })
  totalPrice: number;

  @prop({ required: true, enum: STATES, default: STATES.INIT })
  state: STATES;

  @prop({ type: Boolean, default: true })
  active: boolean;

  @prop({ type: () => Payment })
  payment: Payment;

  @prop({ required: true, type: String })
  table: string;
}

export const OrderModel = getModelForClass(Order);
