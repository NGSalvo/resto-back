import { Router } from 'express';

import {
  // createOrderSchema,
  updateOrderSchema,
} from '../../schemas';
import {
  postOrder,
  getOrder,
  getOrderId,
  updateOrders,
  toggleOrderById,
} from '../../controllers';
import {
  // decodeToken,
  // requireAdmin,
  // requireEmployee,
  schemaValidation,
} from '../../middlewares';

export const router = Router();

router.post(
  '/order',
  // decodeToken,
  // requireAdmin,
  // schemaValidation(createOrderSchema),
  postOrder,
);

router.get(
  '/order',
  //  decodeToken,
  //  requireEmployee,
  getOrder,
);
router.get(
  '/order/:id',
  // decodeToken,
  // requireEmployee,
  getOrderId,
);
router.put(
  '/order/:id',
  // decodeToken,
  // requireEmployee,
  schemaValidation(updateOrderSchema),
  updateOrders,
);
router.put(
  '/order/delete/:id',
  // decodeToken,
  // requireAdmin,
  schemaValidation(updateOrderSchema),
  toggleOrderById,
);
