import express from "express";
import config from "config"; //Contém informações como: URL de banco de dados, porta de execução, etc...

const app = express();

//Routes
import router from "./router";

app.use("/api/", router) //Definindo o prefixo da api, e passando nossas rotas para a aplicação

//JSON middleware
app.use(express.json());

//APP PORT
const port = config.get<number>("port"); //Acessando configuração definida em "config/default.ts" e tipando ela pra "number"

//Definição de porta para acesso
//PS: Aqui definimos a função como assíncrona, pois como será utilizado banco de dados, isto pode demorar alguns instantes
app.listen(port, async () => {
    console.log(`aplicação rodando na porta ${port}`)
})