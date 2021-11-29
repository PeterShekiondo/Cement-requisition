"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const truck_entity_1 = require("./truck.entity");
let TruckRepository = class TruckRepository extends typeorm_1.Repository {
    async createTruck(createTruckDto) {
        const { brand, truckNumber, capacity, numberOfTrailers } = createTruckDto;
        const truck = new truck_entity_1.TruckEntity();
        truck.brand = brand;
        truck.truckNumber = truckNumber;
        truck.capacity = capacity;
        truck.numberOfTrailers = numberOfTrailers;
        try {
            await truck.save();
        }
        catch (error) {
            if (error.code == 23505) {
                throw new common_1.ConflictException(`Truck with truck number ${truckNumber} already exist`);
            }
            else {
                throw new common_1.InternalServerErrorException('91123-f8r7y8erhsi 0n turck service');
            }
        }
    }
};
TruckRepository = __decorate([
    typeorm_1.EntityRepository(truck_entity_1.TruckEntity)
], TruckRepository);
exports.TruckRepository = TruckRepository;
//# sourceMappingURL=truck.repository.js.map