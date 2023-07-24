import { Router } from 'express';
// import { schemaValidation } from '../../middlewares/schemaValidator.middleware';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createDishSchema, updateDishSchema } from '../schemas';
import {
  postDish,
  getDish,
  getDishID,
  updateDishById,
  toggleDishById,
} from '../controllers';
// import {
//   decodeToken,
//   requireAdmin,
//   requireEmployee,
//   schemaValidation,
// } from '../../middlewares';

export const dishRouter = Router();

dishRouter.post(
  '/',
  // decodeToken,
  // requireAdmin,
  // schemaValidation(createDishSchema),
  postDish,
);

dishRouter.get('/', getDish);
dishRouter.get('/:id', getDishID);
dishRouter.put(
  '/:id',
  // decodeToken,
  // requireEmployee,
  // schemaValidation(updateDishSchema),
  updateDishById,
);
dishRouter.put(
  '/toggle/:id',
  // decodeToken,
  // requireAdmin,
  // schemaValidation(updateDishSchema),
  toggleDishById,
);
