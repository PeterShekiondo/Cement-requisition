import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    companyname: string;
    codenumber: string;
    phonenumber: string;
    country: string;
    region: string;
    street: string;
    address: string;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    salt: string;
    validatePassword(password: string): Promise<boolean>;
}
