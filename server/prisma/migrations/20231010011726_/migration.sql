/*
  Warnings:

  - You are about to drop the column `google_id` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "googleId" TEXT,
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
INSERT INTO "new_User" ("autorizacao_pesquisa", "avatarUrl", "createdAt", "email", "id", "matricula", "name", "pesquisaCompIdU", "pesquisaIdU", "tipo") SELECT "autorizacao_pesquisa", "avatarUrl", "createdAt", "email", "id", "matricula", "name", "pesquisaCompIdU", "pesquisaIdU", "tipo" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
