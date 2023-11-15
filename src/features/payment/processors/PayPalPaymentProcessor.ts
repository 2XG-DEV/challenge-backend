import { AbstractPaymentProcessor } from './interfaces/IPaymentProcessor';

export class PayPalPaymentProcessor extends AbstractPaymentProcessor {
  async processPayment(orderId: number, paymentDetails: any): Promise<void> {
    console.log('PayPalProcessor.processPayment()', orderId, paymentDetails);
  }

  async refundPayment(orderId: number): Promise<void> {
    console.log('PayPalProcessor.refundPayment()', orderId);
  }
}
