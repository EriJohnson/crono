-- CreateEnum
CREATE TYPE "Club" AS ENUM ('URSINHOS', 'FAISCA', 'FLAMA', 'TOCHA', 'JV', 'GQ7');

-- CreateTable
CREATE TABLE "Member" (
    "id" UUID NOT NULL,
    "full_name" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "mother_name" TEXT,
    "father_name" TEXT,
    "phone" TEXT,
    "street" TEXT,
    "city" TEXT,
    "neighborhood" TEXT,
    "zip_code" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "club" "Club" NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
