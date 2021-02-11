import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Product from './productModel';

@Entity('sale')
export default class saleModel{
  
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column('total_cache')
  totalCash: number;

  @ManyToMany(()=>Product)
  @JoinColumn({name: 'product_id'})
  product: Product;
  
}