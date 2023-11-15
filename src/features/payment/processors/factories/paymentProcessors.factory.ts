import { BraintreePaymentProcessor } from '../BraintreePaymentProcessor';
import { AbstractPaymentProcessor } from '../interfaces/IPaymentProcessor';
import { PayPalPaymentProcessor } from '../PayPalPaymentProcessor';
import { StripePaymentProcessor } from '../StripePaymentProcessor';

export class PaymentProcessorFactory {
  static getPaymentProcessor(processorName: string): AbstractPaymentProcessor {
    switch (processorName) {
      case 'Stripe':
        return new StripePaymentProcessor();
      case 'Braintree':
        return new BraintreePaymentProcessor();
      case 'PayPal':
        return new PayPalPaymentProcessor();
      default:
        throw new Error('Unknown payment processor');
    }
  }
}
