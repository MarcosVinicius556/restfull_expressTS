import morgan, { StreamOptions } from "morgan";
import config from "config";
import Logger from "../../config/logger";

//Definindo que toda requisição será passada para o Logger no level de http
const stream: StreamOptions = {
    write: (message) => Logger.http(message)
}

//Definindo se a aplicação deverá ou não gerar logs (ex: não gerar em produção)
const skip = () => {
    const env = config.get<string>("env") || "development";
    return env !== "development"
}

const morganMiddleware = morgan(
    //Definindo o modelo de mensagem que será exibida
    ":method :url :status :res[content-length] - :response-time ms",
    { stream, skip }
);

export default morganMiddleware;