import { MigrationInterface, QueryRunner } from "typeorm";

export class Photo1690938762710 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE photo CHANGE name nameaftermigrate VARCHAR(100)`
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE photo CHANGE nameaftermigrate name VARCHAR(100)`
    );
  }
}
