import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('play')
export class Play{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    team_a: string;

    @Column()
    team_b: string;

    @Column({nullable: true})
    result: string;
}