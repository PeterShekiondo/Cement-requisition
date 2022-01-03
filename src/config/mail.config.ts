import * as config from 'config';
const smtpConfig = config.get('smtp');


export const mailConfig = {
    /**
     * The Mail forwarding service to be used.
     *
     * valid options:
     *  - 'log' - for local development, will only log output to console
     *  - 'smtp' - for staging/production environments using smtp gateway
     */
    driver: process.env.MAIL_DRIVER || 'log',

    smtp: {
        transport: 'smtp',

        host: smtpConfig.server || 'smtp.sendgrid.net',

        port: smtpConfig.port || 587,

        encryption: smtpConfig.encryption || 'tls',

        username: smtpConfig.username,

        password: smtpConfig.password,

        timeout: null as number,

        from: {
            address: smtpConfig.address || 'notifications@devsofttz.co.tz',
            name: smtpConfig.name || 'Cement Requisitions',
        },
    },
};
