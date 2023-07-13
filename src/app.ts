import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { router as DishRouter } from './routes/DishRoutes/index';
import { router as UserRouter } from './routes/UsersRoutes/index';
import { router as OrderRouter } from './routes/OrderRoutes/index';
import { router as PaymentRouter } from './routes/PaymentRoutes/index';
export const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(DishRouter);
app.use(UserRouter);
app.use(OrderRouter);
app.use(PaymentRouter);
//EJEMPLO DE POSTEO A LA BASE DE DATOS

// TODO: refactor de rutas para que solo hay una sentencia que cargue todas las rutas

// TODO: middleware para atrapar rutas no previstas o errores
