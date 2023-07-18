import nodemailer from 'nodemailer';
import { APP_GMAIL_PASS } from './config';

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'restoelmolinopfgrupo@gmail.com',
    pass: APP_GMAIL_PASS,
  },
});

transporter.verify().then(() => {
  console.log('Listo Para enviar Correos');
});
