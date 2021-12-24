export class MailMessage {
    /**
     * The "from" information for the message.
     *
     * @var array
     */
    public from = [] as string[];

    /**
     * The "reply to" information for the message.
     *
     * @var array
     */
    public replyTo = [] as string[];

    /**
     * The "cc" information for the message.
     *
     * @var array
     */
    public cc = [] as string[];

    /**
     * The "bcc" information for the message.
     *
     * @var array
     */
    public bcc = [] as string[];

    /**
     * The attachments for the message.
     *
     * @var array
     */
    public attachments = [] as string[];

    /**
     * Priority level of the message.
     *
     * @var number
     */
    public priority?: number;

    /**
     * The subject of the notification.
     *
     * @var string
     */
    public subject = '';

    /**
     * The notification's greeting.
     *
     * @var string
     */
    public greeting = '';

    /**
     * The notification's salutation.
     *
     * @var string
     */
    public salutation = '';

    /**
     * The "intro" lines of the notification.
     *
     * @var array
     */
    public introLines = [] as string[];

    /**
     * The "outro" lines of the notification.
     *
     * @var array
     */
    public outroLines = [] as string[];

    /**
     * The text / label for the action.
     *
     * @var string
     */
    public actionText = '';

    /**
     * The action URL.
     *
     * @var string
     */
    public actionUrl = '';

    /**
     * Get an array representation of the message.
     *
     * @return array
     */
    public toArray() {
        return {
            // 'level': this.level,
            subject: this.subject,
            greeting: this.greeting,
            salutation: this.salutation,
            introLines: this.introLines,
            outroLines: this.outroLines,
            actionText: this.actionText,
            actionUrl: this.actionUrl,
            displayableActionUrl: this.actionUrl?.replace(/mailto:|tel:/gi, ''),
        };
    }

    getFrom(): string {
        return this.from.join(',');
    }

    getSubject(): string {
        return this.subject;
    }

    getText(): string {
        return this.introLines.join('\n');
    }

    getHtml(): string {
        return '<b>' + this.introLines.join('\n') + '</b>';
    }
}
