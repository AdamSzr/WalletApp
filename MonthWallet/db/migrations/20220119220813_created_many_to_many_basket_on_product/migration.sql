/*
  Warnings:

  - Added the required column `description` to the `Basket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Basket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Basket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "BasketOnProduct" (
    "productId" INTEGER NOT NULL,
    "basketId" INTEGER NOT NULL,

    PRIMARY KEY ("basketId", "productId"),
    CONSTRAINT "BasketOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BasketOnProduct_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES "Basket" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Basket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "totalPrice" DECIMAL NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Basket" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "Basket";
DROP TABLE "Basket";
ALTER TABLE "new_Basket" RENAME TO "Basket";
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("createdAt", "description", "id", "name", "price", "updatedAt") SELECT "createdAt", "description", "id", "name", "price", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
