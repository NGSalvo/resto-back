import { prop, getModelForClass } from '@typegoose/typegoose';
import { modelOptions } from '@typegoose/typegoose';

export enum ROLEUSER {
  ADMIN = 'admin',
  CLIENT = 'client',
}

@modelOptions({
  schemaOptions: {
    _id: true,
    timestamps: true,
  },
})
class User {
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
}

export const UserModel = getModelForClass(User);
