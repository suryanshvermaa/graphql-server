import prisma from "../../config/database";

const todoResolver={
    Query:{
        todos:async()=>await prisma.todo.findMany({orderBy:{id:"desc"}})
    },
    Mutation:{
        createTodo: async (_:any, { todo }: { todo: string }) => {
            const newTodo = await prisma.todo.create({
                data: {
                    todo: todo,
                    completed: false,
                },
            });
            if (!newTodo) {
                throw new Error("Failed to create a new todo");
            }
            return newTodo;
        } 
    }
}

export default todoResolver;