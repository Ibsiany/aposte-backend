import { EditBetsInTheScoreService } from "@modules/bets/services/EditBetsInTheScoreService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class EditBetsInTheScoreController{
    async handle(request: Request, response: Response): Promise<Response>{
        const editBetsInTheScoreService = container.resolve(EditBetsInTheScoreService)

        const {id, value} = request.body;

        const play = await editBetsInTheScoreService.execute(id, value);

        return response.status(201).json(play)
    }
}