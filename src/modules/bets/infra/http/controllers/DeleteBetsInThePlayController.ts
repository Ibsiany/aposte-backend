import { DeleteBetsInThePlayService } from "@modules/bets/services/DeleteBetsInThePlayService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeleteBetsInThePlayController {
    public async handle(request: Request, response: Response): Promise<Response> {
      const deleteBetsInThePlayService = container.resolve(DeleteBetsInThePlayService);
  
      const { id } = request.params;
  
      await deleteBetsInThePlayService.execute(
        id,
      );
  
      return response.status(204).send();
    }
  }
  