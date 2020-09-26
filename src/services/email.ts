import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { env } from "../config";

const options: SMTPTransport.Options = {
  host: env.SMTP.HOST,
  port: +env.SMTP.PORT,
  secure: false,
  auth: {
    user: env.SMTP.AUTH,
    pass: env.SMTP.PASS,
  },
};
const transporter = nodemailer.createTransport(options);
export default class EmailService {
  static async sendMail({ from, to, subject, text, html }: any) {
    const info = await transporter.sendMail({
      from: `inShare <${from}>`,
      to,
      subject,
      text,
      html,
    });

    return info;
  }
}
