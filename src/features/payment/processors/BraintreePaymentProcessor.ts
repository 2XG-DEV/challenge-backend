import { AbstractPaymentProcessor } from './interfaces/IPaymentProcessor';

export class BraintreePaymentProcessor extends AbstractPaymentProcessor {
  async processPayment(orderId: number, paymentDetails: any): Promise<void> {
    console.log(
      'BraintreePaymentProcessor.processPayment()',
      orderId,
      paymentDetails,
    );
  }

  async refundPayment(orderId: number): Promise<void> {
    console.log('BraintreePaymentProcessor.refundPayment()', orderId);
  }
}
