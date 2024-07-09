import mongoose from "mongoose";
import config from 'config';

/**
 * Função para abrir conexão com o banco de dados mongodb
 */
async function connect() {
    const dbUri = config.get<string>("dbUri");
    try {

        await mongoose.connect(dbUri);
        console.log("Conectou ao banco de dados");

    } catch(e: any) {
        console.log("Não foi possível conectar ao banco de dados. Erro" + e);
    }
}

export default connect;