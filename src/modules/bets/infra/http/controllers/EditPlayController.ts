import { EditPlayService } from "@modules/play/services/EditPlayService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class EditPlayController{
    async handle(request: Request, response: Response): Promise<Response>{
        const editPlayService = container.resolve(EditPlayService)

        const {id, result} = request.body;

        const play = await editPlayService.execute(id, result);

        return response.status(201).json(play)
    }
}