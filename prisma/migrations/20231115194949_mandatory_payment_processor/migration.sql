/*
  Warnings:

  - Made the column `paymentProcessorId` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "total" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "shippingProviderId" INTEGER,
    "paymentProcessorId" INTEGER NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_shippingProviderId_fkey" FOREIGN KEY ("shippingProviderId") REFERENCES "ShippingProvider" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Order_paymentProcessorId_fkey" FOREIGN KEY ("paymentProcessorId") REFERENCES "PaymentProcessor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("createdAt", "id", "paymentProcessorId", "shippingProviderId", "status", "total", "updatedAt", "userId") SELECT "createdAt", "id", "paymentProcessorId", "shippingProviderId", "status", "total", "updatedAt", "userId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
