import { Response, Request } from 'express';
import { toggleDish } from '../../services';

export const toggleDishById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const dish = await toggleDish(id);
    res.send(dish);
  } catch (error) {
    res.send(error);
  }
};
