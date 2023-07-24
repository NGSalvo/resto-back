import { Response, Request } from 'express';
import { getDishById } from '../../services';

export const getDishID = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const dish = await getDishById(id);

    if (dish === null) {
      return res
        .status(404)
        .json({ message: `No se encontró un platillo con el ID: ${id}` });
    }
    res.send(dish);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Erorr al obtener un platillo' });
  }
};
