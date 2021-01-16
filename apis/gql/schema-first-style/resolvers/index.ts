import {
  mergeResolvers,
} from 'graphql-tools';

import { BookResolver } from './book.resolver';
import { StudentResolver } from './student.resolver';

const mergedResolvers = mergeResolvers([
  BookResolver,
  StudentResolver,
]);

export default mergedResolvers;
