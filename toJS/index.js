"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_api_1 = __importDefault(require("./apis/rest/test.api"));
const apis_1 = __importDefault(require("./apis"));
const apollo_server_express_1 = require("apollo-server-express");
const app = express_1.default();
app.use(express_1.default.json());
const schema = apollo_server_express_1.gql `
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
const gqlServer = new apollo_server_express_1.ApolloServer({
    typeDefs: schema,
    resolvers,
});
gqlServer.applyMiddleware({ app, path: '/graphql' });
const restTest = new test_api_1.default();
app.get(apis_1.default.REST_TEST, restTest.get);
app.listen(3000);
