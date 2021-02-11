import { getRepository } from "typeorm";
import Product from "../models/productModel";
import saleModel from "../models/saleModel";

interface Request{
  id: string;
  discount: number;
}
export default class createProductSale{
    async execute({id, discount }:Request):Promise<saleModel | undefined>{
      
      const productRepository = getRepository(Product);

      const product = await productRepository.findOne({
        where: {id},
      });
      if(!product){
        throw new Error("Product not found!");
      }

      // aplica o desconto;
      if(discount){
        product.cost - discount;
      }

      const saleRepository = getRepository(saleModel);
      const sale = await saleRepository.create({
        totalCash: product.cost,
        product: product,
      })

      saleRepository.save(sale);
      return sale;
    }
}