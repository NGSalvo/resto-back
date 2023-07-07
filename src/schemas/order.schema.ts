import { z } from 'zod';

const enum orderState {
  INIT = 'init',
  PAID = 'paid',
  DELIVERED = 'delivered',
}

const itemsSchema = z.object({
  totalPrice: z
    .number({
      required_error: 'El precio total solo puede ser un numero entero',
    })
    .nonnegative('La suma de los precios no puede ser negativa')
    .default(0),
  quantity: z
    .number({ required_error: 'La cantidad solo pueden ser numeros enteros' })
    .nonnegative('La cantidad no puede ser negativa'),
  dish: z
    .string({ required_error: 'El Id debe ser un string' })
    .nonempty('Debe enviar el ID del plato'),
  observation: z
    .string({
      required_error: 'Las observaciones deben ser una cadena de caracteres',
    })
    .optional(),
});

export const createOrderSchema = z.object({
  body: z.object({
    item: z.array(itemsSchema, {
      required_error: 'Debe enviar los datos en un array',
    }),
    totalPrice: z.number({
      required_error: 'El precio total debe ser un numero',
    }),
    state: z
      .enum([orderState.DELIVERED, orderState.INIT, orderState.PAID])
      .default(orderState.INIT),
  }),
  params: z.object({
    table: z
      .number({ required_error: 'Las mesas deben ser un numero' })
      .nonnegative('No puede ser un numero de mesa negativo'),
  }),
});

export const updateOrderSchema = z.object({
  body: z.object({
    state: z.enum([orderState.DELIVERED, orderState.INIT, orderState.PAID]),
  }),
});
