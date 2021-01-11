import { Resolver, Query, Arg, Mutation, InputType, Field, FieldResolver, Root } from 'type-graphql';

import { StudentData, studentDatas } from '../models';
import { Student } from '../types';

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
    this.studentList = studentDatas;
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

  @Mutation(() => Student)
  public update(
    @Arg('id') id: number,
    @Arg('name', { nullable: true }) name?: string,
    @Arg('information', { nullable: true }) information?: InformationInputType,
    @Arg('age', { nullable: true }) age?: number,
    @Arg('address', { nullable: true }) address?: string,
    @Arg('email', { nullable: true }) email?: string,
  ): Student {
    const targetStudent: Student = this.studentList[id - 1];
    if (name) { targetStudent.name = name; }
    if (information) { targetStudent.information = { ...information }; }
    if (age) { targetStudent.age = age; }
    if (address) { targetStudent.address = address; }
    if (email) { targetStudent.email = email; }
    return targetStudent;
  }
}

@Resolver(() => Student)
export class StudentModelResolver {
  @FieldResolver()
  isUnderage(@Root() student: StudentData) {
    if (!student.age) {
      return null;
    }

    return student.age <= 19;
  }
}
