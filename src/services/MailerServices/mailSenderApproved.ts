import { transporter } from '../../config';

export async function MailSenderApproved(_orderId: string, payerEmail: string) {
  await transporter.sendMail({
    from: '"El Molino Restaurante" <restoelmolinopfgrupo@gmail.com>',
    to: `${payerEmail}`,
    subject: '✅ Pago realizado ✅',
    html: ` <h1>El Molino Restaurante</h1>
            <h2>El pago se ha completado sin problemas y el pedido ya ha sido enviado a cocina</h2><br/><br/>
            <h3>👨🏻‍🍳🍴Gracias por comprar en El Molino Restaurante🍴👨🏾‍🍳</h3>
        `,
  });
}
