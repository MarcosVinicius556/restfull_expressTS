//ENV variables
require("dotenv").config();

import express from "express";
import config from "config"; //Contém informações como: URL de banco de dados, porta de execução, etc...

//DATABASE
import db from '../config/db'

const app = express();

//Routes
import router from "./router";

//Logger
import Logger from "../config/logger";

//Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

//JSON middleware
app.use(express.json());

//Logger middleware
app.use(morganMiddleware)

//Definindo o prefixo da api, e passando nossas rotas para a aplicação
app.use("/api/", router) 

//APP PORT
const port = config.get<number>("port"); //Acessando configuração definida em "config/default.ts" e tipando ela pra "number"

//Definição de porta para acesso
//PS: Aqui definimos a função como assíncrona, pois como será utilizado banco de dados, isto pode demorar alguns instantes
app.listen(port, async () => {

    //Só inicia a aplicação se a conexão com o banco for bem sucedida
    await db();

    Logger.info(`aplicação rodando na porta ${port}`)
})