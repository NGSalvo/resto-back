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
    lastName: z
      .string()
      .nonempty('Debe ingresar un apellido')
      .max(50, 'Maximo 50 caracteres')
      .trim(),
    email: z
      .string()
      .email('Debe ser un email')
      .nonempty('Debe enviar un email'),
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
    lastName: z
      .string()
      .nonempty('Debe ingresar un apellido')
      .max(50, 'Maximo 50 caracteres')
      .trim()
      .optional(),
    email: z
      .string()
      .email('Debe ser un email')
      .nonempty('Debe enviar un email')
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
