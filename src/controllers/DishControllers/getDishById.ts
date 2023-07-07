import { Response, Request } from 'express';
import { getDishById } from '../../services/DishServices/getDishById';

export const getDishID = async (req: Request, res: Response) => {
  const {id} = req.params
  try {
    const dish = await getDishById(id);
    res.send(dish);
  } catch (error) {
    console.log(error);
  }
};