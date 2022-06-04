import { inject, injectable } from "tsyringe";
import { Play } from "../infra/typeorm/entities/Play";
import { IPlayRepository } from "../repositories/IPlayRepository";
  
@injectable()
export class GetPlayResultsService {
  constructor(
    @inject('PlayRepository')
    private playRepository: IPlayRepository,
  ) {}

  async execute(): Promise<Play[]> {
   return this.playRepository.findResults()
  }
}
