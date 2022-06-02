import { CreatePlayService } from "@modules/play/services/CreatePlayService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreatePlayController{
    async handle(request: Request, response: Response): Promise<Response>{
        const createPlayService = container.resolve(CreatePlayService)

        const {team_a, team_b} = request.body;

        const play = await createPlayService.execute({team_a, team_b});

        return response.status(201).json(play)
    }
}