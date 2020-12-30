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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const type_graphql_1 = require("type-graphql");
const book_type_1 = require("./book.type");
let BookResolver = class BookResolver {
    constructor() {
        this.items = [
            {
                title: 'Harry Potter',
                author: 'J.K. Rowling',
            },
            {
                title: 'Jurassic Park',
                author: 'Michale Crichton',
            },
        ];
    }
    books() {
        return this.items;
    }
    createBook(title, author) {
        const newBook = {
            title,
            author,
        };
        this.items.push(newBook);
        return newBook;
    }
};
__decorate([
    type_graphql_1.Query(() => [book_type_1.Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "books", null);
__decorate([
    type_graphql_1.Mutation(() => book_type_1.Book),
    __param(0, type_graphql_1.Arg('title')), __param(1, type_graphql_1.Arg('author')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "createBook", null);
BookResolver = __decorate([
    type_graphql_1.Resolver(),
    __metadata("design:paramtypes", [])
], BookResolver);
exports.BookResolver = BookResolver;
