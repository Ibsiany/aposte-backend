import { Bets } from "@modules/bets/infra/typeorm/entities/Bets";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: 0 })
    point: number;

    @OneToMany(
    () => Bets,
    bets => bets.user,
    )
    bets: Bets[];
}