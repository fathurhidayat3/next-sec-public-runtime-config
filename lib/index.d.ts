import { encryptValue, encryptConfig, decryptValue, decryptConfig } from "./secureConfig";
declare const withSecurePublicRuntimeConfig: <T>(nextConfig: T & {
    publicRuntimeConfig: any;
}, { passPhrase }: {
    passPhrase: string;
}) => T;
export { encryptValue, encryptConfig, decryptValue, decryptConfig, withSecurePublicRuntimeConfig, };
