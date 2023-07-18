import { transporter } from '../../config/mailer';
// import { getOrderById } from "../OrderServices/getOrderById";

export async function MailSenderCancelled(orderId: string, payerEmail: string) {
  // const order = await getOrderById(orderId)

  await transporter.sendMail({
    from: '"El Molino Restaurante" <restoelmolinopfgrupo@gmail.com>', // sender address
    to: `carloscer27r@gmail.com, ${payerEmail}`, // list of receivers
    subject: '❌ Pago Cancelado ❌', // Subject line
    // text: "El pago se ha realizado correctamente!, Muchas gracias por comprar en El Molino Restaurante", // plain text body
    html: `<h1>El Molino Restaurante</h1>
            <h2>Ha ocurrido un problema con el pago, por lo cual el mismo fue cancelado, lamentamos las molestias</h2><br/><br/>
            
            <h3>👨🏻‍🍳🍴Gracias por comprar en El Molino Restaurante🍴👨🏾‍🍳</h3>
        `,
  });
}
