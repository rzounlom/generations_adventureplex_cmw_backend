import { GraphQLServer, PubSub } from "graphql-yoga";
import db from "./db";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import Client from "./resolvers/User";
import Subscription from "./resolvers/Subscription";


//create pubsub
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    // Subscription,
    User,
    Client
  },
  context: {
    db,
    pubsub,
  },
});

server.start(() => console.log("server started"));