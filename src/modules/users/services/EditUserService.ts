import { inject, injectable } from "tsyringe";
import { hash } from 'bcryptjs';
import { User } from "../infra/typeorm/entities/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

  
@injectable()
export class EditUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute({name, email, password}:ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);
    
    if (!user) {
        throw new Error('Incorrect email');
    }
    
    if(name){
        user.name = name;
    }
    
    if(password){
        const hashedPassword = await hash(password, 8);

        user.password = hashedPassword;
    }
        
    await this.usersRepository.update(user);

    return { ...user, password: '' };
  }
}
