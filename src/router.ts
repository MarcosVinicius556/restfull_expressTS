import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";

/**
 * Com este objeto seremos capaz de criar rotas sem que elas estejam diretamente associadas ao objeto do express definido em app.ts
 */
const router = Router();

export default router
    .get("/test", (req: Request, res: Response) => {
        res.send("API Working!");
    }).post("/movie", createMovie);