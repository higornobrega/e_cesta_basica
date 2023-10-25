-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pesquisa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mes_ano" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "PesProdIdPes" TEXT,
    CONSTRAINT "Pesquisa_PesProdIdPes_fkey" FOREIGN KEY ("PesProdIdPes") REFERENCES "PesProd" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pesquisa" ("PesProdIdPes", "createdAt", "id", "mes_ano") SELECT "PesProdIdPes", "createdAt", "id", "mes_ano" FROM "Pesquisa";
DROP TABLE "Pesquisa";
ALTER TABLE "new_Pesquisa" RENAME TO "Pesquisa";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
