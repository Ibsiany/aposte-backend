import { container } from 'tsyringe';
import { IUserRepository } from '../../../../../modules/users/repositories/IUserRepository';
import { UserRepository } from '../../../../../modules/users/infra/typeorm/repositories/UserRepository';
import { IPlayRepository } from '@modules/play/repositories/IPlayRepository';
import { PlayRepository } from '@modules/play/infra/typeorm/repositories/PlayRepository';
import { IBetsRepository } from '@modules/bets/repositories/IBetsRepository';
import { BetsRepository } from '@modules/bets/infra/typeorm/repositories/BetsRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository,
);
  

container.registerSingleton<IPlayRepository>(
  'PlayRepository',
  PlayRepository,
);
  

container.registerSingleton<IBetsRepository>(
  'BetsRepository',
  BetsRepository,
);
  
  