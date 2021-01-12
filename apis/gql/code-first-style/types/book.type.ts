import { ObjectType, Field } from 'type-graphql';
import 'reflect-metadata';

@ObjectType({ description: '책 정보' })
export class Book {
  @Field({ description: '책 제목' })
  title: string;

  @Field({ description: '책 저자' })
  author: string;
}
