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
exports.Student = void 0;
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
let Information = class Information {
};
__decorate([
    type_graphql_1.Field({ description: '학부' }),
    __metadata("design:type", String)
], Information.prototype, "department", void 0);
__decorate([
    type_graphql_1.Field({ description: '학과' }),
    __metadata("design:type", String)
], Information.prototype, "major", void 0);
__decorate([
    type_graphql_1.Field({ description: '학기' }),
    __metadata("design:type", Number)
], Information.prototype, "semester", void 0);
__decorate([
    type_graphql_1.Field({ description: '복수전공 여부' }),
    __metadata("design:type", Boolean)
], Information.prototype, "doubleMajor", void 0);
Information = __decorate([
    type_graphql_1.ObjectType({ description: 'type of information' })
], Information);
let Student = class Student {
};
__decorate([
    type_graphql_1.Field({ description: '학번' }),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ description: '이름' }),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ description: '정보' }),
    __metadata("design:type", Information)
], Student.prototype, "information", void 0);
__decorate([
    type_graphql_1.Field({ description: '나이', nullable: true }),
    __metadata("design:type", Number)
], Student.prototype, "age", void 0);
__decorate([
    type_graphql_1.Field({ description: '주소', nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field({ description: '이메일', nullable: true }),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
Student = __decorate([
    type_graphql_1.ObjectType({ description: '학생 정보' })
], Student);
exports.Student = Student;
