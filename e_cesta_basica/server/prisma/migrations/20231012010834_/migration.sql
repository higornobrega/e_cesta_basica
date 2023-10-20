-- CreateTable
CREATE TABLE "PesquisaGeral" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mes_ano" TEXT NOT NULL,
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
    "PesquisaGeral_id" TEXT,
    CONSTRAINT "PesquisaCompleta_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "PesquisaCompleta_PesquisaGeral_id_fkey" FOREIGN KEY ("PesquisaGeral_id") REFERENCES "PesquisaGeral" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_PesquisaCompleta" ("acucar", "acucarNectar", "acucarPuroMel", "arrozParboilizado", "arrozParboilizadoChines", "arrozParboilizadoFortelli", "arrozParboilizadoUrbano", "banana", "bananaPacovan", "bananaPrata", "cafePo", "cafePoNordestino", "cafePoSantaClara", "cafePoSaoBraz", "carneBovina", "carneBovinaChaDentro", "carneBovinaChaFora", "carneBovinaPatinhoCoxaoMole", "createdAt", "farinhaMandioca", "farinhaMandiocaCurimatau", "farinhaMandiocaDuPrato", "farinhaMandiocaQuentinha", "feijaoCarioca", "feijaoCariocaCunhau", "feijaoCariocaDuPrato", "feijaoCariocaUrbano", "id", "leiteIntegral", "leiteIntegralPiracanjuba", "leiteIntegralSabugi", "leiteIntegralValeDourado", "manteiga", "manteigaJucurutu", "manteigaSaborosa", "manteigaTerra", "mes_ano", "nome_supermercado", "oleoSoja", "oleoSojaPrimor", "oleoSojaSoya", "pao", "tomate", "userId") SELECT "acucar", "acucarNectar", "acucarPuroMel", "arrozParboilizado", "arrozParboilizadoChines", "arrozParboilizadoFortelli", "arrozParboilizadoUrbano", "banana", "bananaPacovan", "bananaPrata", "cafePo", "cafePoNordestino", "cafePoSantaClara", "cafePoSaoBraz", "carneBovina", "carneBovinaChaDentro", "carneBovinaChaFora", "carneBovinaPatinhoCoxaoMole", "createdAt", "farinhaMandioca", "farinhaMandiocaCurimatau", "farinhaMandiocaDuPrato", "farinhaMandiocaQuentinha", "feijaoCarioca", "feijaoCariocaCunhau", "feijaoCariocaDuPrato", "feijaoCariocaUrbano", "id", "leiteIntegral", "leiteIntegralPiracanjuba", "leiteIntegralSabugi", "leiteIntegralValeDourado", "manteiga", "manteigaJucurutu", "manteigaSaborosa", "manteigaTerra", "mes_ano", "nome_supermercado", "oleoSoja", "oleoSojaPrimor", "oleoSojaSoya", "pao", "tomate", "userId" FROM "PesquisaCompleta";
DROP TABLE "PesquisaCompleta";
ALTER TABLE "new_PesquisaCompleta" RENAME TO "PesquisaCompleta";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;