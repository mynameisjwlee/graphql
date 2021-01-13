import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { schema } from './apis/gql/code-first-style/resolvers';
import APIS from './apis/rest';
import TestApi from './apis/rest/test.api';

function startServer() {
  const app = express();
  app.use(express.json());

  // code-first 
  const gqlServer = new ApolloServer({ schema });

  // schema-first

  gqlServer.applyMiddleware({ app, path: '/graphql' });

  const restTest = new TestApi();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  app.get(APIS.TEST, restTest.get);

  const port = 3000;
  app.listen(port, () => {
    console.log(`[${new Date().toISOString()}] Started at http://localhost:${port}`);
  });
}

(() => {
  startServer();
})();
