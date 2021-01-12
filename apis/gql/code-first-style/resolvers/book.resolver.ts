import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { bookDatas } from '../models';
import { Book } from '../types';

@Resolver()
export class BookResolver {
  private items: Book[];

  constructor() {
    this.items = bookDatas;
  }

  @Query(() => [Book])
  public books() {
    return this.items;
  }

  @Mutation(() => Book)
  public createBook(@Arg('title') title: string, @Arg('author') author: string) {
    const newBook: Book = {
      title,
      author,
    };
    this.items.push(newBook);
    return newBook;
  }
}
