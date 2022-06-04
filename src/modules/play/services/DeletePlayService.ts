import { inject, injectable } from "tsyringe";
import { IPlayRepository } from "../repositories/IPlayRepository";

  
@injectable()
export class DeletePlayService {
  constructor(
    @inject('PlayRepository')
    private playRepository: IPlayRepository,
  ) {}

  async execute(id: string): Promise<void> {
    if(!id){
      throw new Error("Missing ID!")
    }

    const play = await this.playRepository.findById(id)

    if(!play){
      throw new Error("Play does not exist!")
    }

    await this.playRepository.delete(play)

  }
}
