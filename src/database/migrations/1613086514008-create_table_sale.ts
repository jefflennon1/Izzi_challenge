import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class createTableSale1613086514008 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new Table({
            name: 'sale',
            columns:[
                {
                    name: 'id',
                    type: 'varchar',
                    generationStrategy: 'uuid',
                    // isPrimary: true,
                    // isUnique: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'total_cache',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'product',
                    type: 'varchar'
                }
            ],
        }));
        await queryRunner.createTable(new Table({
            name: 'product',
            columns: [
                {
                    name: 'product_id',
                    type: 'varchar',
                    isNullable: false,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                    isUnique: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'cost',
                    type: 'integer',
                    isNullable: false,
                }
            ]
        }));



        
        await queryRunner.createForeignKey('sale', new TableForeignKey({
            name: 'SaleProduct',
            columnNames: ['product'],
            referencedColumnNames: ['product_id'],
            referencedTableName: 'product',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sale');
        await queryRunner.dropTable('product');
        await queryRunner.dropForeignKey('sale','SaleProduct');
    }

}
