import express from 'express';
import TestApi from './apis/rest/test.api';
import APIS from './apis/rest';
import { buildSchemaSync } from 'type-graphql';
import { ApolloServer, gql } from 'apollo-server-express';
import { BookResolver } from './apis/gql/book.resolver';

const app = express();
app.use(express.json());

// TODO: type-graphql, graphql-tools, graphql codegen 등 써서 구조화하기
// const schema = gql`
//   type Query {
//     me: User
//     user(username: String!): User
//   }
 
//   type User {
//     id: ID!  
//     username: String!
//     age: Int
//     address: String
//     friends: [User]
//   }
// `;
 
// const resolvers = {
//   Query: {
//     me: () => {
//         return {
//             username: 'Robin Wieruch',
//             age: 32,
//             address: 'San Francisco',
//             friends: [{ username: 2 }, { username: 3 }]
//         };
//     },
//     user: (parent: any, { username }: { username: string }) => {
//         return {
//             username,
//         }
//     },
//   },
// };

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
