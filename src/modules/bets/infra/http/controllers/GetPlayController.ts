import {GetPlayService} from '../../../services/GetPlayService'
import { Request, Response } from "express";
import { container } from "tsyringe";

export class GetPlayController {
    public async handle(request: Request, response: Response): Promise<Response> {
      const getPlayService = container.resolve(GetPlayService);
  
      const plays = await getPlayService.execute();
  
      return response.json(plays);
    }
  }
  