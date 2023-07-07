import { z } from 'zod';

export const createTableSchema = z.object({
  body: z.object({
    quantity: z
      .number()
      .nonnegative('No puede haber un numero negativo de mesas'),
  }),
});

export const updateTableSchema = z.object({
  body: z.object({
    quantity: z
      .number()
      .nonnegative('No puede haber un numero negativo de mesas'),
  }),
});
