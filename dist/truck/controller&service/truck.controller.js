"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const createTruck_dto_1 = require("../dto/createTruck.dto");
const truck_service_1 = require("./truck.service");
let TruckController = class TruckController {
    constructor(truckService) {
        this.truckService = truckService;
    }
    createTruck(createTruckDto) {
        return this.truckService.createTruck(createTruckDto);
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTruck_dto_1.CreateTruckDto]),
    __metadata("design:returntype", Promise)
], TruckController.prototype, "createTruck", null);
TruckController = __decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.UsePipes(common_1.ValidationPipe),
    common_1.Controller('trucks'),
    __metadata("design:paramtypes", [truck_service_1.TruckService])
], TruckController);
exports.TruckController = TruckController;
//# sourceMappingURL=truck.controller.js.map