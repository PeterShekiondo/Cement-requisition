import { BaseEntity } from 'typeorm';
export declare class Transporter extends BaseEntity {
    id: number;
    name: string;
    company: string;
    phone: string;
    driverLisence: string;
}
