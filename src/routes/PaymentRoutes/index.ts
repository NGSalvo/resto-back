import { Router } from 'express';
import { createMPOrder } from '../../controllers/PaymentControllers/paymentController';
import { recieveWebhook } from '../../controllers/PaymentControllers/webhookController';

export const router = Router();

router.post('/mpcreate-order', createMPOrder);

router.post('/webhook/:id', recieveWebhook);
