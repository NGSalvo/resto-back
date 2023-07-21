import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // Puedes ajustar el tipo de 'user' según tus necesidades
    }
  }
}
