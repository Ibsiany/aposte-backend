import { ICreateBetsDTO } from "../dtos/ICreateBetsDTO"
import { Bets } from "../infra/typeorm/entities/Bets"


export interface IBetsRepository {
    create(new_play: ICreateBetsDTO): Promise<Bets> 
    update(user: Bets): Promise<Bets> 
    findById(id: string): Promise<Bets> 
    findByType(type: string): Promise<Bets[]> 
    findByUserId(id_user: string): Promise<Bets[]> 
    delete(user: Bets): Promise<void> 
}