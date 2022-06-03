import { GetBetsInThePlayService } from "@modules/bets/services/GetBetsInThePlayService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class GetBetsInThePlayController {
    public async handle(request: Request, response: Response): Promise<Response> {
      const getBetsInThePlayService = container.resolve(GetBetsInThePlayService);
  
      const bets = await getBetsInThePlayService.execute();
  
      return response.json(bets);
    }
  }
  