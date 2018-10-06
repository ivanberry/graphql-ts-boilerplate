import "reflect-metadata";
import { resolve } from "path";
import { GraphQLServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers";
import { createConnection } from "typeorm";

// The shoudl be as abosolte path
const typeDefs = importSchema(resolve(__dirname, "./schema.graphql"));

const server = new GraphQLServer({ typeDefs, resolvers });
createConnection().then(() => {
  server.start(() => console.log("Server is running on localhost:4000"));
}).catch(e => console.log(e));
