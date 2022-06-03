import { EditBetsInThePlayService } from "@modules/bets/services/EditBetsInThePlayService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class EditBetsInThePlayController{
    async handle(request: Request, response: Response): Promise<Response>{
        const editBetsInThePlayService = container.resolve(EditBetsInThePlayService)

        const {id, value} = request.body;

        const play = await editBetsInThePlayService.execute(id, value);

        return response.status(201).json(play)
    }
}