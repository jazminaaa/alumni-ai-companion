export declare class ThirdPartyAuthService {
    private googleClient;
    constructor();
    verifyGoogleToken(token: string): Promise<any>;
    verifyFacebookToken(token: string): Promise<any>;
    verifyAppleToken(token: string): Promise<any>;
}
