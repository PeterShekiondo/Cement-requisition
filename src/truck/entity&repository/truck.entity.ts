import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Entity()
@Unique(['truckNumber'])
export class TruckEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  truckNumber: string;
  
  @Column({nullable:true})
  capacity: string;

  @Column({nullable:true})
  numberOfTrailers: string;

}
