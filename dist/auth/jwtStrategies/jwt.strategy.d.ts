import { User } from '../entity&repository/user.entity';
import { UserRepository } from '../entity&repository/user.repository';
import { jwtPayload } from '../interfaces/jwt-payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: jwtPayload): Promise<User>;
}
export {};
