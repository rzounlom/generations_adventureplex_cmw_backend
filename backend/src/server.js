import { GraphQLServer, PubSub } from "graphql-yoga";
// import db from "./db";
import connectDB from './db/db'
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import Client from "./resolvers/Client";
import Subscription from "./resolvers/Subscription";

import UserModel from './db/models/userModel'
import ClientModel from './db/models/clientModel'
import Ticket from './db/models/userModel'

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
    // db,
    pubsub,
    models: {
      UserModel,
      ClientModel,
      Ticket
    }
  },
});

server.start(() => {
  console.log("server started")
  connectDB()
});