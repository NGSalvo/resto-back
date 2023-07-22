import { Router } from 'express';
import { createMPOrder, recieveWebhook } from '../../controllers';

export const router = Router();

router.post('/mpcreate-order', createMPOrder);

router.post('/webhook/:id', recieveWebhook);
