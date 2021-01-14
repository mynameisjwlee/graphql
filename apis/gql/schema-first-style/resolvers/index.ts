import { mergeResolvers, loadFilesSync, ResolversDefinition } from "graphql-tools";
import path from 'path';

const allResolvers = loadFilesSync(path.join(__dirname, '*.resolver.ts'));
const mergedResolvers = mergeResolvers(allResolvers);

export default mergedResolvers;
