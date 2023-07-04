import { modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    _id: false,
    timestamps: true,
  },
})
export class Review {
  @prop({ type: Number, min: 0, required: true })
  value: number;

  @prop({ type: String })
  comment: string;
}
