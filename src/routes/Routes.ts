import { Router } from "express";
import productRouter from "./product.router";

const routes = Router();


routes.use(productRouter);


export default routes;