import * as paymentService from '../services/payment.service';
import { Request, Response } from 'express';

export const processPayment = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { orderId, paymentDetails } = req.body;
  if (!orderId || !paymentDetails) {
    res.status(400).send('Bad Request');
  }

  await paymentService.processPayment(orderId, paymentDetails);

  res.status(200).send('OK');
};
