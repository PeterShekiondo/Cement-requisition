import { BaseEntity, 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    Unique } from 'typeorm';

@Entity()
@Unique(['invoiceNumber'])
export class InvoiceEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bankName: string;

  @Column()
  amount: number;

  @Column()
  invoiceNumber: string;

  @Column()
  currency: string;

  @Column()
  detail: string;

}

