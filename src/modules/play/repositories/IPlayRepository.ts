import { ICreatePlayDTO } from "../dtos/ICreatePlayDTO"
import { Play } from "../infra/typeorm/entities/Play"


export interface IPlayRepository {
    create(new_play: ICreatePlayDTO): Promise<Play> 
    update(user: Play): Promise<Play> 
    findById(id: string): Promise<Play> 
    findOnline(): Promise<Play[]> 
    delete(user: Play): Promise<void> 
}