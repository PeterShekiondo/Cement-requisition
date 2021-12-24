import { CallToAction } from './call-to-action.model';
import { MailMessage } from './mail-message.model';

export class MailMessageBuilder {
    protected readonly _message: MailMessage;

    constructor() {
        this._message = new MailMessage();
    }

    /**
     * Set the from address for the mail message.
     *
     * @param  string  address
     * @param  string|null  name
     * @return this
     */
    from(address: string): MailMessageBuilder {
        this._message.from.push(...this.parseAddresses(address));
        return this;
    }

    /**
     * Set the "reply to" address of the message.
     *
     * @param  array|string  address
     * @param  string|null  name
     * @return this
     */
    replyTo(address: string | string[]): MailMessageBuilder {
        this._message.replyTo.push(...this.parseAddresses(address));

        return this;
    }

    /**
     * Set the cc address for the mail message.
     *
     * @param  array|string  address
     * @param  string|null  name
     * @return this
     */
    cc(address: any): MailMessageBuilder {
        this._message.cc.push(...this.parseAddresses(address));

        return this;
    }

    /**
     * Set the bcc address for the mail message.
     *
     * @param  array|string  address
     * @param  string|null  name
     * @return this
     */
    bcc(address: any): MailMessageBuilder {
        this._message.bcc.push(...this.parseAddresses(address));

        return this;
    }

    /**
     * Attach a file to the message.
     *
     * @param  string  file
     * @return this
     */
    public attach(fileURI: string): MailMessageBuilder {
        this._message.attachments.push(fileURI);

        return this;
    }

    /**
     * Set the priority of this message.
     *
     * The value is an integer where 1 is the highest priority and 5 is the lowest.
     *
     * @param  number  level
     * @return this
     */
    public priority(level: number): MailMessageBuilder {
        this._message.priority = level;

        return this;
    }

    /**
     * Set the subject of the notification.
     *
     * @param  string  subject
     * @return this
     */
    public subject(subject: string) {
        this._message.subject = subject;

        return this;
    }

    /**
     * Set the greeting of the notification.
     *
     * @param  string  greeting
     * @return this
     */
    public greeting(greeting: string) {
        this._message.greeting = greeting;

        return this;
    }

    /**
     * Set the salutation of the notification.
     *
     * @param  string  salutation
     * @return this
     */
    public salutation(salutation: string) {
        this._message.salutation = salutation;

        return this;
    }

    /**
     * Add a line of text to the notification.
     *
     * @param  mixed  line
     * @return this
     */
    public line(line: string) {
        return this.with(line);
    }

    /**
     * Add a line of text to the notification.
     *
     * @param  mixed  line
     * @return this
     */
    public with(line: string | CallToAction) {
        if (line instanceof CallToAction) {
            this.action(line.text, line.url);
        } else if (!this._message.actionText) {
            this._message.introLines.push(this.formatLine(line));
        } else {
            this._message.outroLines.push(this.formatLine(line));
        }

        return this;
    }

    /**
     * Format the given line of text.
     *
     * @param  string|array  line
     * @return string
     */
    protected formatLine(line: string | Array<string>): string {
        if (Array.isArray(line)) {
            return line
                .map((item: string) => {
                    return item.trim();
                })
                .join(' ');
        }

        if (typeof line === 'string') {
            return line
                .split(/\\r\\n|\\r|\\n/)
                .map(value => {
                    return value.trim();
                })
                .join('');
        }

        return line;
    }

    /**
     * Configure the "call to action" button.
     *
     * @param  string  text
     * @param  string  url
     * @return this
     */
    public action(text: string, url: string) {
        this._message.actionText = text;
        this._message.actionUrl = url;

        return this;
    }

    build(): MailMessage {
        return this._message;
    }

    /**
     * Parse the multi-address array into the necessary format.
     *
     * @param  array  value
     * @return array
     */
    protected parseAddresses(values: string | string[]): Iterable<string> {
        if (typeof values === 'string') {
            return [values];
        } else {
            return values;
        }
    }

    /**
     * Determine if the given "address" is actually an array of addresses.
     *
     * @param  mixed  address
     * @return bool
     */
    protected arrayOfAddresses(address: any) {
        return Array.isArray(address);
    }
}
