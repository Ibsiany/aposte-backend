import { inject, injectable } from "tsyringe";
import {v4 as uuidV4} from 'uuid';
import { sign } from 'jsonwebtoken';
import { User } from "../infra/typeorm/entities/User";
import { IUserRepository } from "../repositories/IUserRepository";

interface IResponse {
    user: User;
    token: string;
  }
  
@injectable()
export class SessionService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute(email: string, password:string): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Incorrect email/password');
    }
    
    if (password !== user.password) {
      throw new Error('Incorrect email/password');
    }

    const token = sign({}, uuidV4(), {
        subject: user.id,
        expiresIn: 1,
    })

    return {
      user,
      token,
    };
  }
}
