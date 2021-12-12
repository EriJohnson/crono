/*
  Warnings:

  - Added the required column `age` to the `member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "member" ADD COLUMN     "age" INTEGER NOT NULL,
ALTER COLUMN "birth_date" DROP NOT NULL;
