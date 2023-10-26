-- CreateTable
CREATE TABLE "Supermercado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "pesquisaIdS" TEXT
);

-- CreateTable
CREATE TABLE "PesquisaGeral" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mes_ano" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome_supermercado" TEXT NOT NULL,
    "carneBovina" INTEGER,
    "leiteIntegral" INTEGER,
    "feijaoCarioca" INTEGER,
    "arrozParboilizado" INTEGER,
    "farinhaMandioca" INTEGER,
    "tomate" INTEGER,
    "pao" INTEGER,
    "cafePo" INTEGER,
    "acucar" INTEGER,
    "banana" INTEGER,
    "oleoSoja" INTEGER,
    "manteiga" INTEGER
);

-- CreateTable
CREATE TABLE "PesquisaCompleta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "mes_ano" TEXT NOT NULL,
    "finalizado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome_supermercado" TEXT NOT NULL,
    "carneBovinaChaDentro" INTEGER,
    "carneBovinaChaFora" INTEGER,
    "carneBovinaPatinhoCoxaoMole" INTEGER,
    "carneBovina" INTEGER,
    "leiteIntegralValeDourado" INTEGER,
    "leiteIntegralPiracanjuba" INTEGER,
    "leiteIntegralSabugi" INTEGER,
    "leiteIntegral" INTEGER,
    "feijaoCariocaUrbano" INTEGER,
    "feijaoCariocaDuPrato" INTEGER,
    "feijaoCariocaCunhau" INTEGER,
    "feijaoCarioca" INTEGER,
    "arrozParboilizadoChines" INTEGER,
    "arrozParboilizadoFortelli" INTEGER,
    "arrozParboilizadoUrbano" INTEGER,
    "arrozParboilizado" INTEGER,
    "farinhaMandiocaQuentinha" INTEGER,
    "farinhaMandiocaCurimatau" INTEGER,
    "farinhaMandiocaDuPrato" INTEGER,
    "farinhaMandioca" INTEGER,
    "tomate" INTEGER,
    "pao" INTEGER,
    "cafePoSaoBraz" INTEGER,
    "cafePoSantaClara" INTEGER,
    "cafePoNordestino" INTEGER,
    "cafePo" INTEGER,
    "acucarNectar" INTEGER,
    "acucarPuroMel" INTEGER,
    "acucar" INTEGER,
    "bananaPrata" INTEGER,
    "bananaPacovan" INTEGER,
    "banana" INTEGER,
    "oleoSojaSoya" INTEGER,
    "oleoSojaPrimor" INTEGER,
    "oleoSoja" INTEGER,
    "manteigaSaborosa" INTEGER,
    "manteigaJucurutu" INTEGER,
    "manteigaTerra" INTEGER,
    "manteiga" INTEGER,
    "userId" TEXT,
    "PesquisaGeral_id" TEXT,
    CONSTRAINT "PesquisaCompleta_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "PesquisaCompleta_PesquisaGeral_id_fkey" FOREIGN KEY ("PesquisaGeral_id") REFERENCES "PesquisaGeral" ("id") ON DELETE SET NULL ON UPDATE CASCADE
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
    "PesProdPr" TEXT,
    CONSTRAINT "Produto_PesProdPr_fkey" FOREIGN KEY ("PesProdPr") REFERENCES "PesProd" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "email" TEXT NOT NULL,
    "googleId" TEXT,
    "matricula" TEXT,
    "avatarUrl" TEXT,
    "autorizacao_pesquisa" BOOLEAN NOT NULL DEFAULT false,
    "tipo" TEXT NOT NULL DEFAULT 'Aluno',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");
