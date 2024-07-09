import express from "express";
import config from "config"; //Contém informações como: URL de banco de dados, porta de execução, etc...

const app = express();

//JSON middleware
app.use(express.json());

//APP PORT
const port = config.get<number>("port"); //Acessando configuração definida em "config/default.ts" e tipando ela pra "number"

//Definição de porta para acesso
//PS: Aqui definimos a função como assíncrona, pois como será utilizado banco de dados, isto pode demorar alguns instantes
app.listen(port, async () => {
    console.log(`aplicação está rodando na porta ${port}`)
})