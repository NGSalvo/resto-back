import { dishRouter } from './DishRoutes/dish.routes';
import { orderRouter } from './OrderRoutes/order.routes';
import { paymentRouter } from './PaymentRoutes/payment.routes';
import { userRouter } from './UsersRoutes/user.routes';

export const routes = (app: any) => {
  app.use('/dish', dishRouter);
  app.use('/users', userRouter);
  app.use('/order', orderRouter);
  app.use(paymentRouter);
};
