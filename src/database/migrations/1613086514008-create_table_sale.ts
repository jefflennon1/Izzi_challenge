import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class createTableSale1613086514008 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'sale',
            columns:[
                {
                    name: 'id',
                    type: 'varchar',
                    default: 'uuid_generate_v4()',
                    generationStrategy: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'total_cache',
                    type: 'integer',
                    isNullable: false,
                }
            ]
        
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
