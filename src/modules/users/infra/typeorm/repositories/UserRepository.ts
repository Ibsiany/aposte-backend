import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

export class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;

    constructor() {
      this.ormRepository = getRepository(User);
    }
  
    async create(
      new_user: ICreateUserDTO,
    ): Promise<User> {
      const user = this.ormRepository.create(new_user);
  
      return this.ormRepository.save(user);
    }
  
    async update(
      user: User,
    ): Promise<User> {
      return this.ormRepository.save(user);
    }
  
    async findByEmail(
      email: string,
    ): Promise<User> {  
      return this.ormRepository.findOne({where: {email}});
    }
  
    async findById(
      id: string,
    ): Promise<User> {  
      return this.ormRepository.findOne({where: {id}});
    }
  
    async delete(
      user: User,
    ): Promise<void> {  
      await this.ormRepository.remove(user);
    }
}