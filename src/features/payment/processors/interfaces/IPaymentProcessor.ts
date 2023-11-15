/* eslint-disable no-unused-vars */
export abstract class AbstractPaymentProcessor {
  abstract processPayment(orderId: number, paymentDetails: any): Promise<void>;
  abstract refundPayment(orderId: number): Promise<void>;
}
