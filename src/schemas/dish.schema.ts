import { z } from 'zod';
import { CATEGORIES } from '../models';

const { APPETIZER, DESSERT, MAIN, DRINK } = CATEGORIES;

export const createDishSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'El titulo debe ser una cadena de caracteres' })
      .nonempty('Debe tener un nombre')
      .max(75, 'Maximo 75 caracteres')
      .trim(),
    description: z
      .string({
        required_error: 'La descripcion debe ser una cadena de caracteres',
      })
      .nonempty('Debe tener una descripción')
      .trim(),
    image: z
      .string({ required_error: 'El url debe ser una cadena de caracteres' })
      .url('Debe ingresar una Url valida'),
    price: z
      .number({ required_error: 'El precio debe ser un numero entero' })
      .min(0, 'Precio debe ser mayor a 0'),
    categories: z.enum([APPETIZER, DESSERT, MAIN, DRINK], {
      required_error:
        'La categoria solo puede ser: main, appetizer, dessert y drink',
    }),
  }),
});

export const updateDishSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'El titulo debe ser una cadena de caracteres' })
      .nonempty('Debe tener un nombre')
      .max(75, 'Maximo 75 caracteres')
      .trim()
      .optional(),
    description: z
      .string({
        required_error: 'La descripcion debe ser una cadena de caracteres',
      })
      .nonempty('Debe tener una descripción')
      .trim()
      .optional(),
    image: z
      .string({ required_error: 'El url debe ser una cadena de caracteres' })
      .url('Debe ingresar una Url valida')
      .optional(),
    price: z
      .number({ required_error: 'El precio debe ser un numero entero' })
      .min(0, 'Precio debe ser mayor a 0')
      .default(0)
      .optional(),
    categories: z
      .enum([APPETIZER, DESSERT, MAIN, DRINK], {
        required_error:
          'La categoria solo puede ser: main, appetizer, dessert y drink',
      })
      .optional(),
  }),
  params: z.object({
    id: z
      .string({ required_error: 'El Id debe ser una cadena de caracteres' })
      .nonempty('El id debe ser especificado')
      .min(24, 'Id invalido')
      .max(24, 'Id invalido'),
  }),
});
