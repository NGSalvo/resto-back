import {Router} from 'express'
import { schemaValidation } from '../../middlewares/schemaValidator.middleware'
import { createDishSchema, updateDishSchema } from '../../schemas/dish.schema'
import { postDish } from '../../controllers/DishControllers/postDish'
import { getDishID } from '../../controllers/DishControllers/getDishById';
import { getDish } from '../../controllers/DishControllers/getAllDish';
import { updateDishById } from '../../controllers/DishControllers/updateDishById';
import { toggleDishById } from '../../controllers/DishControllers/toggleActiveDish';
export const router = Router();

router.post('/dish', schemaValidation(createDishSchema),postDish)

router.get('/dish',getDish)
router.get('/dish/:id',getDishID)
router.put('/dish/:id',schemaValidation(updateDishSchema),updateDishById)
router.put('/dish/toggle/:id',schemaValidation(updateDishSchema),toggleDishById)