import { prop, getModelForClass } from '@typegoose/typegoose';
import { modelOptions } from '@typegoose/typegoose';

export enum ROLEUSER {
  ADMIN = 'admin',
  EMPLOYEE = 'employee',
}

@modelOptions({
  schemaOptions: {
    _id: true,
    timestamps: true,
  },
})
export class User {
  @prop({ required: true, type: String })
  name: string;

  @prop({ required: true, type: String })
  lastName: string;

  @prop({ required: true, unique: true, type: String })
  email: string;

  @prop({ required: true, type: String })
  password: string;

  @prop({ required: true, enum: ROLEUSER })
  role: ROLEUSER;

  @prop({ type: Boolean, default: true })
  active: boolean;
}

export const UserModel = getModelForClass(User);
