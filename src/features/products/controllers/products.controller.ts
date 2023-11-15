import { RequestHandler } from 'express';
import * as productsService from '../services/products.service';

export const getProducts: RequestHandler = async function (req, res) {
  const products = await productsService.getProducts();
  res.json(products);
};
