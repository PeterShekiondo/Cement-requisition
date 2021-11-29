import { BaseEntity } from 'typeorm';
export declare class TruckEntity extends BaseEntity {
    id: number;
    brand: string;
    truckNumber: string;
    capacity: string;
    numberOfTrailers: string;
}
