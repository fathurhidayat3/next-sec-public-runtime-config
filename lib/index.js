"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecureConfig = exports.withSecurePublicRuntimeConfig = exports.decryptConfig = exports.decryptValue = exports.encryptConfig = exports.encryptValue = void 0;
const config_1 = __importDefault(require("next/config"));
const secureConfig_1 = require("./secureConfig");
Object.defineProperty(exports, "encryptValue", { enumerable: true, get: function () { return secureConfig_1.encryptValue; } });
Object.defineProperty(exports, "encryptConfig", { enumerable: true, get: function () { return secureConfig_1.encryptConfig; } });
Object.defineProperty(exports, "decryptValue", { enumerable: true, get: function () { return secureConfig_1.decryptValue; } });
Object.defineProperty(exports, "decryptConfig", { enumerable: true, get: function () { return secureConfig_1.decryptConfig; } });
const withSecurePublicRuntimeConfig = (nextConfig, { passPhrase }) => {
    return {
        ...nextConfig,
        publicRuntimeConfig: (0, secureConfig_1.encryptConfig)(nextConfig.publicRuntimeConfig, passPhrase),
    };
};
exports.withSecurePublicRuntimeConfig = withSecurePublicRuntimeConfig;
const getSecureConfig = (passPhrase) => {
    const { publicRuntimeConfig = {}, ...rest } = (0, config_1.default)();
    return {
        publicRuntimeConfig: (0, secureConfig_1.decryptConfig)(publicRuntimeConfig, passPhrase),
        ...rest,
    };
};
exports.getSecureConfig = getSecureConfig;
