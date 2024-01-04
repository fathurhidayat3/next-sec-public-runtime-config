const getNextConfig = require("next/config");
const {
  encryptValue,
  encryptConfig,
  decryptValue,
  decryptConfig,
} = require("./secureConfig");

const withSecurePublicRuntimeConfig = (nextConfig, { passPhrase }) => {
  return {
    ...nextConfig,
    publicRuntimeConfig: encryptConfig(
      nextConfig.publicRuntimeConfig,
      passPhrase
    ),
  };
};

const getSecureConfig = (passPhrase) => {
  const { publicRuntimeConfig = {}, ...rest } = getNextConfig();
  return {
    publicRuntimeConfig: decryptConfig(publicRuntimeConfig, passPhrase),
    ...rest,
  };
};

module.exports = {
  encryptValue,
  encryptConfig,
  decryptValue,
  decryptConfig,
  withSecurePublicRuntimeConfig,
  getSecureConfig,
};
