import { MailMessage } from '../models/mail-message.model';
import { MailDriver } from './mail-driver.interface';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { Logger } from '@nestjs/common';

export class SmtpMail implements MailDriver {
    private readonly logger = new Logger('SmtpMail');

    constructor(private readonly mailerService: MailerService) {}

    async sendMail(message: MailMessage, to: string): Promise<void> {
        const options: ISendMailOptions = {
            to: to, // list of receivers
            from: message.getFrom(), // sender address
            subject: message.getSubject(), // Subject line
            text: message.getText(), // plaintext body
            html: message.getHtml(), // HTML body content
        };

        this.logger.verbose(options);

        this.mailerService
            .sendMail(options)
            .then(() => {
                //
            })
            .catch(() => {
                //
            });
    }
}
