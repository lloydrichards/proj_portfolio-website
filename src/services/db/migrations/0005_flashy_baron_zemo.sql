ALTER TABLE `occupation` RENAME COLUMN "job_description" TO "short_description";--> statement-breakpoint
ALTER TABLE `occupation` ADD `long_description` text;--> statement-breakpoint
ALTER TABLE `occupation` ADD `is_featured` integer DEFAULT 0 NOT NULL;