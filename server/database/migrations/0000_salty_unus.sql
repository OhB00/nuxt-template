CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text(30) NOT NULL,
	`email` text(75) NOT NULL,
	`password` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `username_idx` ON `users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `email` ON `users` (`email`);