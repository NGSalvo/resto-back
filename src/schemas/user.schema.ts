import { z } from 'zod';

export enum Roles {
  ADMIN = 'admin',
  EMPLOYEE = 'employee',
}

export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'El nombre debe ser una cadena de caracteres' })
      .nonempty('Debe ingresar un nombre')
      .max(50, 'Maximo 50 caracteres')
      .trim(),
    lastName: z
      .string({
        required_error: 'El apellido debe ser una cadena de caracteres',
      })
      .nonempty('Debe ingresar un apellido')
      .max(50, 'Maximo 50 caracteres')
      .trim(),
    email: z
      .string({ required_error: 'El email debe ser una cadena de caracteres' })
      .email('Debe ser un email')
      .nonempty('Debe enviar un email'),
    password: z
      .string({
        required_error: 'La contraseña debe ser una cadena de caracteres',
      })
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(12, 'Maximo 12 caracteres')
      .trim(),
    role: z
      .enum([Roles.ADMIN, Roles.EMPLOYEE], {
        required_error: 'El rol debe ser admin o employee',
      })
      .optional(),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'El nombre debe ser una cadena de caracteres' })
      .nonempty('Debe ingresar un nombre')
      .max(50, 'Maximo 50 caracteres')
      .trim()
      .optional(),
    lastName: z
      .string({
        required_error: 'El apellido debe ser una cadena de caracteres',
      })
      .nonempty('Debe ingresar un apellido')
      .max(50, 'Maximo 50 caracteres')
      .trim()
      .optional(),
    email: z
      .string({ required_error: 'El email debe ser una cadena de caracteres' })
      .email('Debe ser un email')
      .nonempty('Debe enviar un email')
      .optional(),
    password: z
      .string({
        required_error: 'La contraseña debe ser una cadena de caracteres',
      })
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(12, 'Maximo 12 caracteres')
      .trim()
      .optional(),
    role: z
      .enum([Roles.ADMIN, Roles.EMPLOYEE], {
        required_error: 'El rol debe ser admin o employee',
      })
      .optional(),
  }),
});
