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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdPartyAuthService = void 0;
const common_1 = require("@nestjs/common");
const google_auth_library_1 = require("google-auth-library");
const axios_1 = require("axios");
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
let ThirdPartyAuthService = class ThirdPartyAuthService {
    constructor() {
        this.googleClient = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    }
    async verifyGoogleToken(token) {
        try {
            const ticket = await this.googleClient.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            if (!payload) {
                throw new common_1.BadRequestException('Invalid Google token');
            }
            return {
                email: payload.email,
                username: payload.name || payload.email.split('@')[0],
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Failed to verify Google token: ${error.message}`);
        }
    }
    async verifyFacebookToken(token) {
        try {
            const response = await axios_1.default.get(`https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`);
            const { email, name } = response.data;
            if (!email) {
                throw new common_1.BadRequestException('Invalid Facebook token or email not provided');
            }
            return {
                email,
                username: name || email.split('@')[0],
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Failed to verify Facebook token: ${error.message}`);
        }
    }
    async verifyAppleToken(token) {
        try {
            const client = jwksClient({
                jwksUri: 'https://appleid.apple.com/auth/keys',
            });
            const getKey = (header, callback) => {
                client.getSigningKey(header.kid, (err, key) => {
                    if (err) {
                        return callback(err, null);
                    }
                    const signingKey = key.getPublicKey();
                    callback(null, signingKey);
                });
            };
            const decodedToken = await new Promise((resolve, reject) => {
                jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(decoded);
                });
            });
            const email = decodedToken['email'];
            const username = decodedToken['name'] || email.split('@')[0];
            return { email, username };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Failed to verify Apple token: ${error.message}`);
        }
    }
};
exports.ThirdPartyAuthService = ThirdPartyAuthService;
exports.ThirdPartyAuthService = ThirdPartyAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ThirdPartyAuthService);
//# sourceMappingURL=third-party.auth.js.map