import { IBetsRepository } from "@modules/bets/repositories/IBetsRepository";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { Play } from "../infra/typeorm/entities/Play";
import { IPlayRepository } from "../repositories/IPlayRepository";

  
@injectable()
export class FinishedPlayService {
  constructor(
    @inject('PlayRepository')
    private playRepository: IPlayRepository,

    @inject('BetsRepository')
    private betsRepository: IBetsRepository,

    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string, result: string): Promise<Play> {
   if( !id || !result){
     throw new Error("The id or the result does not exist!")
   }

   const play =  await this.playRepository.findByIdPlay(id)

   if(!play){
     throw new Error("Play does not exist!")
   }

   play.result = result

    const playUpdated = await this.playRepository.update(play);

    for (const bets of play.bets) {
      if (bets.value === result) {
        const user = await this.userRepository.findById(bets.id_user);
        
        user.point = user.point + 1;
        
        await this.userRepository.update(user)
        
        
        continue;
      }
      
      const foundBets = await this.betsRepository.findById(bets.id)

      const [firstValue, secondValue] = result.split('x');

      if (foundBets.type === "JOGO" && Number(firstValue) > Number(secondValue) && bets.value === foundBets.play.team_a) {
        const user = await this.userRepository.findById(bets.id_user);

        user.point = user.point + 1;

        await this.userRepository.update(user)


        continue;
      }
      
      if (foundBets.type === "JOGO" && Number(secondValue) > Number(firstValue) && bets.value === foundBets.play.team_b) {
        const user = await this.userRepository.findById(bets.id_user);

        user.point = user.point + 1;
        
        await this.userRepository.update(user)

        
        continue;
      }
    }
    
   
   return playUpdated
  }
}
