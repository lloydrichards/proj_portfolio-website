PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_occupation` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`company` text NOT NULL,
	`location` text NOT NULL,
	`job_description` text,
	`category_id` integer NOT NULL,
	`start_date` text NOT NULL,
	`end_date` text,
	FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_occupation`("id", "title", "company", "location", "job_description", "category_id", "start_date", "end_date") SELECT "id", "title", "company", "location", "job_description", "category_id", "start_date", "end_date" FROM `occupation`;--> statement-breakpoint
DROP TABLE `occupation`;--> statement-breakpoint
ALTER TABLE `__new_occupation` RENAME TO `occupation`;--> statement-breakpoint
PRAGMA foreign_keys=ON;