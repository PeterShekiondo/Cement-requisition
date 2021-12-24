import { MailMessage } from '../models/mail-message.model';

export interface MailDriver {
    sendMail(message: MailMessage, to: string): Promise<void>;
}
