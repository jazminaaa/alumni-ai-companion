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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const third_party_auth_1 = require("./third-party-auth/third-party.auth");
const register_dto_1 = require("../user/dto/register.dto");
const login_dto_1 = require("../user/dto/login.dto");
const third_party_signin_dto_1 = require("../user/dto/third-party-signin.dto");
let AuthController = class AuthController {
    constructor(authService, thirdPartyAuthService) {
        this.authService = authService;
        this.thirdPartyAuthService = thirdPartyAuthService;
    }
    async register(registerDto) {
        return this.authService.register(registerDto);
    }
    async login(loginDto) {
        return this.authService.login(loginDto);
    }
    async logout(req) {
        await this.authService.logout(req.user.userId);
        return { message: 'Successfully logged out' };
    }
    async googleSignIn(thirdPartySigninDto) {
        const { token } = thirdPartySigninDto;
        const profile = await this.thirdPartyAuthService.verifyGoogleToken(token);
        return this.authService.thirdPartySignIn('google', profile);
    }
    async facebookSignIn(thirdPartySigninDto) {
        const { token } = thirdPartySigninDto;
        const profile = await this.thirdPartyAuthService.verifyFacebookToken(token);
        return this.authService.thirdPartySignIn('facebook', profile);
    }
    async appleSignIn(thirdPartySigninDto) {
        const { token } = thirdPartySigninDto;
        const profile = await this.thirdPartyAuthService.verifyAppleToken(token);
        return this.authService.thirdPartySignIn('apple', profile);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('google'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [third_party_signin_dto_1.ThirdPartySigninDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleSignIn", null);
__decorate([
    (0, common_1.Post)('facebook'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [third_party_signin_dto_1.ThirdPartySigninDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "facebookSignIn", null);
__decorate([
    (0, common_1.Post)('apple'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [third_party_signin_dto_1.ThirdPartySigninDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "appleSignIn", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        third_party_auth_1.ThirdPartyAuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map