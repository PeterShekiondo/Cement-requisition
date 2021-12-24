import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { mailConfig } from 'src/config/mail.config';
import { MailService } from './controller&service/mail.service';
import { SmtpMail } from './drivers/smtp-mail.driver';
import { LogMail } from './drivers/log-mail.driver';
const smtpConfig = mailConfig.smtp;

@Module({
    imports: [
        MailerModule.forRootAsync({
            useFactory: () => ({
                transport: {
                    host: smtpConfig.host,
                    port: smtpConfig.port,
                    // ignoreTLS: true,
                    // secure: false,
                    auth: {
                        username: smtpConfig.username,
                        password: smtpConfig.password,
                    },
                },
                defaults: {
                    from: `"${smtpConfig.from.name}" <${smtpConfig.from.address}>`,
                },
                template: {
                    dir: __dirname + '/templates',
                    adapter: new PugAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        }),
    ],
    providers: [
        MailService,
        {
            provide: 'MAIL_DRIVER',
            useClass: mailConfig.driver === 'log' ? LogMail : SmtpMail,
        },
    ],
})
export class MailModule {}
