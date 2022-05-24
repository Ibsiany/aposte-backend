import { inject, injectable } from "tsyringe";
import { compare } from 'bcryptjs';
import { IUserRepository } from "../repositories/IUserRepository";

  
@injectable()
export class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute(email, password): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    const comparePassword = await compare(
      password,
      user.password,
    );

    if (!comparePassword) {
      throw new Error('Incorrect email/password');
    }

    await this.usersRepository.delete(user)
  }
}
