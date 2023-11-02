-- AlterTable
ALTER TABLE "PesquisaCompleta" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nome_pesquisador" TEXT;

-- AlterTable
ALTER TABLE "PesquisaGeral" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nome_pesquisador" TEXT;
