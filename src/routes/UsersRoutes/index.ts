import { Router } from 'express';
export const router = Router();

import { schemaValidation } from '../../middlewares/schemaValidator.middleware';
import { createUserSchema, updateUserSchema } from '../../schemas/user.schema';

import { postUser } from '../../controllers/UserControllers/postUsers';
import { updateUserById } from '../../controllers/UserControllers/updateUsersById';
import { getUsers } from '../../controllers/UserControllers/getAllUsers';
import { getUserId } from '../../controllers/UserControllers/getUsersById';

router.post('/users', schemaValidation(createUserSchema), postUser);

router.get('/users', getUsers);
router.get('/users/:id', getUserId);

router.put('/users/:id', schemaValidation(updateUserSchema), updateUserById);
