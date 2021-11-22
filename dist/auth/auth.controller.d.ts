import { AuthService } from './auth.service';
import { AuthCredentialsDto, AuthSignInCredentialsDto } from './dto/auth-signup-credentials.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsDto: AuthSignInCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
