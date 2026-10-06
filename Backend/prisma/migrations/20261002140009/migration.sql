/*
  Warnings:

  - You are about to drop the `skillsLevel` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `skillsLevel` to the `skills` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "skillsLevel" DROP CONSTRAINT "skillsLevel_skillsId_fkey";

-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "skillsLevel" "level" NOT NULL;

-- DropTable
DROP TABLE "skillsLevel";
