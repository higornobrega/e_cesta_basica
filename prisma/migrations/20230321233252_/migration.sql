/*
  Warnings:

  - Made the column `name` on table `Supermercado` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Supermercado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "pesquisaIdS" TEXT,
    CONSTRAINT "Supermercado_pesquisaIdS_fkey" FOREIGN KEY ("pesquisaIdS") REFERENCES "Pesquisa" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Supermercado" ("id", "name", "pesquisaIdS") SELECT "id", "name", "pesquisaIdS" FROM "Supermercado";
DROP TABLE "Supermercado";
ALTER TABLE "new_Supermercado" RENAME TO "Supermercado";
CREATE TABLE "new_Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "peso_qtd" TEXT NOT NULL,
    "tipo_qtd" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "pesquisaIdP" TEXT,
    "PesProdPr" TEXT,
    CONSTRAINT "Produto_PesProdPr_fkey" FOREIGN KEY ("PesProdPr") REFERENCES "PesProd" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Produto" ("PesProdPr", "id", "name", "peso_qtd", "pesquisaIdP", "preco", "tipo_qtd") SELECT "PesProdPr", "id", "name", "peso_qtd", "pesquisaIdP", "preco", "tipo_qtd" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
