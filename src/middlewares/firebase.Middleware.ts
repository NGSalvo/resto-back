import admin from '../config/firebase-config';
import { Request, Response, NextFunction } from 'express';

export async function decodeToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    if (token) {
      const decodeValue: admin.auth.DecodedIdToken = await admin
        .auth()
        .verifyIdToken(token);
      if (decodeValue) {
        console.log(decodeValue);
        return next();
      }
    }
    return res.send('Unauthorized');
  } catch (error) {
    return res.send('Internal Error');
  }
}
