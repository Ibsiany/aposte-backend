import { inject, injectable } from "tsyringe";
import { ICreateBetsDTO } from "../dtos/ICreateBetsDTO";
import { Bets } from "../infra/typeorm/entities/Bets";
import { IBetsRepository } from "../repositories/IBetsRepository";

@injectable()
export class CreateBetsInTheScoreService {
    constructor(
        @inject('BetsRepository')
        private betsRepository: IBetsRepository,
    ){}

    async execute({id_user, id_play, type, value }:ICreateBetsDTO): Promise<Bets>{

    }
}