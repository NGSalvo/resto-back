import { Router } from 'express';
export const userRouter = Router();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createUserSchema, updateUserSchema } from '../schemas';

import {
  postUser,
  getUsers,
  getRole,
  getUserId,
  updateUserById,
  softDeleteUserById,
} from '../controllers';
import { decodeToken, requireAdmin, schemaValidation } from '../middlewares';

userRouter.post(
  '/',
  decodeToken,
  requireAdmin,
  schemaValidation(createUserSchema),
  postUser,
);

userRouter.get('/', decodeToken, requireAdmin, getUsers);
userRouter.get('/role', decodeToken, getRole);
userRouter.get('/:id', decodeToken, requireAdmin, getUserId);
userRouter.get('/:id/role', decodeToken, getRole);

userRouter.put(
  '/:id',
  decodeToken,
  requireAdmin,
  // schemaValidation(updateUserSchema),
  updateUserById,
);
userRouter.put('/delete/:id', decodeToken, requireAdmin, softDeleteUserById);
