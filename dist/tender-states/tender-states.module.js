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
const tender_states_controller_1 = require("./controller&service/tender-states.controller");
const tender_states_service_1 = require("./controller&service/tender-states.service");
let TenderStatesModule = class TenderStatesModule {
};
TenderStatesModule = __decorate([
    common_1.Module({
        controllers: [tender_states_controller_1.TenderStatesController],
        providers: [tender_states_service_1.TenderStatesService]
    })
], TenderStatesModule);
exports.TenderStatesModule = TenderStatesModule;
//# sourceMappingURL=tender-states.module.js.map