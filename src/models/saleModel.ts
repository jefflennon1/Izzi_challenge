import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sale')
export default class saleModel{
  
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column('total_cache')
  totalCash: number;
  
}