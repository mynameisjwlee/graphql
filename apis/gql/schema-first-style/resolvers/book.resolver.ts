import { bookDatas } from '../models';
import {
  Book,
  Resolvers,
} from '../schema/book.type';

export const BookResolver: Resolvers = {
  Query: {
    books: (): Book[] => {
      return bookDatas;
    },
  },
  Mutation: {
    createBook: (_, {
      title,
      author,
    }): Book => {
      const newBook: Book = {
        title,
        author,
      };
      bookDatas.push(newBook);
      return newBook;
    },
  },
};
