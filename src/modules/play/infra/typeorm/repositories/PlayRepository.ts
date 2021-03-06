import { ICreatePlayDTO } from "@modules/play/dtos/ICreatePlayDTO";
import { IPlayRepository } from "@modules/play/repositories/IPlayRepository";
import { getRepository, Repository, IsNull, Not } from "typeorm";
import { Play } from "../entities/Play";

export class PlayRepository implements IPlayRepository {
    private ormRepository: Repository<Play>;

    constructor() {
      this.ormRepository = getRepository(Play);
    }
  
    async create(
      new_play: ICreatePlayDTO,
    ): Promise<Play> {
      const play = this.ormRepository.create(new_play);
  
      return this.ormRepository.save(play);
    }
  
    async update(
      play: Play,
    ): Promise<Play> {
      return this.ormRepository.save(play);
    }
  
    async findById(
      id: string,
    ): Promise<Play> {  
      return this.ormRepository.findOne({where: {id}});
    }
  
    async findByIdPlay(
      id: string,
    ): Promise<Play> {  
      return this.ormRepository.findOne({
        where: { id },
        relations: ['bets']
      });
    }
  
    async findOnline(): Promise<Play[]> {  
      return this.ormRepository.find({where: {result: IsNull()}});
    }

    async findResults(): Promise<Play[]> {  
      return this.ormRepository.find({where: {result: Not(IsNull())}});
    }
  
    async delete(
      play: Play,
    ): Promise<void> {  
      await this.ormRepository.remove(play);
    }
}