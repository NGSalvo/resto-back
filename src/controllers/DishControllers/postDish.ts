import { Response, Request } from 'express';
import { createDish } from '../../services/DishServices/createDish';

export const postDish = async (req: Request, res: Response) => {
  try {
    const dish = await createDish(req.body);
    res.send(dish);
  } catch (error) {
    res.send(error);
  }
};
