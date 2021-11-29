"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransporterRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const transporter_entity_1 = require("./transporter.entity");
let TransporterRepository = class TransporterRepository extends typeorm_1.Repository {
    async createTransporter(createTransporterDto) {
        const { name, company, driverLisence, phone, } = createTransporterDto;
        const transporter = new transporter_entity_1.TransporterEntity();
        transporter.name = name;
        transporter.phone = phone;
        transporter.company = company && company;
        transporter.driverLisence = driverLisence;
        try {
            await transporter.save();
        }
        catch (error) {
            if (error.code == 23505) {
                throw new common_1.ConflictException(`Driver with lisence ${driverLisence} already exist`);
            }
            else {
                throw new common_1.InternalServerErrorException('');
            }
        }
    }
};
TransporterRepository = __decorate([
    typeorm_1.EntityRepository(transporter_entity_1.TransporterEntity)
], TransporterRepository);
exports.TransporterRepository = TransporterRepository;
//# sourceMappingURL=transporter.repository.js.map