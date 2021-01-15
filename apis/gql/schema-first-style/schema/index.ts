import path from 'path';

import {
  loadFilesSync,
  mergeTypeDefs,
} from 'graphql-tools';

const allTypeDefs = loadFilesSync(path.join(__dirname, '*.graphql'));
const mergedTypeDefs = mergeTypeDefs(allTypeDefs);

export default mergedTypeDefs;
