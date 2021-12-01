"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderStatesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const tender_states_controller_1 = require("./controller&service/tender-states.controller");
const tender_states_service_1 = require("./controller&service/tender-states.service");
const tander_state_repository_1 = require("./entity&repository/tander-state.repository");
let TenderStatesModule = class TenderStatesModule {
};
TenderStatesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tander_state_repository_1.TenderStateRepository]), auth_module_1.AuthModule],
        controllers: [tender_states_controller_1.TenderStatesController],
        providers: [tender_states_service_1.TenderStatesService]
    })
], TenderStatesModule);
exports.TenderStatesModule = TenderStatesModule;
//# sourceMappingURL=tender-states.module.js.map