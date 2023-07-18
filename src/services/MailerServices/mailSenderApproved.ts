import { transporter } from '../../config/mailer';
// import { getOrderById } from "../OrderServices/getOrderById";

export async function MailSenderApproved(orderId: string, payerEmail: string) {
  // const order = await getOrderById(orderId)

  await transporter.sendMail({
    from: '"El Molino Restaurante" <restoelmolinopfgrupo@gmail.com>', // sender address
    to: `carloscer27r@gmail.com, ${payerEmail}`, // list of receivers
    subject: '✅ Pago realizado ✅', // Subject line
    // text: "El pago se ha realizado correctamente!, Muchas gracias por comprar en El Molino Restaurante", // plain text body
    html: `<h1>     El Molino Restaurante</h1>
            <h2>El pago se ha completado sin problemas y el pedido ya ha sido enviado a cocina</h2><br/><br/>
            
            <h3>👨🏻‍🍳🍴Gracias por comprar en El Molino Restaurante🍴👨🏾‍🍳</h3>
        `,
  });
}
