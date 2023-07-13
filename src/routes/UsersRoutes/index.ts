import { Router } from 'express';
export const router = Router();
import { schemaValidation } from '../../middlewares/schemaValidator.middleware';
import { createUserSchema, updateUserSchema } from '../../schemas/user.schema';
import { postUser } from '../../controllers/UserControllers/postUsers';
import { updateUserById } from '../../controllers/UserControllers/updateUsersById';
import { getUsers } from '../../controllers/UserControllers/getAllUsers';
import { getUserId } from '../../controllers/UserControllers/getUsersById';
import { softDeleteUserById } from '../../controllers/UserControllers/putDeleteUsers';
import { decodeToken } from '../../middlewares/firebase.Middleware';

router.post(
  '/users',
  decodeToken,
  schemaValidation(createUserSchema),
  postUser,
);

router.get('/users', decodeToken, getUsers);
router.get('/users/:id', decodeToken, getUserId);

router.put(
  '/users/:id',
  decodeToken,
  schemaValidation(updateUserSchema),
  updateUserById,
);
router.put('/users/delete/:id', decodeToken, softDeleteUserById);
