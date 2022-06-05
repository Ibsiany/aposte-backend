import { inject, injectable } from "tsyringe";
import { User } from "../infra/typeorm/entities/User";
import { IUserRepository } from "../repositories/IUserRepository";

  
@injectable()
export class GetUserByIdService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<User> {
    return this.usersRepository.findById(id)
  }
}
