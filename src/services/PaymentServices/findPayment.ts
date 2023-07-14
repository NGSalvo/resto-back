import mercadopago from 'mercadopago';

export async function findPayment(id: number) {
  const data = await mercadopago.payment.findById(id);

  return data;
}
