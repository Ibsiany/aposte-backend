import { DeletePlayService } from "@modules/play/services/DeletePlayService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeletePlayController {
    public async handle(request: Request, response: Response): Promise<Response> {
      const deletePlayService = container.resolve(DeletePlayService);
  
      const { id } = request.params;
  
      await deletePlayService.execute(
        id,
      );
  
      return response.status(204).send();
    }
  }
  