import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateTransporterDto } from "../dto/create-transporter.dto";
import { Transporter } from "./transporter.entity";

@EntityRepository(Transporter)
export class TransporterRepository extends Repository<Transporter>{

    async createTransporter(createTransporterDto: CreateTransporterDto):Promise<void>{
        const { 
            name, 
            company,
            driverLisence,
            phone,
        } = createTransporterDto
        
        const transporter = new Transporter()
        transporter.name = name
        transporter.phone = phone
        transporter.company = company && company
        transporter.driverLisence = driverLisence
        try {
            await transporter.save()
        } catch (error) {
            if (error.code == 23505) {
                throw new ConflictException(`Driver with lisence ${driverLisence} already exist`);
              } else {
                throw new InternalServerErrorException('');
              }
        }

    }

}

