import { Response, Request } from 'express';
import { getAllDish } from '../../services/DishServices/getAllDish';

export const getDish = async (req: Request, res: Response) => {
  
  try {
    const dish = await getAllDish();
    res.send(dish);
  } catch (error) {
    console.log(error);
  }
};