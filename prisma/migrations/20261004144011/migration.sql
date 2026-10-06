/*
  Warnings:

  - The values [Базовый,Средний,Продвинутый] on the enum `level` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
ALTER TYPE "level" ADD VALUE 'BASIC';
ALTER TYPE "level" ADD VALUE 'MEDIUM';
ALTER TYPE "level" ADD VALUE 'ADVANCED';
ALTER TYPE "level"DROP VALUE 'Базовый';
ALTER TYPE "level"DROP VALUE 'Средний';
ALTER TYPE "level"DROP VALUE 'Продвинутый';
