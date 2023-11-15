import { Product } from '@prisma/client';
import db from '../../persistance/db';

const getProducts = async (): Promise<Product[]> => {
  const products = await db.product.findMany();
  return products as Product[];
};

export { getProducts };
