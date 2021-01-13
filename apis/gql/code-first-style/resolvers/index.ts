import { buildSchemaSync } from 'type-graphql';
import { BookResolver } from './book.resolver';
import { StudentResolver, StudentModelResolver } from './student.resolver';

export const schema = buildSchemaSync({
  resolvers: [
    BookResolver,
    StudentResolver,
    StudentModelResolver,
  ],
  validate: false,
});
