import { Request, Response } from 'express';

//Model
import { MovieModel } from '../models/Movie';

//Logger
import Logger from '../../config/logger';

/**
 * Definindo função para criação de um objeto do tipo "Movie"
 */
export async function createMovie(req: Request, res: Response) {
    return res.status(200).send("Deu certo o controller!");
}