import { prop, getModelForClass } from '@typegoose/typegoose';

class Table {
  @prop({ required: true, type: Number })
  quantity: number;
}

export const TableModel = getModelForClass(Table);
