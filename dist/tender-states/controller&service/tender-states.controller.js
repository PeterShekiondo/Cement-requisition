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
exports.TenderStatesController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const createTender_status_dto_1 = require("../dto/createTender-status.dto");
const tender_states_service_1 = require("./tender-states.service");
let TenderStatesController = class TenderStatesController {
    constructor(tenderStatesService) {
        this.tenderStatesService = tenderStatesService;
    }
    createTenderState(CreateTenderStateDto) {
        return this.tenderStatesService.createTenderState(CreateTenderStateDto);
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTender_status_dto_1.CreateTenderStateDto]),
    __metadata("design:returntype", Promise)
], TenderStatesController.prototype, "createTenderState", null);
TenderStatesController = __decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.UsePipes(common_1.ValidationPipe),
    common_1.Controller('tender_states'),
    __metadata("design:paramtypes", [tender_states_service_1.TenderStatesService])
], TenderStatesController);
exports.TenderStatesController = TenderStatesController;
//# sourceMappingURL=tender-states.controller.js.map