import { z } from 'zod';

export enum Roles {
  ADMIN = 'admin',
  CLIENT = 'client',
}

export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .nonempty('Debe ingresar un nombre')
      .max(50, 'Maximo 50 caracteres')
      .trim(),
    lastname: z
      .string()
      .nonempty('Debe ingresar un apellido')
      .max(50, 'Maximo 50 caracteres')
      .trim(),
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(12, 'Maximo 12 caracteres')
      .trim(),
    role: z.enum([Roles.ADMIN, Roles.CLIENT]).optional(),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .nonempty('Debe ingresar un nombre')
      .max(50, 'Maximo 50 caracteres')
      .trim()
      .optional(),
    lastname: z
      .string()
      .nonempty('Debe ingresar un apellido')
      .max(50, 'Maximo 50 caracteres')
      .trim()
      .optional(),
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(12, 'Maximo 12 caracteres')
      .trim()
      .optional(),
    role: z.enum([Roles.ADMIN, Roles.CLIENT]).optional(),
  }),
});
