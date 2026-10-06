/*
  Warnings:

  - The `links` column on the `profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `link` column on the `project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "links";
ALTER TABLE "profile" ADD COLUMN     "links" STRING[];

-- AlterTable
ALTER TABLE "project" DROP COLUMN "link";
ALTER TABLE "project" ADD COLUMN     "link" STRING[];
