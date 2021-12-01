import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateTenderStateDto } from "../dto/createTender-status.dto";
import { TenderStateEntity } from "./tender-state.entity";

@EntityRepository(TenderStateEntity)
export class TenderStateRepository extends Repository<TenderStateEntity>{

    async createTenderState(createTenderStateDto:CreateTenderStateDto):Promise<void>{
        const {name, color} = createTenderStateDto

        const tenderState = new TenderStateEntity()
        tenderState.name = name
        tenderState.color = color
        try {
            await tenderState.save()
        } catch (error) {
            throw new InternalServerErrorException('91123-f8r7y8erhsi 0n tender state service');
        }
    }

}