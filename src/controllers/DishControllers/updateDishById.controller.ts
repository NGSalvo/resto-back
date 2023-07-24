import { Response, Request } from 'express';
import { updateDish } from '../../services';

export const updateDishById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const dish = await updateDish(id, req.body);
    res.send(dish);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error al actualizar el platillo' });
  }
};
