import { IsOptional } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
// import { TaskStatus } from './task-status.enum';

@Entity()
@Unique(['driverLisence'])
export class Transporter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @IsOptional()
  @Column({nullable:true})
  company: string;

  @Column()
  phone: string;

  @Column()
  driverLisence: string;
}
