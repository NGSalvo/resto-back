import { Response, Request } from 'express';

import { STATES } from '../../models';

import { updateOrder } from '../../services/OrderServices/updateOrder';

import { findPayment } from '../../services/PaymentServices/findPayment';
import { cancelPayment } from '../../services/PaymentServices/cancelPayment';

export const recieveWebhook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payment = req.query;

  try {
    if (payment.type === 'payment') {
      const data = await findPayment(Number(payment['data.id']));

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
      } else {
        const datos = await cancelPayment(Number(payment['data.id']));

        await updateOrder(id, {
          active: false,
          state: STATES.CANCELLED,
          payment: {
            id: datos.body['id'],
            netAmount: datos.body['transaction_details']['net_received_amount'],
            status: datos.body['status'],
            dateCreated: datos.body['date_created'],
            dateAproved: datos.body['date_approved'],
          },
        });

        return res.status(204).send('El pedido fue eliminado');
      }
    }
  } catch (error) {
    console.log('entre al error', error);
    return res.status(500).json({ error: error });
  }
};