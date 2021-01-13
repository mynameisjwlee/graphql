import { Resolvers, Book } from '../schema/book.type';
import { bookDatas, BookData } from '../models';

const bookResolver: Resolvers = {
    Query: {
        books: (_): BookData[] => {
            return bookDatas;
        },
    },
    Mutation: {
        createBook: (_, args): Book => {
            const { title, author }: { title: string, author: string } = args;
            const newBook: Book = {
                title,
                author,
            };
            bookDatas.push(newBook);
            return newBook;
        },
    },
};
