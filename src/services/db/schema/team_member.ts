import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const teamMember = sqliteTable("team_member", {
  id: integer().primaryKey({ autoIncrement: true }),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  role: text().notNull(),
  imgUrl: text("img_url"),
});

export type TeamMember = typeof teamMember.$inferSelect;