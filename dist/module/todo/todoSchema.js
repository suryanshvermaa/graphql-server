"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoSchema = ` #graphql
scalar Date
type Todo{
    id: Int!
    todo: String
    completed:Boolean
    created_at:Date
}

type Query{
    todos:[Todo]
}

type Mutation {
    createTodo(todo:String):Todo
}

`;
exports.default = todoSchema;
