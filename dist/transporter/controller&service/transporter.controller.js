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
exports.TransporterController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const create_transporter_dto_1 = require("../dto/create-transporter.dto");
const transporter_service_1 = require("./transporter.service");
let TransporterController = class TransporterController {
    constructor(transporterService) {
        this.transporterService = transporterService;
    }
    createTransporter(createTransporterDto) {
        return this.transporterService.createTransporter(createTransporterDto);
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transporter_dto_1.CreateTransporterDto]),
    __metadata("design:returntype", Promise)
], TransporterController.prototype, "createTransporter", null);
TransporterController = __decorate([
    common_1.Controller('transporter'),
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.UsePipes(common_1.ValidationPipe),
    __metadata("design:paramtypes", [transporter_service_1.TransporterService])
], TransporterController);
exports.TransporterController = TransporterController;
//# sourceMappingURL=transporter.controller.js.map