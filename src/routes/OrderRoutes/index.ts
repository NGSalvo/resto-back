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
import { decodeToken } from '../../middlewares/firebase.Middleware';

export const router = Router();

router.post(
  '/order',
  decodeToken,
  schemaValidation(createOrderSchema),
  postOrder,
);

router.get('/order', decodeToken, getOrder);
router.get('/order/:id', decodeToken, getOrderId);
router.put(
  '/order/:id',
  decodeToken,
  schemaValidation(updateOrderSchema),
  updateOrders,
);
router.put(
  '/order/delete/:id',
  decodeToken,
  schemaValidation(updateOrderSchema),
  toggleOrderById,
);
