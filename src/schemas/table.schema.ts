import { z } from 'zod';

export const createTableSchema = z.object({
  body: z.object({
    quantity: z
      .number({ required_error: 'Las mesas deben ser un numero' })
      .nonnegative('No puede haber un numero negativo de mesas'),
  }),
});

export const updateTableSchema = z.object({
  body: z.object({
    quantity: z
      .number({ required_error: 'Las mesas deben ser un numero' })
      .nonnegative('No puede haber un numero negativo de mesas'),
  }),
});
