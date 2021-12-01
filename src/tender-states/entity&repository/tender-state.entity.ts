import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
// import { TenderStatus } from './tender-state.enum';

@Entity()
export class TenderStateEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;

}
