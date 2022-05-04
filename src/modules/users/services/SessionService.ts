import { inject, injectable } from "tsyringe";
import { compare } from 'bcryptjs';
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
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute(email, password): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Incorrect email/password');
    }

    const comparePassword = await compare(
      password,
      user.password,
    );

    if (!comparePassword) {
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
