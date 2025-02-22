import { AuthService } from './auth.service';
import { ThirdPartyAuthService } from './third-party-auth/third-party.auth';
import { RegisterDto } from 'src/user/dto/register.dto';
import { LoginDto } from 'src/user/dto/login.dto';
import { ThirdPartySigninDto } from 'src/user/dto/third-party-signin.dto';
import { User } from 'src/user/schemas/user.schema';
export declare class AuthController {
    private readonly authService;
    private readonly thirdPartyAuthService;
    constructor(authService: AuthService, thirdPartyAuthService: ThirdPartyAuthService);
    register(registerDto: RegisterDto): Promise<{
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        user: User;
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
    googleSignIn(thirdPartySigninDto: ThirdPartySigninDto): Promise<{
        token: string;
    }>;
    facebookSignIn(thirdPartySigninDto: ThirdPartySigninDto): Promise<{
        token: string;
    }>;
    appleSignIn(thirdPartySigninDto: ThirdPartySigninDto): Promise<{
        token: string;
    }>;
}
