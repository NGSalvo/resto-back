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
import { decodeToken } from '../../middlewares/firebase.middleware';
import { requireAdmin } from '../../middlewares/permissions/adminPermission.middelware';
import { requireEmployee } from '../../middlewares/permissions/employeePermission.middelware';

export const router = Router();

router.post(
  '/order',
  decodeToken,
  requireAdmin,
  schemaValidation(createOrderSchema),
  postOrder,
);

router.get('/order', decodeToken, requireEmployee, getOrder);
router.get('/order/:id', decodeToken, requireEmployee, getOrderId);
router.put(
  '/order/:id',
  decodeToken,
  requireEmployee,
  schemaValidation(updateOrderSchema),
  updateOrders,
);
router.put(
  '/order/delete/:id',
  decodeToken,
  requireAdmin,
  schemaValidation(updateOrderSchema),
  toggleOrderById,
);
