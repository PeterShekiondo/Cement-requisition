import { Logger } from '@nestjs/common';
import { MailMessage } from '../models/mail-message.model';
import { MailDriver } from './mail-driver.interface';

export class LogMail implements MailDriver {
    private readonly logger = new Logger('LogMail');

    async sendMail(message: MailMessage, to: string): Promise<void> {
        let log = `\n===============MAIL-MESSAGE====================`;
        log += `\nTO:${to}`;
        log += `\n===============TEXT====================`;
        log += `\n${message.getText()}`;
        log += `\n===============HTML===================`;
        log += `\nHTML:${message.getHtml()}`;
        log += `\n===============MAIL-END====================`;

        this.logger.debug(log);
    }
}
