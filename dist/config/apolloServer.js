"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const todoSchema_1 = __importDefault(require("../module/todo/todoSchema"));
const todoResolver_1 = __importDefault(require("../module/todo/todoResolver"));
const apolloServer = new server_1.ApolloServer({
    typeDefs: todoSchema_1.default,
    resolvers: todoResolver_1.default,
});
exports.default = apolloServer;
