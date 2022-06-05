import { inject, injectable } from "tsyringe";
import { ICreateBetsDTO } from "../dtos/ICreateBetsDTO";
import { Bets } from "../infra/typeorm/entities/Bets";
import { IBetsRepository } from "../repositories/IBetsRepository";

@injectable()
export class CreateBetsInThePlayService {
    constructor(
        @inject('BetsRepository')
        private betsRepository: IBetsRepository,
    ){}

    async execute({id_user, id_play, value }:ICreateBetsDTO): Promise<Bets>{
        if(!id_user || !id_play || !value){
            throw new Error("Error in the creation of the bet!")
        }

        const foundBet = await this.betsRepository.findByUserId(id_user)

        const findUser = foundBet.find(bets => bets.type === "JOGO")

        if(findUser){
            throw new Error("the Bet already exist!")
        }

        const bets = await this.betsRepository.create({
            id_user,
            id_play,
            type : "JOGO",
            value
        });

        return bets
    }
}