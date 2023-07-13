import { Router } from 'express';
import {
  createMPOrder,
  recieveWebhook,
} from '../../controllers/PaymentControllers/paymentController';

export const router = Router();

router.post('/mpcreate-order', createMPOrder);

router.post('/webhook/:id', recieveWebhook);
