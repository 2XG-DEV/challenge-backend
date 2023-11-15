import { AbstractPaymentProcessor } from './interfaces/IPaymentProcessor';

export class StripePaymentProcessor extends AbstractPaymentProcessor {
  async processPayment(orderId: number, paymentDetails: any): Promise<void> {
    console.log(
      'StripePaymentProcessor.processPayment()',
      orderId,
      paymentDetails,
    );
  }

  async refundPayment(orderId: number): Promise<void> {
    console.log('StripePaymentProcessor.refundPayment()', orderId);
  }
}
