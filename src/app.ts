import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();

app.use(morgan('dev'));
app.use(cors());
