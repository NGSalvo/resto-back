import mercadopago from 'mercadopago';
import { PreferenceItem } from 'mercadopago/models/preferences/create-payload.model';

export async function createPreference(
  items: PreferenceItem[] | undefined,
  id: number,
) {
  const result = await mercadopago.preferences.create({
    items: items,
    notification_url:
      'https://64a3-138-117-19-170.ngrok-free.app/webhook/' + id,
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
