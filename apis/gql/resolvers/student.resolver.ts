import { Resolver, Query, Arg, Mutation, InputType, Field } from "type-graphql";
import { Student } from "../types/student.type";

@InputType({ description: 'type of information' })
class InformationInputType {
    @Field({ description: '학부' })
    department: string;

    @Field({ description: '학과' })
    major: string;

    @Field({ description: '학기' })
    semester: number;

    @Field({ description: '복수전공 여부' })
    doubleMajor: boolean;
}

@Resolver()
export class StudentResolver {
    private studentList: Student[];
    private studentNumber: number;

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
    
    @Query(() => [Student])
    public students() {
        return this.studentList;
    }
    
    @Query(() => Student)
    public student(@Arg('id') id: number) {
        return this.studentList[id - 1];
    }

    @Mutation(() => Student)
    public register(
        @Arg('name') name: string,
        @Arg('information') information: InformationInputType,
        @Arg('age', { nullable: true }) age?: number,
        @Arg('address', { nullable: true }) address?: string,
        @Arg('email', { nullable: true }) email?: string,
    ): Student {
        this.studentNumber++;
        const newStudent: Student = {
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
}
