import { inject, injectable } from "tsyringe";
import { Bets } from "../infra/typeorm/entities/Bets";
import { IBetsRepository } from "../repositories/IBetsRepository";

  
@injectable()
export class EditBetsInThePlayService {
  constructor(
    @inject('BetsRepository')
    private betsRepository: IBetsRepository,
  ) {}

  async execute(id: string, value: string): Promise<Bets> {
    if(!id || !value){
      throw new Error("the id or the value was not inserted")
    }
    
    const bet = await this.betsRepository.findById(id)

    if(!bet){
      throw new Error("the bet does not exist")
    }

    if(value){
      bet.value = value
    }

    this.betsRepository.update(bet)
    
    return bet
  }
}
