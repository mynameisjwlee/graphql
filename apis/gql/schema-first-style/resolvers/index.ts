import path from 'path';

import { mergeResolvers, loadFilesSync } from 'graphql-tools';

const allResolvers = loadFilesSync(path.join(__dirname, '*.resolver.ts'));
const mergedResolvers = mergeResolvers(allResolvers);

export default mergedResolvers;
