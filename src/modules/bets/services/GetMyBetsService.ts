import { inject, injectable } from "tsyringe";
import { Bets } from "../infra/typeorm/entities/Bets";
import { IBetsRepository } from "../repositories/IBetsRepository";
  
@injectable()
export class GetMyBetsService {
  constructor(
    @inject('BetsRepository')
    private betsRepository: IBetsRepository,
  ) {}

  async execute(id: string): Promise<Bets[]> {
   return this.betsRepository.findByUserId(id)
  }
}
