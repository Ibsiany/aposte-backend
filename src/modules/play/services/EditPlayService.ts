import { inject, injectable } from "tsyringe";
import { Play } from "../infra/typeorm/entities/Play";
import { IPlayRepository } from "../repositories/IPlayRepository";

  
@injectable()
export class EditPlayService {
  constructor(
    @inject('PlayRepository')
    private playRepository: IPlayRepository,
  ) {}

  async execute(id: string, result: string): Promise<Play> {
   
  }
}
