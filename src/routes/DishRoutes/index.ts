import { Router } from 'express';
import { schemaValidation } from '../../middlewares/schemaValidator.middleware';
import { createDishSchema, updateDishSchema } from '../../schemas/dish.schema';
import { postDish } from '../../controllers/DishControllers/postDish';
import { getDishID } from '../../controllers/DishControllers/getDishById';
import { getDish } from '../../controllers/DishControllers/getAllDish';
import { updateDishById } from '../../controllers/DishControllers/updateDishById';
import { toggleDishById } from '../../controllers/DishControllers/toggleActiveDish';
// import { decodeToken } from '../../middlewares/firebase.middleware';
// import { requireAdmin } from '../../middlewares/permissions/adminPermission.middelware';
// import { requireEmployee } from '../../middlewares/permissions/employeePermission.middelware';

export const router = Router();

router.post(
  '/dish',
  // decodeToken,
  // requireAdmin,
  schemaValidation(createDishSchema),
  postDish,
);

router.get('/dish', getDish);
router.get('/dish/:id', getDishID);
router.put(
  '/dish/:id',
  // decodeToken,
  // requireEmployee,
  schemaValidation(updateDishSchema),
  updateDishById,
);
router.put(
  '/dish/toggle/:id',
  // decodeToken,
  // requireAdmin,
  schemaValidation(updateDishSchema),
  toggleDishById,
);
