import { Inject, Injectable } from '@nestjs/common';
import { MailMessage } from '../models/mail-message.model';
import { MailMessageBuilder } from '../models/mail-message.builder';
import { MailDriver } from '../drivers/mail-driver.interface';

@Injectable()
export class MailService {
    constructor(
        @Inject('MAIL_DRIVER') protected readonly mailDriver: MailDriver,
    ) {}

    public send(message: MailMessage, to: string): void {
        this.mailDriver.sendMail(message, to);
    }

    public sample(){ 
        console.log('sample');
        
    }

    public createMessageBuilder(): MailMessageBuilder {
        return new MailMessageBuilder();
    }
}
