"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const withMyApiKey = config => {
    console.log('my custom plugin2');
    return config;
};
exports.default = withMyApiKey;
