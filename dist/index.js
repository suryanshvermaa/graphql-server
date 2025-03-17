"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const apolloServer_1 = __importDefault(require("./config/apolloServer"));
const cors_1 = __importDefault(require("cors"));
const express4_1 = require("@apollo/server/express4");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//health route
app.get('/health', (req, res) => {
    res.status(200).send('healthy');
});
const startApolloServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield apolloServer_1.default.start();
    app.use('/graphql', (0, express4_1.expressMiddleware)(apolloServer_1.default));
});
startApolloServer();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server is running on port', port);
});
