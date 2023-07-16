import { Request } from 'express';

export interface CustomRequest extends Request {
  user?: any;
}

// Extender el tipo "Request" de Express para agregar la propiedad "user"
declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}
