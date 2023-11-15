import * as express from 'express';
import { getProducts } from './features/products/controllers/products.controller';
import { createOrder } from './features/orders/controllers/orders.controllers';
import { processPayment } from './features/payment/controllers/payment.controller';

/**
 * Bootstrap the application framework
 */
export function createApp(): express.Express {
  const app = express();

  app.use(express.json());

  app.get('/products', getProducts);
  app.post('/orders', createOrder);
  app.post('/process-payment', processPayment);

  return app;
}
