/*
  Warnings:

  - Added the required column `pesquisaIdS` to the `Supermercado` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Pesquisa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mes" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "peso_qtd" TEXT NOT NULL,
    "tipo_qtd" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "pesquisaIdP" TEXT NOT NULL,
    CONSTRAINT "Produto_pesquisaIdP_fkey" FOREIGN KEY ("pesquisaIdP") REFERENCES "Pesquisa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" TEXT,
    "avatarUrl" TEXT,
    "autorizacao_pesquisa" BOOLEAN NOT NULL DEFAULT false,
    "tipo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "_PesquisaToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PesquisaToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Pesquisa" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PesquisaToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Supermercado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "pesquisaIdS" TEXT NOT NULL,
    CONSTRAINT "Supermercado_pesquisaIdS_fkey" FOREIGN KEY ("pesquisaIdS") REFERENCES "Pesquisa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Supermercado" ("id", "name") SELECT "id", "name" FROM "Supermercado";
DROP TABLE "Supermercado";
ALTER TABLE "new_Supermercado" RENAME TO "Supermercado";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PesquisaToUser_AB_unique" ON "_PesquisaToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PesquisaToUser_B_index" ON "_PesquisaToUser"("B");
