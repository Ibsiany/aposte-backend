import { EditUserService } from "@modules/users/services/EditUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class EditUserController{
    async handle(request: Request, response: Response): Promise<Response>{
        const editUserService = container.resolve(EditUserService)

        const {name, email, password} = request.body;

        const user = await editUserService.execute({name, email, password});

        return response.status(201).json(user)
    }
}