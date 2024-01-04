import {
  encryptValue,
  encryptConfig,
  decryptValue,
  decryptConfig,
} from "./secureConfig";

const withSecurePublicRuntimeConfig = <T>(
  nextConfig: T & { publicRuntimeConfig },
  { passPhrase }: { passPhrase: string }
): T => {
  return {
    ...nextConfig,
    publicRuntimeConfig: encryptConfig(
      nextConfig.publicRuntimeConfig,
      passPhrase
    ),
  };
};

export {
  encryptValue,
  encryptConfig,
  decryptValue,
  decryptConfig,
  withSecurePublicRuntimeConfig,
};
