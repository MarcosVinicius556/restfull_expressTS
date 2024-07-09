import mongoose from "mongoose";
import config from 'config';

//Logger
import Logger from "./logger";

/**
 * Função para abrir conexão com o banco de dados mongodb
 */
async function connect() {
    const dbUri = config.get<string>("dbUri");
    try {

        await mongoose.connect(dbUri);
        Logger.info("Conectou ao banco de dados");

    } catch(e: any) {
        Logger.error("Não foi possível conectar ao banco de dados. Erro" + e);
        process.exit(1); //Se ocorrer um erro, stopa a aplicação
    }
}

export default connect;