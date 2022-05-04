import { SessionService } from "@modules/users/services/SessionService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class SessionController {
    public async handle(request: Request, response: Response): Promise<Response> {
      const sessionUser = container.resolve(SessionService);
  
      const { email, password } = request.body;
  
      const { user, token } = await sessionUser.execute(
        email,
        password,
      );
  
      return response.json({
        user,
        token,
      });
    }
  }
  