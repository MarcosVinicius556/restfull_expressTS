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

export async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return res.status(404).json({error: "Filme não encontrado!"});    
        }

        return res.status(200).json(movie);
    } catch(e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).send("Erro ao buscar o filme!");
    }
}

export async function findAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find();
        return res.status(200).json(movies);
    } catch(e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).send("Erro ao buscar todos os filmes!");
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return res.status(404).json({error: "Filme não encontrado!"});    
        }

        await movie.deleteOne()

        return res.status(200).json({msg: "Filme removido com sucesso!"});
    } catch(e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).send("Erro ao remover o filme!");
    }
}

export async function updateMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const data = req.body;
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return res.status(404).json({error: "Filme não encontrado!"});    
        }

        await MovieModel.updateOne({ _id: id }, data);

        return res.status(200).json({ data });
    } catch(e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).send("Erro ao atualizar o filme!");
    }
}