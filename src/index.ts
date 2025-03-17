import express,{Request,Response} from 'express';
import 'dotenv/config';
import apolloServer from './config/apolloServer';
import cors from "cors";
import {expressMiddleware} from "@apollo/server/express4"

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//health route
app.get('/health',(req:Request,res:Response)=>{
    res.status(200).send('healthy');
})

const startApolloServer=async()=>{  
    await apolloServer.start();
    app.use('/graphql', expressMiddleware(apolloServer));
}
startApolloServer();
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('server is running on port',port);
})