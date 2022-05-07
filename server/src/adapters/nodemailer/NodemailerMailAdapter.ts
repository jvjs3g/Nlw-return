import { MailAdapter, sendMailData } from "../MailAdapter";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "455eb0bf05a19c",
    pass: "f66afa5fc22197"
  }
});

export class NodemailerMailAdpater implements MailAdapter{

  
  async sendMail({subject, body}: sendMailData){
    
   await transport.sendMail({
    from:"Equipe Feedget <oi@teste.com>",
    to:"joao vitor joao@hotmail.com.br",
    subject,
    html:body
  });

  }
}