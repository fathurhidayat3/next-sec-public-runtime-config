import cryptoAES from "crypto-js/aes";
import cryptoENC from "crypto-js/enc-utf8";

type EnvConfigType = Record<string, any>;

const encryptValue = (
  value: string,
  passPhrase: string
): string | undefined => {
  if (value) {
    const encrypted = cryptoAES.encrypt(JSON.stringify(value), passPhrase);
    return encrypted.toString();
  }
  return undefined;
};

const encryptConfig = (
  envConfig: EnvConfigType,
  passPhrase: string
): EnvConfigType => {
  let encryptedEnvConfig = {};
  for (const [key, value] of Object.entries(envConfig)) {
    const key_ = encryptValue(key, passPhrase);
    const value_ = encryptValue(value, passPhrase);
    if (key_ && value_) {
      encryptedEnvConfig[key_] = value_;
    }
  }
  return encryptedEnvConfig;
};

const decryptValue = (
  value: string,
  passPhrase: string
): string | undefined => {
  if (value) {
    const decrypted = cryptoAES.decrypt(value, passPhrase).toString(cryptoENC);
    return JSON.parse(decrypted);
  }
  return undefined;
};

const decryptConfig = (
  envConfig: EnvConfigType,
  passPhrase: string
): EnvConfigType => {
  let decryptedEnvConfig = {};
  for (const [key, value] of Object.entries(envConfig)) {
    const key_ = decryptValue(key, passPhrase);
    const value_ = decryptValue(value, passPhrase);
    if (key_ && value_) {
      decryptedEnvConfig[key_] = value_;
    }
  }
  return decryptedEnvConfig;
};

export { encryptValue, encryptConfig, decryptValue, decryptConfig };
