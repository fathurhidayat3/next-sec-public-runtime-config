import { encryptValue, encryptConfig, decryptValue, decryptConfig } from "./secureConfig";
import { NextConfig } from "next";
declare const withSecurePublicRuntimeConfig: (nextConfig: NextConfig, { passPhrase }: {
    passPhrase: string;
}) => NextConfig;
declare const getSecureConfig: (passPhrase: string) => NextConfig;
export { encryptValue, encryptConfig, decryptValue, decryptConfig, withSecurePublicRuntimeConfig, getSecureConfig, };
