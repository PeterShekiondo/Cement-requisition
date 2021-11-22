"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcrypt");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async signUp(authCredentialsDto) {
        const { companyname, codenumber, phonenumber, country, region, street, address, firstname, lastname, email, password } = authCredentialsDto;
        const user = new user_entity_1.User();
        user.companyname = companyname;
        user.codenumber = codenumber;
        user.phonenumber = phonenumber;
        user.country = country;
        user.region = region;
        user.street = street;
        user.address = address;
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        try {
            await user.save();
        }
        catch (error) {
            if (error.code == 23505) {
                throw new common_1.ConflictException('Account already exist');
            }
            else {
                throw new common_1.InternalServerErrorException('');
            }
        }
    }
    async validatePassword(authCredentialsDto) {
        const { email, password } = authCredentialsDto;
        const user = await this.findOne({ email });
        if (user && (await user.validatePassword(password))) {
            return user.email;
        }
        else {
            return null;
        }
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map