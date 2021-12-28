import { Repository } from 'typeorm';
import { AuthCredentialsDto, AuthSignInCredentialsDto } from '../dto/auth-signup-credentials.dto';
import { MailService } from 'src/mail/controller&service/mail.service';
import { User } from './user.entity';
export declare class UserRepository extends Repository<User> {
    private mailService;
    constructor(mailService: MailService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    validatePassword(authCredentialsDto: AuthSignInCredentialsDto): Promise<string>;
    private hashPassword;
}
