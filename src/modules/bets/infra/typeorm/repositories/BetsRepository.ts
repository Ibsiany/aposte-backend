import { ICreateBetsDTO } from "@modules/bets/dtos/ICreateBetsDTO";
import { IBetsRepository } from "@modules/bets/repositories/IBetsRepository";
import { getRepository, Repository } from "typeorm";
import { Bets } from "../entities/Bets";

export class BetsRepository implements IBetsRepository {
  private ormRepository: Repository<Bets>;

  constructor() {
    this.ormRepository = getRepository(Bets);
  }

  async create(
    new_bets: ICreateBetsDTO,
  ): Promise<Bets> {
    const bets = this.ormRepository.create(new_bets);

    return this.ormRepository.save(bets);
  }

  async update(
    bets: Bets,
  ): Promise<Bets> {
    return this.ormRepository.save(bets);
  }

  async findById(
    id: string,
  ): Promise<Bets> {  
    return this.ormRepository.findOne({where: {id}});
  }

  async findByUserId(
    user_id: string,
  ): Promise<Bets> {  
    return this.ormRepository.findOne({where: {user_id}});
  }

  async delete(
    bets: Bets,
  ): Promise<void> {  
    await this.ormRepository.remove(bets);
  }
}