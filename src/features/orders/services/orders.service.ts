import { Order } from '@prisma/client';
import db from '../../persistance/db';

export const createOrder = async (
  order: Order,
  paymentProcessorId: number,
): Promise<void> => {
  await db.order.create({
    data: {
      ...order,
      paymentProcessorId,
    },
  });
};
