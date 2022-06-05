import { ICreateBetsDTO } from "@modules/bets/dtos/ICreateBetsDTO";
import { IBetsRepository } from "@modules/bets/repositories/IBetsRepository";
import { getRepository, IsNull, Repository } from "typeorm";
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
    return this.ormRepository.findOne({
      where: { id },
      relations: ['play']
    });
  }

  
  async findByType(type:string): Promise<Bets[]> {  
    return this.ormRepository
      .createQueryBuilder('bets')
      .leftJoinAndSelect('bets.play', 'play')
      .where('play.result IS NULL')
      .andWhere('bets.type = :type', {type}) 
      .getMany();
  }


  async findByUserId(
    id_user: string,
  ): Promise<Bets[]> {  
    return this.ormRepository.find({
      where: { id_user },
      relations: ['play']
    });
  }

  async delete(
    bets: Bets,
  ): Promise<void> {  
    await this.ormRepository.remove(bets);
  }
}