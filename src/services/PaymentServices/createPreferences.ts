import mercadopago from 'mercadopago';
import { PreferenceItem } from 'mercadopago/models/preferences/create-payload.model';

export async function createPreference(
  items: PreferenceItem[] | undefined,
  id: number,
) {
  const result = await mercadopago.preferences.create({
    items: items,
    notification_url:
      'https://resto-back-production-2867.up.railway.app/webhook/' + id,
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
