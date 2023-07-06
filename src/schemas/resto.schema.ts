import { z } from 'zod';

export const createRestoSchema = z.object({
  id: z.string().nonempty('Debe ingresar un ID'),
  name: z.string().nonempty('La empresa debe tener un nombre').trim(),
  tableCount: z
    .number()
    .nonnegative('La cantidad de mesas no puede ser negativo'),
});
