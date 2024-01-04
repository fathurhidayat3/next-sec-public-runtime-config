import getNextConfig from "next/config";
import {
  encryptValue,
  encryptConfig,
  decryptValue,
  decryptConfig,
} from "./secureConfig";
import { NextConfig } from "next";

const withSecurePublicRuntimeConfig = (
  nextConfig: NextConfig,
  { passPhrase }: { passPhrase: string }
): NextConfig => {
  return {
    ...nextConfig,
    publicRuntimeConfig: encryptConfig(
      nextConfig.publicRuntimeConfig,
      passPhrase
    ),
  };
};

const getSecureConfig = (passPhrase: string): NextConfig => {
  const { publicRuntimeConfig = {}, ...rest } = getNextConfig();
  return {
    publicRuntimeConfig: decryptConfig(publicRuntimeConfig, passPhrase),
    ...rest,
  };
};

export {
  encryptValue,
  encryptConfig,
  decryptValue,
  decryptConfig,
  withSecurePublicRuntimeConfig,
  getSecureConfig,
};
