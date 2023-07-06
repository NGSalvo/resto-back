import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { modelOptions } from '@typegoose/typegoose';
import { DishModel } from './Dish';

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
}

export const OrderModel = getModelForClass(Order);
