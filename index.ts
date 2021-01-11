import express from 'express';
import TestApi from './apis/rest/test.api';
import APIS from './apis/rest';
import { buildSchemaSync } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { BookResolver } from './apis/gql/code-first-style/resolvers/book.resolver';
import { StudentResolver } from './apis/gql/code-first-style/resolvers/student.resolver';

const app = express();
app.use(express.json());

// code-first-style using 'type-graphql'
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

app.listen(3000);
