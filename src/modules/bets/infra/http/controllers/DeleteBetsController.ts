import { DeleteBetsInTheScoreService } from "@modules/bets/services/DeleteBetsService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeleteBetsController {
    public async handle(request: Request, response: Response): Promise<Response> {
      const deleteBetsInTheScoreService = container.resolve(DeleteBetsInTheScoreService);
  
      const { id } = request.params;
  
      await deleteBetsInTheScoreService.execute(
        id,
      );
  
      return response.status(204).send();
    }
  }
  