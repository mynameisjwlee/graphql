"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const test_api_1 = __importDefault(require("./test.api"));
const apiDefinition = {
    [_1.default.TEST]: new test_api_1.default(),
};
exports.default = apiDefinition;
