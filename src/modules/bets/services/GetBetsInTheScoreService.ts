import { inject, injectable } from "tsyringe";
import { Bets } from "../infra/typeorm/entities/Bets";
import { IBetsRepository } from "../repositories/IBetsRepository";
  
@injectable()
export class GetBetsInTheScoreService {
  constructor(
    @inject('BetsRepository')
    private betsRepository: IBetsRepository,
  ) {}

  async execute(): Promise<Bets[]> {
   
  }
}
