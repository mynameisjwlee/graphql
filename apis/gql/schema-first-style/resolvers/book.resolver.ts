import { Resolvers, Book } from '../schema/book.type';
import { bookDatas } from '../models';

export const BookResolver: Resolvers = {
    Query: {
        books: (): Book[] => {
            return bookDatas;
        },
    },
    Mutation: {
        createBook: (_, { title, author }): Book => {
            const newBook: Book = {
                title,
                author,
            };
            bookDatas.push(newBook);
            return newBook;
        },
    },
};
