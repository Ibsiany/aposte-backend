import { DeleteUserService } from "@modules/users/services/DeleteUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeleteUserController {
    public async handle(request: Request, response: Response): Promise<Response> {
      const deleteUserService = container.resolve(DeleteUserService);
  
      const { email, password } = request.body;
  
      await deleteUserService.execute(
        email,
        password,
      );
  
      return response.status(204).send();
    }
  }
  