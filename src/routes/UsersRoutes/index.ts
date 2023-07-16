import { Router } from 'express';
export const router = Router();
import { schemaValidation } from '../../middlewares/schemaValidator.middleware';
import { createUserSchema, updateUserSchema } from '../../schemas/user.schema';
import { postUser } from '../../controllers/UserControllers/postUsers';
import { updateUserById } from '../../controllers/UserControllers/updateUsersById';
import { getUsers } from '../../controllers/UserControllers/getAllUsers';
import { getUserId } from '../../controllers/UserControllers/getUsersById';
import { softDeleteUserById } from '../../controllers/UserControllers/putDeleteUsers';
import { decodeToken } from '../../middlewares/firebase.middleware';
import { requireAdmin } from '../../middlewares/permissions/adminPermission.middelware';

router.post(
  '/users',
  decodeToken,
  requireAdmin,
  schemaValidation(createUserSchema),
  postUser,
);

router.get('/users', decodeToken, requireAdmin, getUsers);
router.get('/users/:id', decodeToken, requireAdmin, getUserId);

router.put(
  '/users/:id',
  decodeToken,
  requireAdmin,
  schemaValidation(updateUserSchema),
  updateUserById,
);
router.put('/users/delete/:id', decodeToken, requireAdmin, softDeleteUserById);
