"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Information = exports.Book = exports.TypeGraphQL = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
exports.TypeGraphQL = TypeGraphQL;
let Book = class Book {
};
__decorate([
    TypeGraphQL.Field(type => String),
    __metadata("design:type", Object)
], Book.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(type => String),
    __metadata("design:type", Object)
], Book.prototype, "author", void 0);
Book = __decorate([
    TypeGraphQL.ObjectType()
], Book);
exports.Book = Book;
;
let Information = class Information {
};
__decorate([
    TypeGraphQL.Field(type => String),
    __metadata("design:type", Object)
], Information.prototype, "department", void 0);
__decorate([
    TypeGraphQL.Field(type => String),
    __metadata("design:type", Object)
], Information.prototype, "major", void 0);
__decorate([
    TypeGraphQL.Field(type => TypeGraphQL.Int),
    __metadata("design:type", Object)
], Information.prototype, "semester", void 0);
__decorate([
    TypeGraphQL.Field(type => Boolean),
    __metadata("design:type", Object)
], Information.prototype, "doubleMajor", void 0);
Information = __decorate([
    TypeGraphQL.ObjectType()
], Information);
exports.Information = Information;
;
let Student = class Student {
};
__decorate([
    TypeGraphQL.Field(type => TypeGraphQL.ID),
    __metadata("design:type", Object)
], Student.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(type => String),
    __metadata("design:type", Object)
], Student.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(type => Information),
    __metadata("design:type", Object)
], Student.prototype, "information", void 0);
__decorate([
    TypeGraphQL.Field(type => TypeGraphQL.Int, { nullable: true }),
    __metadata("design:type", Object)
], Student.prototype, "age", void 0);
__decorate([
    TypeGraphQL.Field(type => String, { nullable: true }),
    __metadata("design:type", Object)
], Student.prototype, "address", void 0);
__decorate([
    TypeGraphQL.Field(type => String, { nullable: true }),
    __metadata("design:type", Object)
], Student.prototype, "email", void 0);
Student = __decorate([
    TypeGraphQL.ObjectType()
], Student);
exports.Student = Student;
;
