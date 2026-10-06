/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "level" AS ENUM ('Базовый', 'Средний', 'Продвинутый');

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "profile" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "description" STRING NOT NULL,
    "links" STRING NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skillsLevel" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "level" "level" NOT NULL,
    "skillsId" INT8 NOT NULL,

    CONSTRAINT "skillsLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "company" STRING NOT NULL,
    "position" STRING NOT NULL,
    "periodOfEmployment" STRING NOT NULL,
    "achievements" STRING NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "link" STRING NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "skillsLevel" ADD CONSTRAINT "skillsLevel_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
