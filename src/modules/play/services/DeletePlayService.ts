import { inject, injectable } from "tsyringe";
import { IPlayRepository } from "../repositories/IPlayRepository";

  
@injectable()
export class DeletePlayService {
  constructor(
    @inject('PlayRepository')
    private playRepository: IPlayRepository,
  ) {}

  async execute(id: string): Promise<void> {
  }
}
