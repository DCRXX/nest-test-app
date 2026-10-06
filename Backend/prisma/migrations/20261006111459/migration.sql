-- DropForeignKey
ALTER TABLE "experience" DROP CONSTRAINT "experience_profileId_fkey";

-- DropForeignKey
ALTER TABLE "project" DROP CONSTRAINT "project_profileId_fkey";

-- DropForeignKey
ALTER TABLE "skills" DROP CONSTRAINT "skills_profileId_fkey";

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
