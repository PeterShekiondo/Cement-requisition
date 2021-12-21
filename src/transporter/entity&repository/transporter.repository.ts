import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { TransporterDto } from "../dto/create-transporter.dto";
import { TransporterEntity } from "./transporter.entity";

@EntityRepository(TransporterEntity)
export class TransporterRepository extends Repository<TransporterEntity>{

    async createTransporter(createTransporterDto: TransporterDto.CreateTransporterDto):Promise<void>{
        const { 
            name, 
            company,
            driverLisence,
            phone,
        } = createTransporterDto
        
        const transporter = new TransporterEntity()
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

