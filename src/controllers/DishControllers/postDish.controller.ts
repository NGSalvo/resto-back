import { Response, Request } from 'express';
import { createDish } from '../../services';

export const postDish = async (req: Request, res: Response) => {
  try {
    const dish = await createDish(req.body);
    res.send(dish);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al crear un platillo' });
  }
};
