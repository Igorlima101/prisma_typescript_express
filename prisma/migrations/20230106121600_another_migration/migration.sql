-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_number_key`(`number`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Address` (
    `id` VARCHAR(191) NOT NULL,
    `zipcode` INTEGER NOT NULL,
    `number` INTEGER NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `userEmail` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Address_number_key`(`number`),
    UNIQUE INDEX `Address_userEmail_key`(`userEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
