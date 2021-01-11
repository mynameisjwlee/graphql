import { ObjectType, Field } from 'type-graphql';
import 'reflect-metadata';

@ObjectType({ description: 'type of information' })
class Information {
  @Field({ description: '학부' })
  department: string;

  @Field({ description: '학과' })
  major: string;

  @Field({ description: '학기' })
  semester: number;

  @Field({ description: '복수전공 여부' })
  doubleMajor: boolean;
}

@ObjectType({ description: '학생 정보' })
export class Student {
  @Field({ description: '학번' })
  readonly id: number;

  @Field({ description: '이름' })
  name: string;

  @Field({ description: '정보' })
  information: Information;

  @Field({ description: '나이', nullable: true })
  age?: number;

  @Field({ description: '주소', nullable: true })
  address?: string;

  @Field({ description: '이메일', nullable: true })
  email?: string;
}
