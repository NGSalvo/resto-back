import { Router } from 'express';

import {
  // createOrderSchema,
  updateOrderSchema,
} from '../schemas';
import {
  postOrder,
  getOrder,
  getOrderId,
  updateOrders,
  toggleOrderById,
  getFilteredOrders,
} from '../controllers';
import {
  decodeToken,
  // requireAdmin,
  requireEmployee,
  schemaValidation,
} from '../middlewares';

export const orderRouter = Router();

orderRouter.post(
  '/',
  // decodeToken,
  // requireAdmin,
  // schemaValidation(createOrderSchema),
  postOrder,
);

orderRouter.get('/', decodeToken, requireEmployee, getOrder);
orderRouter.get(
  '/:id',
  // decodeToken,
  // requireEmployee,
  getOrderId,
);
orderRouter.put(
  '/:id',
  // decodeToken,
  // requireEmployee,
  schemaValidation(updateOrderSchema),
  updateOrders,
);
orderRouter.put(
  '/delete/:id',
  // decodeToken,
  // requireAdmin,
  schemaValidation(updateOrderSchema),
  toggleOrderById,
);
orderRouter.get(
  '/order/filter',
  // decodeToken,
  // requireEmployee,
  getFilteredOrders,
);
