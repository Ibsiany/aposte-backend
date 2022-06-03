import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTable1654260379159 implements MigrationInterface {
    name = 'CreateTable1654260379159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "play" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "team_a" character varying NOT NULL, "team_b" character varying NOT NULL, "result" character varying, CONSTRAINT "PK_78bc0ac5050cc1068217341a73e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL, "value" character varying NOT NULL, "id_play" uuid NOT NULL, "id_user" uuid NOT NULL, CONSTRAINT "PK_7ca91a6a39623bd5c21722bcedd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "point" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "bets" ADD CONSTRAINT "FK_7f1a05a6cfca6bf5539dec02b45" FOREIGN KEY ("id_play") REFERENCES "play"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bets" ADD CONSTRAINT "FK_e19ffda3b1e7ae5a0c88973aa7d" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bets" DROP CONSTRAINT "FK_e19ffda3b1e7ae5a0c88973aa7d"`);
        await queryRunner.query(`ALTER TABLE "bets" DROP CONSTRAINT "FK_7f1a05a6cfca6bf5539dec02b45"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "point"`);
        await queryRunner.query(`DROP TABLE "bets"`);
        await queryRunner.query(`DROP TABLE "play"`);
    }

}
