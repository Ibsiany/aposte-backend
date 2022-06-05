import { GetUserByIdService } from "@modules/users/services/GetUserByIdService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class GetUserByIdController {
    public async handle(request: Request, response: Response): Promise<Response> {
      const getUserByIdService = container.resolve(GetUserByIdService);
  
      const { id } = request.params;
  
      const user = await getUserByIdService.execute(
        id
      );
  
      return response.json(user);
    }
  }
  