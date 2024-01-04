"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withSecurePublicRuntimeConfig = exports.decryptConfig = exports.decryptValue = exports.encryptConfig = exports.encryptValue = void 0;
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
