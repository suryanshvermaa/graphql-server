import { ApolloServer } from "@apollo/server";
import todoSchema from "../module/todo/todoSchema";
import todoResolver from "../module/todo/todoResolver";

const apolloServer=new ApolloServer({
    typeDefs:todoSchema,
    resolvers:todoResolver,
})

export default apolloServer;