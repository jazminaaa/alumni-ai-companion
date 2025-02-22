import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/schemas/user.schema';
import { RegisterDto } from 'src/user/dto/register.dto';
import { LoginDto } from 'src/user/dto/login.dto';
import { ThirdPartyAuthService } from './third-party-auth/third-party.auth';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    private readonly thirdPartyAuthService;
    constructor(userModel: Model<User>, jwtService: JwtService, thirdPartyAuthService: ThirdPartyAuthService);
    register(registerDto: RegisterDto): Promise<{
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        user: User;
    }>;
    logout(userId: string): Promise<void>;
    thirdPartySignIn(provider: 'google' | 'facebook' | 'apple', token: string): Promise<{
        token: string;
    }>;
}
