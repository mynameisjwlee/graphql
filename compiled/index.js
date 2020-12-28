"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apis_1 = __importDefault(require("./apis"));
const rest_api_1 = __importDefault(require("./apis/rest/rest.api"));
const app = express_1.default();
// TODO: apiDefinition 주입하는 방식으로 바꾸기. git 연동 후 graphql 시작
const temp = new rest_api_1.default();
app.get(apis_1.default.REST_ENDPOINT, temp.get);
app.listen(3000);
