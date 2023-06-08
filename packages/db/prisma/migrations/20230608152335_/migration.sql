-- CreateEnum
CREATE TYPE "ChartTypes" AS ENUM ('all', 'year', 'month', 'week');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "defaultChart" "ChartTypes" NOT NULL DEFAULT 'year';
