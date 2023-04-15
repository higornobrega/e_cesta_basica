/*
  Warnings:

  - You are about to drop the column `pesquisaIdP` on the `Produto` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "peso_qtd" TEXT NOT NULL,
    "tipo_qtd" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "PesProdPr" TEXT,
    CONSTRAINT "Produto_PesProdPr_fkey" FOREIGN KEY ("PesProdPr") REFERENCES "PesProd" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Produto" ("PesProdPr", "id", "name", "peso_qtd", "preco", "tipo_qtd") SELECT "PesProdPr", "id", "name", "peso_qtd", "preco", "tipo_qtd" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
