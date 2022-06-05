import { GetBetsByIdService } from "@modules/bets/services/GetBetsByIdService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class GetBetsByIdController {
    public async handle(request: Request, response: Response): Promise<Response> {
        const getBetsByIdService = container.resolve(GetBetsByIdService);
        
        const { id } = request.params;
  
        const play = await getBetsByIdService.execute(id);
    
        return response.json(play);
    }
  }
  