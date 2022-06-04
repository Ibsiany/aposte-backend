import { inject, injectable } from "tsyringe";
import { Play } from "../infra/typeorm/entities/Play";
import { IPlayRepository } from "../repositories/IPlayRepository";

  
@injectable()
export class FinishedPlayService {
  constructor(
    @inject('PlayRepository')
    private playRepository: IPlayRepository,
  ) {}

  async execute(id: string, result: string): Promise<Play> {
   if( !id || !result){
     throw new Error("The id or the result does not exist!")
   }

   const play =  await this.playRepository.findById(id)

   if(!play){
     throw new Error("Play does not exist!")
   }

   play.result = result

   const playUpdated = await this.playRepository.update(play)
   
   return playUpdated
  }
}
