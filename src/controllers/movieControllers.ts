import { Request, Response } from 'express';

//Model
import { MovieModel } from '../models/Movie';

//Logger
import Logger from '../../config/logger';

/**
 * Definindo função para criação de um objeto do tipo "Movie"
 */
export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).json(movie);
    } catch(e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).send("Erro ao inserir filme!");
    }
}