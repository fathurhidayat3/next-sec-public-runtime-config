"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptConfig = exports.decryptValue = exports.encryptConfig = exports.encryptValue = void 0;
const aes_1 = __importDefault(require("crypto-js/aes"));
const enc_utf8_1 = __importDefault(require("crypto-js/enc-utf8"));
const encryptValue = (value, passPhrase) => {
    if (value) {
        const encrypted = aes_1.default.encrypt(JSON.stringify(value), passPhrase);
        return encrypted.toString();
    }
    return undefined;
};
exports.encryptValue = encryptValue;
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
exports.encryptConfig = encryptConfig;
const decryptValue = (value, passPhrase) => {
    if (value) {
        const decrypted = aes_1.default.decrypt(value, passPhrase).toString(enc_utf8_1.default);
        return JSON.parse(decrypted);
    }
    return undefined;
};
exports.decryptValue = decryptValue;
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
exports.decryptConfig = decryptConfig;
