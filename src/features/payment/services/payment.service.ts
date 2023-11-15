import db from '../../persistance/db';
import { PaymentProcessorFactory } from '../processors/factories/paymentProcessors.factory';

export const processPayment = async (
  orderId: number,
  paymentDetails: any,
): Promise<void> => {
  const order = await db.order.findUnique({
    where: { id: orderId },
    include: { PaymentProcessor: true },
  });

  if (!order) {
    throw new Error('Order not found');
  }

  const paymentProcessor = PaymentProcessorFactory.getPaymentProcessor(
    order.PaymentProcessor.name,
  );

  await paymentProcessor.processPayment(orderId, paymentDetails);
};
