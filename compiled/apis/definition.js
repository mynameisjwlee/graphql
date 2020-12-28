"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const rest_api_1 = __importDefault(require("./rest/rest.api"));
const apiDefinition = {
    [_1.default.REST_ENDPOINT]: new rest_api_1.default(),
};
exports.default = apiDefinition;
