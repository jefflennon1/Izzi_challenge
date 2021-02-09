import { Router } from "express";

const productRouter = Router();

productRouter.post('/product/sale/checkout/{id}', (request, response)=>{
  
  try{
     const { id } = request.params;
    
     
  }catch(error){
    return response.json({ ERROR: error.message });
  }

})


export default productRouter;