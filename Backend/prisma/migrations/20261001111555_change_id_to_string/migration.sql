/*
  Warnings:

  - You are about to alter the column `id` on the `experience` table. The data in that column will be cast from `BigInt` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `id` on the `profile` table. The data in that column will be cast from `BigInt` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `id` on the `project` table. The data in that column will be cast from `BigInt` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `id` on the `skills` table. The data in that column will be cast from `BigInt` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `id` on the `skillsLevel` table. The data in that column will be cast from `BigInt` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `skillsId` on the `skillsLevel` table. The data in that column will be cast from `BigInt` to `String`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_experience" (
    "id" STRING NOT NULL,
    "company" STRING NOT NULL,
    "position" STRING NOT NULL,
    "periodOfEmployment" STRING NOT NULL,
    "achievements" STRING NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_experience" ("achievements","company","id","periodOfEmployment","position") SELECT "achievements","company","id","periodOfEmployment","position" FROM "experience";
DROP TABLE "public"."experience" CASCADE;
ALTER TABLE "_prisma_new_experience" RENAME TO "experience";
CREATE TABLE "_prisma_new_profile" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "description" STRING NOT NULL,
    "links" STRING[],

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_profile" ("description","id","links","name") SELECT "description","id","links","name" FROM "profile";
DROP TABLE "public"."profile" CASCADE;
ALTER TABLE "_prisma_new_profile" RENAME TO "profile";
CREATE TABLE "_prisma_new_project" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "link" STRING[],

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_project" ("id","link","name") SELECT "id","link","name" FROM "project";
DROP TABLE "public"."project" CASCADE;
ALTER TABLE "_prisma_new_project" RENAME TO "project";
CREATE TABLE "_prisma_new_skills" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_skills" ("id","name") SELECT "id","name" FROM "skills";
DROP TABLE "public"."skills" CASCADE;
ALTER TABLE "_prisma_new_skills" RENAME TO "skills";
CREATE TABLE "_prisma_new_skillsLevel" (
    "id" STRING NOT NULL,
    "level" "level" NOT NULL,
    "skillsId" STRING NOT NULL,

    CONSTRAINT "skillsLevel_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_skillsLevel" ("id","level","skillsId") SELECT "id","level","skillsId" FROM "skillsLevel";
DROP TABLE "public"."skillsLevel" CASCADE;
ALTER TABLE "_prisma_new_skillsLevel" RENAME TO "skillsLevel";
ALTER TABLE "skillsLevel" ADD CONSTRAINT "skillsLevel_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
