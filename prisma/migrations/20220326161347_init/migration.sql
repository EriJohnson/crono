-- CreateEnum
CREATE TYPE "Club" AS ENUM ('URSINHOS', 'FAISCA', 'FLAMA', 'TOCHA', 'JV', 'GQ7');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'DEACON', 'DIRECTOR', 'LEADER');

-- CreateTable
CREATE TABLE "member" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "birth_date" TIMESTAMP(3),
    "mother_name" TEXT,
    "father_name" TEXT,
    "phone" TEXT,
    "street" TEXT,
    "house_number" TEXT,
    "city" TEXT,
    "neighborhood" TEXT,
    "zip_code" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "club" "Club" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "club" "Club",
    "role" "Role",
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
