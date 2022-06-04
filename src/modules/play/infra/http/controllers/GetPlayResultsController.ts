import {GetPlayResultsService} from '../../../services/GetPlayResultsService'
import { Request, Response } from "express";
import { container } from "tsyringe";

export class GetPlayResultsController {
    public async handle(request: Request, response: Response): Promise<Response> {
      const getPlayResultsService = container.resolve(GetPlayResultsService);
  
      const plays = await getPlayResultsService.execute();
  
      return response.json(plays);
    }
  }
  