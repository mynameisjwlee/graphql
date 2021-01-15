import path from 'path';

import {
  loadFilesSync,
  mergeResolvers,
} from 'graphql-tools';

const allResolvers = loadFilesSync(path.join(__dirname, '*.resolver.ts'));
const mergedResolvers = mergeResolvers(allResolvers);

export default mergedResolvers;
