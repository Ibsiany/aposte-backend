import { GetMyBetsService } from "@modules/bets/services/GetMyBetsService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class GetMyBetsController {
    public async handle(request: Request, response: Response): Promise<Response> {
      const getMyBetsService = container.resolve(GetMyBetsService);

      const {id} = request.params
  
      const bets = await getMyBetsService.execute(id);
  
      return response.json(bets);
    }
  }
  