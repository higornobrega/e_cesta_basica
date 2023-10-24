-- CreateTable
CREATE TABLE "Supermercado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "pesquisaIdS" TEXT NOT NULL,
    CONSTRAINT "Supermercado_pesquisaIdS_fkey" FOREIGN KEY ("pesquisaIdS") REFERENCES "Pesquisa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pesquisa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mes_ano" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "PesProdIdPes" TEXT NOT NULL,
    CONSTRAINT "Pesquisa_PesProdIdPes_fkey" FOREIGN KEY ("PesProdIdPes") REFERENCES "PesProd" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PesProd" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "peso_qtd" TEXT NOT NULL,
    "tipo_qtd" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "pesquisaIdP" TEXT,
    "PesProdPr" TEXT NOT NULL,
    CONSTRAINT "Produto_PesProdPr_fkey" FOREIGN KEY ("PesProdPr") REFERENCES "PesProd" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pesquisaIdU" TEXT NOT NULL,
    CONSTRAINT "User_pesquisaIdU_fkey" FOREIGN KEY ("pesquisaIdU") REFERENCES "Pesquisa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
