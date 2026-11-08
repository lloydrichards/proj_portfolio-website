import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { occupation } from "./occupation";

export const journeyCity = sqliteTable("journey_city", {
  id: text().primaryKey(),
  label: text().notNull(),
  country: text().notNull(),
  longitude: real().notNull(),
  latitude: real().notNull(),
  source: text().notNull(),
  sourceUrl: text("source_url").notNull(),
  license: text().notNull(),
  retrievedOn: text("retrieved_on").notNull(),
});
export const journeyPlace = sqliteTable("journey_place", {
  id: text().primaryKey(),
  date: text().notNull(),
  place: text().notNull(),
  country: text().notNull(),
  kind: text({ enum: ["lived", "visited"] }).notNull(),
  title: text().notNull(),
  geographicPlaceId: text("geographic_place_id").references(
    () => journeyCity.id,
  ),
});
export const journeyEvent = sqliteTable("journey_event", {
  id: text().primaryKey(),
  date: text().notNull(),
  title: text().notNull(),
  text: text().notNull(),
  kind: text({ enum: ["pivot", "learning"] }).notNull(),
  contextLane: text("context_lane", {
    enum: ["Work", "Volunteer", "Education"],
  }).notNull(),
  location: text(),
  dateNote: text("date_note"),
  phaseLeadOccupationId: integer("phase_lead_occupation_id").references(
    () => occupation.id,
  ),
  afterOccupationId: integer("after_occupation_id").references(
    () => occupation.id,
  ),
});
