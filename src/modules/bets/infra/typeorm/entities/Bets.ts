import { Play } from "@modules/play/infra/typeorm/entities/Play";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('bets')
export class Bets{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    type: string;

    @Column()
    value: string;

    @Column()
    id_play: string;
  
    @ManyToOne(
        () => Play,
        play => play.bets,
      )
    @JoinColumn({ name: 'id_play' })
    play: Play;

    @Column()
    id_user: string;

    @ManyToOne(
        () => User,
        user => user.bets,
      )
    @JoinColumn({ name: 'id_user' })
    user: User;
}