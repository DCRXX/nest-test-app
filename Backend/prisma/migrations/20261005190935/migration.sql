/*
  Warnings:

  - Added the required column `profileId` to the `experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "experience" ADD COLUMN     "profileId" STRING NOT NULL;

-- AlterTable
ALTER TABLE "project" ADD COLUMN     "profileId" STRING NOT NULL;

-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "profileId" STRING;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
