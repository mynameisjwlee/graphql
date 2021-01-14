import { mergeTypeDefs, loadFilesSync } from 'graphql-tools';
import path from 'path';

const allTypeDefs = loadFilesSync(path.join(__dirname, '*.graphql'));
const mergedTypeDefs = mergeTypeDefs(allTypeDefs);

export default mergedTypeDefs;
