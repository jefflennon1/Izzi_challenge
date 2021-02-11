
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
class Product{

  @PrimaryGeneratedColumn('uuid')
  product_id: string;


  @Column()
  name: string;


  @Column()
  cost: number;

}

export default Product;