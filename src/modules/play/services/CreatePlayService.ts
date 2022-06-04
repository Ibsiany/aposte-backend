import { inject, injectable } from "tsyringe";
import { Play } from "../infra/typeorm/entities/Play";
import { ICreatePlayDTO } from "../dtos/ICreatePlayDTO";
import { IPlayRepository } from "../repositories/IPlayRepository";

@injectable()
export class CreatePlayService {
    constructor(
        @inject('PlayRepository')
        private playRepository: IPlayRepository,
    ){}

    async execute({team_a, team_b}:ICreatePlayDTO): Promise<Play>{
        if(!team_a || !team_b){
            throw new Error("Some of the parameters was undefined!")
        }

        const play = await this.playRepository.create({
            team_a,
            team_b
        })

        return play
    }
}