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
exports.TransporterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const transporter_repository_1 = require("./entity&repository/transporter.repository");
let TransporterService = class TransporterService {
    constructor(transporterRepository) {
        this.transporterRepository = transporterRepository;
    }
    createTransporter(createTransporterDto) {
        return this.transporterRepository.createTransporter(createTransporterDto);
    }
};
TransporterService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(transporter_repository_1.TransporterRepository)),
    __metadata("design:paramtypes", [transporter_repository_1.TransporterRepository])
], TransporterService);
exports.TransporterService = TransporterService;
//# sourceMappingURL=transporter.service.js.map