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
exports.StudentResolver = void 0;
const type_graphql_1 = require("type-graphql");
const student_type_1 = require("../types/student.type");
let InformationInputType = class InformationInputType {
};
__decorate([
    type_graphql_1.Field({ description: '학부' }),
    __metadata("design:type", String)
], InformationInputType.prototype, "department", void 0);
__decorate([
    type_graphql_1.Field({ description: '학과' }),
    __metadata("design:type", String)
], InformationInputType.prototype, "major", void 0);
__decorate([
    type_graphql_1.Field({ description: '학기' }),
    __metadata("design:type", Number)
], InformationInputType.prototype, "semester", void 0);
__decorate([
    type_graphql_1.Field({ description: '복수전공 여부' }),
    __metadata("design:type", Boolean)
], InformationInputType.prototype, "doubleMajor", void 0);
InformationInputType = __decorate([
    type_graphql_1.InputType({ description: 'type of information' })
], InformationInputType);
let StudentResolver = class StudentResolver {
    constructor() {
        this.studentList = [
            {
                id: 1,
                name: 'Lee',
                information: {
                    department: 'software',
                    major: 'software',
                    semester: 3,
                    doubleMajor: false,
                },
                age: 23,
                address: 'sejonro',
                email: 'asdf@naver.com'
            },
            {
                id: 2,
                name: 'Kevin',
                information: {
                    department: 'scholar',
                    major: 'thinking',
                    semester: 7,
                    doubleMajor: true,
                }
            },
            {
                id: 3,
                name: 'blaise',
                information: {
                    department: 'mathematics',
                    major: 'linear algebra',
                    semester: 4,
                    doubleMajor: false,
                },
                age: 32,
                email: 'qwerty@gmail.com',
            },
        ];
        this.studentNumber = 3;
    }
    students() {
        return this.studentList;
    }
    student(id) {
        return this.studentList[id - 1];
    }
    register(name, information, age, address, email) {
        this.studentNumber++;
        const newStudent = {
            id: this.studentNumber,
            name,
            information,
            age,
            address,
            email,
        };
        this.studentList.push(newStudent);
        return newStudent;
    }
    update(id, name, information, age, address, email) {
        const targetStudent = this.studentList[id - 1];
        if (name)
            targetStudent.name = name;
        if (information)
            targetStudent.information = Object.assign({}, information);
        if (age)
            targetStudent.age = age;
        if (address)
            targetStudent.address = address;
        if (email)
            targetStudent.email = email;
        return targetStudent;
    }
};
__decorate([
    type_graphql_1.Query(() => [student_type_1.Student]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "students", null);
__decorate([
    type_graphql_1.Query(() => student_type_1.Student),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "student", null);
__decorate([
    type_graphql_1.Mutation(() => student_type_1.Student),
    __param(0, type_graphql_1.Arg('name')),
    __param(1, type_graphql_1.Arg('information')),
    __param(2, type_graphql_1.Arg('age', { nullable: true })),
    __param(3, type_graphql_1.Arg('address', { nullable: true })),
    __param(4, type_graphql_1.Arg('email', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, InformationInputType, Number, String, String]),
    __metadata("design:returntype", student_type_1.Student)
], StudentResolver.prototype, "register", null);
__decorate([
    type_graphql_1.Mutation(() => student_type_1.Student),
    __param(0, type_graphql_1.Arg('id')),
    __param(1, type_graphql_1.Arg('name', { nullable: true })),
    __param(2, type_graphql_1.Arg('information', { nullable: true })),
    __param(3, type_graphql_1.Arg('age', { nullable: true })),
    __param(4, type_graphql_1.Arg('address', { nullable: true })),
    __param(5, type_graphql_1.Arg('email', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, InformationInputType, Number, String, String]),
    __metadata("design:returntype", student_type_1.Student)
], StudentResolver.prototype, "update", null);
StudentResolver = __decorate([
    type_graphql_1.Resolver(),
    __metadata("design:paramtypes", [])
], StudentResolver);
exports.StudentResolver = StudentResolver;
