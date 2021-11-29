"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrucksModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const truck_service_1 = require("./controller&service/truck.service");
const truck_controller_1 = require("./controller&service/truck.controller");
const truck_repository_1 = require("./entity&repository/truck.repository");
const auth_module_1 = require("../auth/auth.module");
let TrucksModule = class TrucksModule {
};
TrucksModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([truck_repository_1.TruckRepository]), auth_module_1.AuthModule],
        providers: [truck_service_1.TruckService],
        controllers: [truck_controller_1.TruckController]
    })
], TrucksModule);
exports.TrucksModule = TrucksModule;
//# sourceMappingURL=truck.module.js.map