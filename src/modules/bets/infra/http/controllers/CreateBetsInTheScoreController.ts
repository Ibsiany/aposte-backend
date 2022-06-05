import { CreateBetsInTheScoreService } from "@modules/bets/services/CreateBetsInTheScoreService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateBetsInTheScoreController{
    async handle(request: Request, response: Response): Promise<Response>{
        const createBetsInTheScoreService = container.resolve(CreateBetsInTheScoreService)

        const {id_user, id_play, value} = request.body;

        const bets = await createBetsInTheScoreService.execute({id_user, id_play, value});

        return response.status(201).json(bets)
    }
}