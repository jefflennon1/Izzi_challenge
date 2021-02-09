import { EntityRepository, Repository } from "typeorm";
import Product from "../models/productModel";


@EntityRepository(Product)
class ProductRepository extends  Repository<Product>{

}