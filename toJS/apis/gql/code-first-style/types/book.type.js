"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
let Book = class Book {
};
__decorate([
    type_graphql_1.Field({ description: '책 제목' }),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field({ description: '책 저자' }),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
Book = __decorate([
    type_graphql_1.ObjectType({ description: '책 정보' })
], Book);
exports.Book = Book;
