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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_schema_1 = require("../user/schemas/user.schema");
const third_party_auth_1 = require("./third-party-auth/third-party.auth");
let AuthService = class AuthService {
    constructor(userModel, jwtService, thirdPartyAuthService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.thirdPartyAuthService = thirdPartyAuthService;
    }
    async register(registerDto) {
        const { email, username, password } = registerDto;
        const existingUser = await this.userModel.findOne({ email }).exec();
        if (existingUser) {
            throw new common_1.BadRequestException('User already exists.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new this.userModel({
            email,
            username,
            password: hashedPassword,
        });
        await user.save();
        const payload = { userId: user._id };
        const token = this.jwtService.sign(payload);
        return { token };
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password.');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid email or password.');
        }
        const token = this.jwtService.sign({ userId: user._id });
        return { token, user };
    }
    async logout(userId) {
        const user = await this.userModel.findById(userId).exec();
        if (user) {
            user.token = null;
            await user.save();
        }
    }
    async thirdPartySignIn(provider, token) {
        let profile;
        if (provider === 'google') {
            profile = await this.thirdPartyAuthService.verifyGoogleToken(token);
        }
        else if (provider === 'facebook') {
            profile = await this.thirdPartyAuthService.verifyFacebookToken(token);
        }
        else if (provider === 'apple') {
            profile = await this.thirdPartyAuthService.verifyAppleToken(token);
        }
        else {
            throw new common_1.BadRequestException('Unsupported authentication provider.');
        }
        const { email, username } = profile;
        let user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            user = new this.userModel({
                email,
                username: username || email.split('@')[0],
                thirdPartyProvider: provider,
            });
            await user.save();
        }
        const jwtToken = this.jwtService.sign({ userId: user._id });
        return { token: jwtToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.UserModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService,
        third_party_auth_1.ThirdPartyAuthService])
], AuthService);
//# sourceMappingURL=auth.service.js.map