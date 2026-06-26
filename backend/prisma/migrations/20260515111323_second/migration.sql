/*
  Warnings:

  - You are about to drop the column `Analyzed` on the `Check` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Check" DROP COLUMN "Analyzed";

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "lump" TEXT NOT NULL,
    "pain" TEXT NOT NULL,
    "different" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
