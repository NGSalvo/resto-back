import { dishRouter } from './dish.routes';
import { orderRouter } from './order.routes';
import { paymentRouter } from './payment.routes';
import { userRouter } from './user.routes';

export const routes = (app: any) => {
  app.use('/dish', dishRouter);
  app.use('/users', userRouter);
  app.use('/order', orderRouter);
  app.use(paymentRouter);
};
