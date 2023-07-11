import { Router } from 'express';
import { schemaValidation } from '../../middlewares/schemaValidator.middleware';
import {
  createOrderSchema,
  updateOrderSchema,
} from '../../schemas/order.schema';
import { postOrder } from '../../controllers/OrderControllers/postOrder';
import { getOrder } from '../../controllers/OrderControllers/getAllOrder';
import { getOrderId } from '../../controllers/OrderControllers/getOrderById';
import { updateOrders } from '../../controllers/OrderControllers/updateOrder';
import { toggleOrderById } from '../../controllers/OrderControllers/toggleOrder';

export const router = Router();

router.post('/order', schemaValidation(createOrderSchema), postOrder);

router.get('/order', getOrder);
router.get('/order/:id', getOrderId);
router.put('/order/:id', schemaValidation(updateOrderSchema), updateOrders);
router.put(
  '/order/delete/:id',
  schemaValidation(updateOrderSchema),
  toggleOrderById,
);
