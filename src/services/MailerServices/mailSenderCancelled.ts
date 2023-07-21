import { transporter } from '../../config/mailer';
import { getOrderById } from '../OrderServices/getOrderById';

export async function MailSenderCancelled(orderId: string, payerEmail: string) {
  const order = await getOrderById(orderId);

  await transporter.sendMail({
    from: '"El Molino Restaurante" <restoelmolinopfgrupo@gmail.com>',
    to: `carloscer27r@gmail.com, ${payerEmail}`,
    subject: '❌ Pago Cancelado ❌',

    html: ` <h1>El Molino Restaurante</h1>
            <h2>Ha ocurrido un problema con el pago, por lo cual el mismo fue cancelado, lamentamos las molestias</h2><br/><br/>
            <h2>El monto total de su compra fue de ${order?.totalPrice}</h2><br/><br/>
            <h3>👨🏻‍🍳🍴Gracias por comprar en El Molino Restaurante🍴👨🏾‍🍳</h3>
        `,
  });
}
