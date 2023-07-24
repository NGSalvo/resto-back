import { Router } from 'express';
// import { schemaValidation } from '../../middlewares/schemaValidator.middleware';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createTableSchema, updateTableSchema } from '../schemas';
import { postTable, getTable, updateTable } from '../controllers';

// import {
//   decodeToken,
//   requireAdmin,
//   requireEmployee,
//   schemaValidation,
// } from '../../middlewares';

export const tableRouter = Router();

tableRouter.post(
  '/',
  // decodeToken,
  // requireAdmin,
  // schemaValidation(createDishSchema),
  postTable,
);
tableRouter.get('/', getTable);
tableRouter.put(
  '/',
  // decodeToken,
  // requireEmployee,
  // schemaValidation(updateDishSchema),
  updateTable,
);
