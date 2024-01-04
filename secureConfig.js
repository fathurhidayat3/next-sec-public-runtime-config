const cryptoAES = require("crypto-js/aes");
const cryptoENC = require("crypto-js/enc-utf8");

const encryptValue = (value, passPhrase) => {
  if (value) {
    const encrypted = cryptoAES.encrypt(JSON.stringify(value), passPhrase);
    return encrypted.toString();
  }
  return undefined;
};

const encryptConfig = (envConfig, passPhrase) => {
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

const decryptValue = (value, passPhrase) => {
  if (value) {
    const decrypted = cryptoAES.decrypt(value, passPhrase).toString(cryptoENC);
    return JSON.parse(decrypted);
  }
  return undefined;
};

const decryptConfig = (envConfig, passPhrase) => {
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

module.exports = {
  encryptValue,
  encryptConfig,
  decryptValue,
  decryptConfig,
};
