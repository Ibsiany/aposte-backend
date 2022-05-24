import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

export interface IUserRepository {
    create(new_user: ICreateUserDTO): Promise<User> 
    update(user: User): Promise<User> 
    findByEmail(email: string): Promise<User> 
    delete(user: User): Promise<void> 
}