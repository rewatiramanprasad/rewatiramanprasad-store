-- CreateTable
CREATE TABLE "keep_alive" (
    "id" SERIAL NOT NULL,
    "ts" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "keep_alive_pkey" PRIMARY KEY ("id")
);
