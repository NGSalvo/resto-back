import mercadopago from 'mercadopago';
import { PreferenceItem } from 'mercadopago/models/preferences/create-payload.model';

const URL = 'https://resto-front-testing.vercel.app/rating';

export async function createPreference(
  items: PreferenceItem[] | undefined,
  id: number,
) {
  const result = await mercadopago.preferences.create({
    items: items,
    notification_url:
      'https://resto-back-production-2867.up.railway.app/webhook/' + id,
    back_urls: {
      success: `${URL}?orderId=${id}&paymentStatus=approved`,
      failure: `${URL}?orderId=${id}&paymentStatus=cancelled`,
      pending: `${URL}?orderId=${id}&paymentStatus=cancelled`,
    },
    auto_return: 'all',
    payment_methods: {
      installments: 1,
      excluded_payment_types: [
        {
          id: 'ticket',
        },
      ],
    },
  });
  return result.body['init_point'];
}
