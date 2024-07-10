/**
 * Aqui vai ser o middleware responsável por verificar os objetos passados para as requisições
 * para não permitir que um objeto que não possua os campos obrigatórios seja criado...
 */

import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    //Se nenhum erro de validação for encontrado, libera para realizar a operação desejada
    if(errors.isEmpty()) {
        return next();
    }

    //Caso seja encontrado algum erro, irá montar uma lista e retornar ao usuário...
    const extractedErrors: object[] = [];

    errors.array().map((err) => extractedErrors.push({[err.type]: err.msg}))

    return res.status(422).json({
        errors: extractedErrors
    });
    
}