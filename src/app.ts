import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { routes } from './routes';

export const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// add routes
routes(app);

//EJEMPLO DE POSTEO A LA BASE DE DATOS

// TODO: refactor de rutas para que solo hay una sentencia que cargue todas las rutas

// TODO: middleware para atrapar rutas no previstas o errores
