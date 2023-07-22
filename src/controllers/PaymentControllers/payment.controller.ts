import mercadopago from 'mercadopago';
import { PreferenceItem } from 'mercadopago/models/preferences/create-payload.model';

import { MP_API_KEY } from '../../config';
import { Response, Request } from 'express';

import { Dish } from '../../models';
import { createOrder, getOrderById, createPreference } from '../../services';

export const createMPOrder = async (req: Request, res: Response) => {
  mercadopago.configure({
    access_token: MP_API_KEY,
  });

  const newOrder = await createOrder(req.body);
  const orderById = await getOrderById(newOrder.id);

  const dishes: PreferenceItem[] | undefined = orderById?.item.map(dish => ({
    title: (dish.dish as Dish).title,
    unit_price: (dish.dish as Dish).price,
    quantity: dish.quantity,
    currency_id: 'ARS',
  }));

  try {
    const result = await createPreference(dishes, newOrder.id);

    res.status(200).send(result);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
