import express from 'express';
import TestApi from './apis/rest/test.api';
import APIS from './apis/rest';
import { buildSchemaSync } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { BookResolver } from './apis/gql/resolvers/book.resolver';
import { StudentResolver } from './apis/gql/resolvers/student.resolver';


function startServer() {
  const app = express();
  app.use(express.json());

  const gqlSchema = buildSchemaSync({
    resolvers: [
      BookResolver,
      StudentResolver,
    ],
    validate: false,
  });

  const gqlServer = new ApolloServer({ schema: gqlSchema });
  gqlServer.applyMiddleware({ app, path: '/graphql' });

  const restTest = new TestApi();
  app.get(APIS.TEST, restTest.get);

  const port = 3000;
  app.listen(port, () => {
    console.log(`[${new Date().toISOString()}] Started at http://localhost:${port}/graphql`);
  });
}

(() => {
  startServer()
})()
