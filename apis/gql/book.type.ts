import { ObjectType, Field } from 'type-graphql';
import 'reflect-metadata';

@ObjectType()
export class Book {
    @Field()
    title: string;

    @Field()
    author: string;
}
