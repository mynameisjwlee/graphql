import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Book } from './book.type';

@Resolver()
export class BookResolver {
    private items: Book[];

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