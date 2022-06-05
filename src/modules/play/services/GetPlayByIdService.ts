import { inject, injectable } from "tsyringe";
import { Play } from "../infra/typeorm/entities/Play";
import { IPlayRepository } from "../repositories/IPlayRepository";
  
@injectable()
export class GetPlayByIdService {
  constructor(
    @inject('PlayRepository')
    private playRepository: IPlayRepository,
  ) {}

  async execute(id: string): Promise<Play> {
   return this.playRepository.findById(id)
  }
}
