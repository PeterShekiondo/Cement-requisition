import { Repository } from 'typeorm';
import { AuthCredentialsDto, AuthSignInCredentialsDto } from '../dto/auth-signup-credentials.dto';
import { User } from './user.entity';
export declare class UserRepository extends Repository<User> {
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    validatePassword(authCredentialsDto: AuthSignInCredentialsDto): Promise<string>;
    private hashPassword;
}
