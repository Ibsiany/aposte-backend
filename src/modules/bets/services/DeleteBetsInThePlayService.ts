import { inject, injectable } from "tsyringe";
import { IBetsRepository } from "../repositories/IBetsRepository";

  
@injectable()
export class DeleteBetsInThePlayService {
  constructor(
    @inject('BetsRepository')
    private betsRepository: IBetsRepository,
  ) {}

  async execute(id: string): Promise<void> {
  }
}
