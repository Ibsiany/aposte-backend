import { inject, injectable } from "tsyringe";
import { compare } from 'bcryptjs';
import { IUserRepository } from "../repositories/IUserRepository";

  
@injectable()
export class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute(email): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Incorrect email!');
    }

    await this.usersRepository.delete(user)
  }
}
