-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Supermercado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "pesquisaIdS" TEXT,
    CONSTRAINT "Supermercado_pesquisaIdS_fkey" FOREIGN KEY ("pesquisaIdS") REFERENCES "Pesquisa" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Supermercado" ("id", "name", "pesquisaIdS") SELECT "id", "name", "pesquisaIdS" FROM "Supermercado";
DROP TABLE "Supermercado";
ALTER TABLE "new_Supermercado" RENAME TO "Supermercado";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
