//Criando um model, que representará nossa entidade do banco de dados
import { model, Schema } from 'mongoose';

/**
 * Definindo campos e seus respectivos tipos da tabela "Movie no banco"
 */
const movieSchema = new Schema(
    {
        title: {type: String},
        rating: {type: Number},
        description: {type: String},
        director: {type: String},
        stars: {type: Array},
        poster: {type: String}
    },
    {
      timestamps: true  //Ao o registro ser gerado, atualizado, atualiza essa informação
    }
);

/**
 * Exportando um model do nosso schema, com isso já seremos capazes de fazer
 * operações com o banco de dados de maneira mais facilitada e rápida...
 */
export const MovieModel = model("Movie", movieSchema);