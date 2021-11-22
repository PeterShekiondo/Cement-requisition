import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto, AuthSignInCredentialsDto } from './dto/auth-signup-credentials.dto';
import { UserRepository } from './entity&repository/user.repository';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsDto: AuthSignInCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
