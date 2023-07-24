import { Router } from 'express';
import { createMPOrder, recieveWebhook } from '../controllers';

export const paymentRouter = Router();

paymentRouter.post('/mpcreate-order', createMPOrder);

paymentRouter.post('/webhook/:id', recieveWebhook);
