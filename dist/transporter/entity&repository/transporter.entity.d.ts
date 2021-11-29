import { BaseEntity } from 'typeorm';
export declare class TransporterEntity extends BaseEntity {
    id: number;
    name: string;
    company: string;
    phone: string;
    driverLisence: string;
}
