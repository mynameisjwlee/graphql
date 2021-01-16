import path from 'path';

import {
  loadSchemaSync,
  GraphQLFileLoader,
} from 'graphql-tools';

const pure_schema = loadSchemaSync(path.join(__dirname, 'index.graphql'), {
  loaders: [
    new GraphQLFileLoader(),
  ],
});

export default pure_schema;
