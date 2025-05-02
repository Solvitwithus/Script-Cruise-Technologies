-- CreateTable
CREATE TABLE "Demonstration" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Demonstration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reachout" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyName" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "employees" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "websiteUrl" TEXT,
    "Description" TEXT NOT NULL,

    CONSTRAINT "Reachout_pkey" PRIMARY KEY ("id")
);
