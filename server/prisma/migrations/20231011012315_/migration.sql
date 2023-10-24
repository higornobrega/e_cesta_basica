/*
  Warnings:

  - You are about to drop the column `pesquisaCompIdU` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PesquisaCompleta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mes_ano" TEXT NOT NULL,
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
    CONSTRAINT "PesquisaCompleta_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_PesquisaCompleta" ("acucar", "acucarNectar", "acucarPuroMel", "arrozParboilizado", "arrozParboilizadoChines", "arrozParboilizadoFortelli", "arrozParboilizadoUrbano", "banana", "bananaPacovan", "bananaPrata", "cafePo", "cafePoNordestino", "cafePoSantaClara", "cafePoSaoBraz", "carneBovina", "carneBovinaChaDentro", "carneBovinaChaFora", "carneBovinaPatinhoCoxaoMole", "createdAt", "farinhaMandioca", "farinhaMandiocaCurimatau", "farinhaMandiocaDuPrato", "farinhaMandiocaQuentinha", "feijaoCarioca", "feijaoCariocaCunhau", "feijaoCariocaDuPrato", "feijaoCariocaUrbano", "id", "leiteIntegral", "leiteIntegralPiracanjuba", "leiteIntegralSabugi", "leiteIntegralValeDourado", "manteiga", "manteigaJucurutu", "manteigaSaborosa", "manteigaTerra", "mes_ano", "nome_supermercado", "oleoSoja", "oleoSojaPrimor", "oleoSojaSoya", "pao", "tomate") SELECT "acucar", "acucarNectar", "acucarPuroMel", "arrozParboilizado", "arrozParboilizadoChines", "arrozParboilizadoFortelli", "arrozParboilizadoUrbano", "banana", "bananaPacovan", "bananaPrata", "cafePo", "cafePoNordestino", "cafePoSantaClara", "cafePoSaoBraz", "carneBovina", "carneBovinaChaDentro", "carneBovinaChaFora", "carneBovinaPatinhoCoxaoMole", "createdAt", "farinhaMandioca", "farinhaMandiocaCurimatau", "farinhaMandiocaDuPrato", "farinhaMandiocaQuentinha", "feijaoCarioca", "feijaoCariocaCunhau", "feijaoCariocaDuPrato", "feijaoCariocaUrbano", "id", "leiteIntegral", "leiteIntegralPiracanjuba", "leiteIntegralSabugi", "leiteIntegralValeDourado", "manteiga", "manteigaJucurutu", "manteigaSaborosa", "manteigaTerra", "mes_ano", "nome_supermercado", "oleoSoja", "oleoSojaPrimor", "oleoSojaSoya", "pao", "tomate" FROM "PesquisaCompleta";
DROP TABLE "PesquisaCompleta";
ALTER TABLE "new_PesquisaCompleta" RENAME TO "PesquisaCompleta";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "googleId" TEXT,
    "matricula" TEXT,
    "avatarUrl" TEXT,
    "autorizacao_pesquisa" BOOLEAN NOT NULL DEFAULT false,
    "tipo" TEXT NOT NULL DEFAULT 'Aluno',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pesquisaIdU" TEXT,
    CONSTRAINT "User_pesquisaIdU_fkey" FOREIGN KEY ("pesquisaIdU") REFERENCES "Pesquisa" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("autorizacao_pesquisa", "avatarUrl", "createdAt", "email", "googleId", "id", "matricula", "name", "pesquisaIdU", "tipo") SELECT "autorizacao_pesquisa", "avatarUrl", "createdAt", "email", "googleId", "id", "matricula", "name", "pesquisaIdU", "tipo" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
