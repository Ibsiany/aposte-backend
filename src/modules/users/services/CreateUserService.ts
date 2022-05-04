import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";
import { hash } from 'bcryptjs';
import { inject } from "tsyringe";
import { IUserRepository } from "../repositories/IUserRepository";

export class CreateUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ){}

    async execute({name, email, password}:ICreateUserDTO): Promise<User>{
        if(!name || !email || !password){
            throw new Error('Missins params!');
        }

        const hashedPassword = await hash(password, 8);

        const user = await this.userRepository.create({
            name,
            email,
            password: hashedPassword,
          });
      
      

        return { ...user, password: '' };
    }
}