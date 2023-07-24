import { Response, Request } from 'express';
import { getAllDish } from '../../services';

export const getDish = async (_req: Request, res: Response) => {
  try {
    const dish = await getAllDish();
    res.send(dish);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al obtener los platillos' });
  }
};
