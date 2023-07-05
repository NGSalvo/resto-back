import { z } from 'zod';
import { CATEGORIES } from '../models/Dish';

const { APPETIZER, DESSERT, MAIN, DRINK } = CATEGORIES;

export const createDishSchema = z.object({
  title: z
    .string()
    .nonempty('Debe tener un nombre')
    .max(75, 'Maximo 75 caracteres'),
  description: z.string().nonempty('Debe tener una descripción'),
  image: z.string().url('Debe ingresar una Url valida'),
  price: z.number().min(0, 'Precio debe ser mayor a 0').default(0),
  categories: z.enum([APPETIZER, DESSERT, MAIN, DRINK]),
});
