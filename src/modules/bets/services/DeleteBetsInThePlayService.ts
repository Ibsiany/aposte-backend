import { inject, injectable } from "tsyringe";
import { IBetsRepository } from "../repositories/IBetsRepository";

  
@injectable()
export class DeleteBetsInThePlayService {
  constructor(
    @inject('BetsRepository')
    private betsRepository: IBetsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    if(!id){
      throw new Error("the id does not exist!")
    }

    const bet = await this.betsRepository.findById(id)

    if(!bet){
      throw new Error("The bet does not exist")
    }

    await this.betsRepository.delete(bet)
  }
}
