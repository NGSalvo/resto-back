import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    try {
      schema.parse({
        body: req.body,
        params: req.params, //por ahora estara comentado
        // query: req.query, //por ahora estara comentado
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json(
          error.issues.map((issue) => ({
            path: issue.path,
            message: issue.message,
          })),
        );
      }
      return res.status(500).json({ message: 'internal server error' });
    }
  };
