/*
  Warnings:

  - You are about to drop the column `caraHoraria` on the `curso` table. All the data in the column will be lost.
  - Added the required column `cargaHoraria` to the `curso` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cargaHoraria" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL
);
INSERT INTO "new_curso" ("descricao", "id", "nome") SELECT "descricao", "id", "nome" FROM "curso";
DROP TABLE "curso";
ALTER TABLE "new_curso" RENAME TO "curso";
CREATE UNIQUE INDEX "curso_nome_key" ON "curso"("nome");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
