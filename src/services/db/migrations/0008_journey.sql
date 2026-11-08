CREATE TABLE `journey_city` (
	`id` text PRIMARY KEY NOT NULL,
	`label` text NOT NULL,
	`country` text NOT NULL,
	`longitude` real NOT NULL,
	`latitude` real NOT NULL,
	`source` text NOT NULL,
	`source_url` text NOT NULL,
	`license` text NOT NULL,
	`retrieved_on` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `journey_event` (
	`id` text PRIMARY KEY NOT NULL,
	`date` text NOT NULL,
	`title` text NOT NULL,
	`text` text NOT NULL,
	`kind` text NOT NULL,
	`context_lane` text NOT NULL,
	`location` text,
	`date_note` text,
	`phase_lead_occupation_id` integer,
	`after_occupation_id` integer,
	FOREIGN KEY (`phase_lead_occupation_id`) REFERENCES `occupation`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`after_occupation_id`) REFERENCES `occupation`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `journey_place` (
	`id` text PRIMARY KEY NOT NULL,
	`date` text NOT NULL,
	`place` text NOT NULL,
	`country` text NOT NULL,
	`kind` text NOT NULL,
	`title` text NOT NULL,
	`geographic_place_id` text,
	FOREIGN KEY (`geographic_place_id`) REFERENCES `journey_city`(`id`) ON UPDATE no action ON DELETE no action
);
