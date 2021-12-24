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

        host: process.env.MAIL_HOST || 'smtp.mailgun.org',

        port: process.env.MAIL_PORT || 587,

        encryption: process.env.MAIL_ENCRYPTION || 'tls',

        username: process.env.MAIL_USERNAME,

        password: process.env.MAIL_PASSWORD,

        timeout: null as number,

        from: {
            address: process.env.MAIL_FROM_ADDRESS || 'notifications@devsofttz.co.tz',
            name: process.env.MAIL_FROM_NAME || 'Cement Requisitions',
        },
    },
};
