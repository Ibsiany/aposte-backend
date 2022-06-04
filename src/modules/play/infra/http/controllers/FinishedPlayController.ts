import { FinishedPlayService } from "@modules/play/services/FinishedPlayService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class FinishedPlayController{
    async handle(request: Request, response: Response): Promise<Response>{
        const finishedPlayService = container.resolve(FinishedPlayService)

        const {id, result} = request.body;

        const play = await finishedPlayService.execute(id, result);

        return response.status(201).json(play)
    }
}