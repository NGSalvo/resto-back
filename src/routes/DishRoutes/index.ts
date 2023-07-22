import { Router } from 'express';
// import { schemaValidation } from '../../middlewares/schemaValidator.middleware';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createDishSchema, updateDishSchema } from '../../schemas';
import {
  postDish,
  getDish,
  getDishID,
  updateDishById,
  toggleDishById,
} from '../../controllers';
// import {
//   decodeToken,
//   requireAdmin,
//   requireEmployee,
//   schemaValidation,
// } from '../../middlewares';

export const router = Router();

router.post(
  '/dish',
  // decodeToken,
  // requireAdmin,
  // schemaValidation(createDishSchema),
  postDish,
);

router.get('/dish', getDish);
router.get('/dish/:id', getDishID);
router.put(
  '/dish/:id',
  // decodeToken,
  // requireEmployee,
  // schemaValidation(updateDishSchema),
  updateDishById,
);
router.put(
  '/dish/toggle/:id',
  // decodeToken,
  // requireAdmin,
  // schemaValidation(updateDishSchema),
  toggleDishById,
);
