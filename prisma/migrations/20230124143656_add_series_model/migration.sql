/*
  Warnings:

  - You are about to drop the column `allow_comments` on the `posts` table. All the data in the column will be lost.
  - The values [EDITOR,WRITER] on the enum `Users_role` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `user_id` to the `Uploads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `answers` MODIFY `contents` VARCHAR(5000) NOT NULL,
    MODIFY `contents_short` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `comments` MODIFY `contents` VARCHAR(5000) NOT NULL,
    MODIFY `contents_short` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `posts` DROP COLUMN `allow_comments`,
    ADD COLUMN `is_allow_comments` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `is_series` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `series_id` INTEGER NULL,
    MODIFY `contents` VARCHAR(10000) NOT NULL,
    MODIFY `contents_short` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `settings` ADD COLUMN `is_show_answers` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `is_show_bookmarks` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `is_show_reactions` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `uploads` ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('ADMIN', 'USER', 'MODERATOR', 'INSPECTOR') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `Series` (
    `_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `expected_number_of_posts` INTEGER NOT NULL,
    `thumbnail_url` VARCHAR(191) NULL,
    `background_url` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Series_slug_key`(`slug`),
    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_series_id_fkey` FOREIGN KEY (`series_id`) REFERENCES `Series`(`_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Uploads` ADD CONSTRAINT `Uploads_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`_id`) ON DELETE CASCADE ON UPDATE CASCADE;
