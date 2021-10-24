import {
  EmailProvider,
  ProviderName,
  ProviderType,
  MaildevEmailOptions,
  MaildevConstructorOptions,
} from '@messageraft/common'
import nodemailer, { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import Mail from 'nodemailer/lib/mailer'

class SendGridProvider extends EmailProvider {
  name = ProviderName.MAILDEV
  type = ProviderType.EMAIL
  smtpTransport: Transporter<SMTPTransport.SentMessageInfo>

  constructor(options: MaildevConstructorOptions) {
    super()
    this.smtpTransport = nodemailer.createTransport({
      port: options?.port || 1025,
      ignoreTLS: true,
    })
  }

  async send(data: MaildevEmailOptions): Promise<any> {
    const recipients = Array.isArray(data.to) ? data.to : [data.to]

    const formattedData = Object.assign(data, { to: recipients })

    return this.smtpTransport.sendMail(formattedData as Mail.Options)
  }
}

export { SendGridProvider as provider }
