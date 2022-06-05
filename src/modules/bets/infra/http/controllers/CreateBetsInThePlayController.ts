import { CreateBetsInThePlayService } from "@modules/bets/services/CreateBetsInThePlayService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateBetsInThePlayController{
    async handle(request: Request, response: Response): Promise<Response>{
        const createBetsInThePlayService = container.resolve(CreateBetsInThePlayService)

        const {id_user, id_play, value} = request.body;

        const bets = await createBetsInThePlayService.execute({id_user, id_play, value});

        return response.status(201).json(bets)
    }
}