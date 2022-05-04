import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

export interface IUserRepository {
    create(new_user: ICreateUserDTO): Promise<User> 
    findByEmail(email: string): Promise<User> 
}