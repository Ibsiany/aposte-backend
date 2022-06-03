import { GetBetsInTheScoreService } from "@modules/bets/services/GetBetsInTheScoreService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class GetBetsInTheScoreController {
    public async handle(request: Request, response: Response): Promise<Response> {
      const getBetsInTheScoreService = container.resolve(GetBetsInTheScoreService);
  
      const bets = await getBetsInTheScoreService.execute();
  
      return response.json(bets);
    }
  }
  