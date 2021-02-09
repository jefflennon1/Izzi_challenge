
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
class Product{

  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column()
  name: string;


  @Column()
  cost: number;

}

export default Product;