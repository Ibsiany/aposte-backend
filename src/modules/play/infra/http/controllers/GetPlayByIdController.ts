import { GetPlayByIdService } from "@modules/play/services/GetPlayByIdService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class GetPlayByIdController {
    public async handle(request: Request, response: Response): Promise<Response> {
        const getPlayByIdService = container.resolve(GetPlayByIdService);
        
        const { id } = request.params;
  
        const play = await getPlayByIdService.execute(id);
    
        return response.json(play);
    }
  }
  