import { buildSchemaSync } from 'type-graphql';

import { BookResolver } from './book.resolver';
import { StudentResolver } from './student.resolver';

export const schema = buildSchemaSync({
  resolvers: [
    BookResolver,
    StudentResolver,
  ],
  validate: false,
});
