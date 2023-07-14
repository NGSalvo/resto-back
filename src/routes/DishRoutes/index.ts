import { Router } from 'express';
import { schemaValidation } from '../../middlewares/schemaValidator.middleware';
import { createDishSchema, updateDishSchema } from '../../schemas/dish.schema';
import { postDish } from '../../controllers/DishControllers/postDish';
import { getDishID } from '../../controllers/DishControllers/getDishById';
import { getDish } from '../../controllers/DishControllers/getAllDish';
import { updateDishById } from '../../controllers/DishControllers/updateDishById';
import { toggleDishById } from '../../controllers/DishControllers/toggleActiveDish';
import { decodeToken } from '../../middlewares/firebase.Middleware';

export const router = Router();

router.post('/dish', decodeToken, schemaValidation(createDishSchema), postDish);

router.get('/dish', getDish);
router.get('/dish/:id', getDishID);
router.put(
  '/dish/:id',
  decodeToken,
  schemaValidation(updateDishSchema),
  updateDishById,
);
router.put(
  '/dish/toggle/:id',
  decodeToken,
  schemaValidation(updateDishSchema),
  toggleDishById,
);
