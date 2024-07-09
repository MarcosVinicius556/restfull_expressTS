//Arquivo de configuração para log da aplicação
import winston from "winston";
import config from "config";

//Definindo nível de log
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
};

//Recupera o ambiente em que a aplicação está rodando
const level = () => {
    const env = config.get<string>("env") || "development";
    const isDevelopment = env === "development";

    return isDevelopment ? "debug" : "warn";
};

//Definindo cores que irão representar nossos logs na aplicação
const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white"
};

winston.addColors(colors); //Configurando cores no winston

/**
 * Formatando mensagens de log que serão exibidas/salvas
 */
const format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }), //Formato da hora
    winston.format.colorize({ all:  true }), //Habilitando o uso de todas as cores para os logs
    winston.format.printf((info) => `${info.timestamp} - ${info.level} - ${info.message}`) //Definindo padrão das mensagens
);

/**
 * Configurando onde será exibido/salvo os logs da aplicação
 */
const transports = [
    new winston.transports.Console(), //Exibição em console
    new winston.transports.File({  //Definindo um arquivo separado para tudo que seja do level de error
        filename: "logs/error.log",
        level: "error"
    }),
    new winston.transports.File({ filename: "logs/all.log" }) //Definindo um arquivo para qualquer tipo de level
];

//Criando instancia do logger para a aplicação
const Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports
});

export default Logger;