import mercadopago from 'mercadopago';

export async function cancelPayment(id: number) {
  const datos = mercadopago.payment.cancel(id);

  return datos;
}
