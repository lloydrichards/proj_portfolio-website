CREATE TABLE `attribute` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `attribute_name_unique` ON `attribute` (`name`);--> statement-breakpoint
CREATE TABLE `category` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `category_name_unique` ON `category` (`name`);--> statement-breakpoint
CREATE TABLE `occupation` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`company` text NOT NULL,
	`location` text NOT NULL,
	`job_description` text,
	`category_id` integer,
	`start_date` text NOT NULL,
	`end_date` text,
	FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `occupation_to_attribute` (
	`occupation_id` integer NOT NULL,
	`attribute_id` integer NOT NULL,
	PRIMARY KEY(`occupation_id`, `attribute_id`),
	FOREIGN KEY (`occupation_id`) REFERENCES `occupation`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`attribute_id`) REFERENCES `attribute`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `occupation_to_skill` (
	`occupation_id` integer NOT NULL,
	`skill_id` integer NOT NULL,
	PRIMARY KEY(`occupation_id`, `skill_id`),
	FOREIGN KEY (`occupation_id`) REFERENCES `occupation`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`skill_id`) REFERENCES `skill`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `skill` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `skill_name_unique` ON `skill` (`name`);