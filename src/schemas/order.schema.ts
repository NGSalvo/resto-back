import { z } from 'zod';

const enum orderState {
  INIT = 'init',
  PAID = 'paid',
  DELIVERED = 'delivered',
}

const itemsSchema = z.object({
  totalPrice: z
    .number()
    .nonnegative('La suma de los precios no puede ser negativa')
    .default(0),
  quantity: z.number().nonnegative('La cantidad no puede ser negativa'),
  dish: z.string().nonempty('Debe enviar el ID del plato'),
  observation: z.string().optional(),
});

export const createOrderSchema = z.object({
  body: z.object({
    item: z.array(itemsSchema),
    totalPrice: z.number(),
    table: z.number().nonnegative('No puede ser un numero de mesa negativo'),
    state: z.enum([orderState.DELIVERED, orderState.INIT, orderState.PAID]),
  }),
});

export const updateOrderSchema = z.object({
  body: z.object({
    state: z.enum([orderState.DELIVERED, orderState.INIT, orderState.PAID]),
  }),
});
