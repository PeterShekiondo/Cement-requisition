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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSignInCredentialsDto = exports.AuthCredentialsDto = void 0;
const class_validator_1 = require("class-validator");
class AuthCredentialsDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "companyname", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "codenumber", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(15),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "phonenumber", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "country", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "region", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "street", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "address", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Matches(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, {
        message: 'must be a valid email',
    }),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "firstname", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "lastname", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(6),
    class_validator_1.MaxLength(20),
    class_validator_1.Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password is too weak',
    }),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "password", void 0);
exports.AuthCredentialsDto = AuthCredentialsDto;
class AuthSignInCredentialsDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Matches(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, {
        message: 'must be a valid email',
    }),
    __metadata("design:type", String)
], AuthSignInCredentialsDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AuthSignInCredentialsDto.prototype, "password", void 0);
exports.AuthSignInCredentialsDto = AuthSignInCredentialsDto;
//# sourceMappingURL=auth-signup-credentials.dto.js.map