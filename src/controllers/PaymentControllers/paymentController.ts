import { Response, Request } from 'express';
import mercadopago from 'mercadopago';
import { createOrder } from '../../services/OrderServices/createOrder';
import { getOrderById } from '../../services/OrderServices/getOrderById';
import { Dish, STATES } from '../../models';
import { PreferenceItem } from 'mercadopago/models/preferences/create-payload.model';
import { updateOrder } from '../../services/OrderServices/updateOrder';
import { MP_API_KEY } from '../../config';

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

  const result = await mercadopago.preferences.create({
    items: dishes,
    notification_url:
      'https://resto-back-production-2867.up.railway.app/webhook/' + newOrder.id,
    payment_methods: {
      installments: 1,
      excluded_payment_types: [
        {
          id: 'ticket',
        },
      ],
    },
  });
  res.json(result.body['init_point']);
};

export const recieveWebhook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payment = req.query;

  try {
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(
        Number(payment['data.id']),
      );

      if (data.body.status === 'approved') {
        await updateOrder(id, {
          state: STATES.PAID,
          payment: {
            id: data.body['id'],
            netAmount: data.body['transaction_details']['net_received_amount'],
            status: data.body['status'],
            dateCreated: data.body['date_created'],
            dateAproved: data.body['date_approved'],
          },
        });

        return res.status(204).send('Pago Realizado con exito');
      } else if (data.body.status === 'in_progress') {
        await mercadopago.payment.cancel(Number(payment['data.id']));
        await updateOrder(id, {
          active: false,
          state: STATES.CANCELLED,
          payment: {
            id: data.body['id'],
            netAmount: data.body['transaction_details']['net_received_amount'],
            status: data.body['status'],
            dateCreated: data.body['date_created'],
            dateAproved: data.body['date_approved'],
          },
        });

        return res.send('El pedido fue eliminado');
      } else {
        await updateOrder(id, {
          active: false,
          state: STATES.CANCELLED,
          payment: {
            id: data.body['id'],
            netAmount: data.body['transaction_details']['net_received_amount'],
            status: data.body['status'],
            dateCreated: data.body['date_created'],
            dateAproved: data.body['date_approved'],
          },
        });
        return res.send('El pedido fue eliminado');
      }
    }
  } catch (error) {
    console.log('entre al error', error);
    return res.sendStatus(500).json({ error: error });
  }
};
