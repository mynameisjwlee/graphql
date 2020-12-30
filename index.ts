import express from 'express';
import TestApi from './apis/rest/test.api';
import APIS from './apis/rest';
import { buildSchemaSync } from 'type-graphql';
import { ApolloServer, gql } from 'apollo-server-express';
import { BookResolver } from './apis/gql/book.resolver';

const app = express();
app.use(express.json());

const gqlSchema = buildSchemaSync({
  resolvers: [
    BookResolver,
  ],
  validate: false,
});

const gqlServer = new ApolloServer({ schema: gqlSchema });
gqlServer.applyMiddleware({ app, path: '/graphql' });

const restTest = new TestApi();
app.get(APIS.TEST, restTest.get);

app.listen(3000);
