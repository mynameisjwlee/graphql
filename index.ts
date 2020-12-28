import express from 'express';
import TestApi from './apis/rest/test.api';
import APIS from './apis';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();
app.use(express.json());

const schema = gql`
  type Query {
    me: User
  }
 
  type User {
    username: String!
  }
`;
 
const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Robin Wieruch',
      };
    },
  },
};

const gqlServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
});
gqlServer.applyMiddleware({ app, path: '/graphql' });

const restTest = new TestApi();
app.get(APIS.REST_TEST, restTest.get);

app.listen(3000);
