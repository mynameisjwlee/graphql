"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_api_1 = __importDefault(require("./apis/rest/test.api"));
const rest_1 = __importDefault(require("./apis/rest"));
const type_graphql_1 = require("type-graphql");
const apollo_server_express_1 = require("apollo-server-express");
const book_resolver_1 = require("./apis/gql/book.resolver");
const app = express_1.default();
app.use(express_1.default.json());
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
const gqlSchema = type_graphql_1.buildSchemaSync({
    resolvers: [
        book_resolver_1.BookResolver,
    ],
    validate: false,
});
const gqlServer = new apollo_server_express_1.ApolloServer({ schema: gqlSchema });
gqlServer.applyMiddleware({ app, path: '/graphql' });
const restTest = new test_api_1.default();
app.get(rest_1.default.TEST, restTest.get);
app.listen(3000);
