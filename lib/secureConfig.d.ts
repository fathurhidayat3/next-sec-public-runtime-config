type EnvConfigType = Record<string, any>;
declare const encryptValue: (value: string, passPhrase: string) => string | undefined;
declare const encryptConfig: (envConfig: EnvConfigType, passPhrase: string) => EnvConfigType;
declare const decryptValue: (value: string, passPhrase: string) => string | undefined;
declare const decryptConfig: (envConfig: EnvConfigType, passPhrase: string) => EnvConfigType;
export { encryptValue, encryptConfig, decryptValue, decryptConfig };
