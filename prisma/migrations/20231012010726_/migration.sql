-- CreateTable
CREATE TABLE "PesquisaCompleta" (
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
    "manteiga" INTEGER
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricula" TEXT,
    "avatarUrl" TEXT,
    "autorizacao_pesquisa" BOOLEAN NOT NULL DEFAULT false,
    "tipo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pesquisaIdU" TEXT,
    "pesquisaCompIdU" TEXT,
    CONSTRAINT "User_pesquisaIdU_fkey" FOREIGN KEY ("pesquisaIdU") REFERENCES "Pesquisa" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_pesquisaCompIdU_fkey" FOREIGN KEY ("pesquisaCompIdU") REFERENCES "PesquisaCompleta" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("autorizacao_pesquisa", "avatarUrl", "createdAt", "email", "id", "matricula", "name", "pesquisaIdU", "tipo") SELECT "autorizacao_pesquisa", "avatarUrl", "createdAt", "email", "id", "matricula", "name", "pesquisaIdU", "tipo" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
