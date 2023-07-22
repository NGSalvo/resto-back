import { Router } from 'express';
export const router = Router();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createUserSchema, updateUserSchema } from '../../schemas';

import {
  postUser,
  getUsers,
  getRole,
  getUserId,
  updateUserById,
  softDeleteUserById,
} from '../../controllers';
import { decodeToken, requireAdmin, schemaValidation } from '../../middlewares';

router.post(
  '/users',
  decodeToken,
  requireAdmin,
  schemaValidation(createUserSchema),
  postUser,
);

router.get('/users', decodeToken, requireAdmin, getUsers);
router.get('/users/role', decodeToken, getRole);
router.get('/users/:id', decodeToken, requireAdmin, getUserId);
router.get('/users/:id/role', decodeToken, getRole);

router.put(
  '/users/:id',
  decodeToken,
  requireAdmin,
  // schemaValidation(updateUserSchema),
  updateUserById,
);
router.put('/users/delete/:id', decodeToken, requireAdmin, softDeleteUserById);
