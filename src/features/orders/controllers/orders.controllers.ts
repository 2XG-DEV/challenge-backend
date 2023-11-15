import { RequestHandler } from 'express';
import * as ordersService from '../services/orders.service';

export const createOrder: RequestHandler = async function (req, res) {
  const { order, processorId } = req.body;
  if (!order || !processorId) {
    res.status(400).send('Bad Request');
  }
  await ordersService.createOrder(order, processorId);
  res.status(200).send('OK');
};
