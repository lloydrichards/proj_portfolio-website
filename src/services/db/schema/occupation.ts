import { desc, relations } from "drizzle-orm";
import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

// Occupation schema

export const occupation = sqliteTable("occupation", {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  company: text().notNull(),
  location: text().notNull(),
  jobDescription: text("job_description"),
  category: integer("category_id").references(() => category.id, {
    onDelete: "cascade",
  }),
  startDate: text("start_date").$type<Date>().notNull(),
  endDate: text("end_date").$type<Date | null>(),
});

export const occupationRelations = relations(occupation, ({ one, many }) => ({
  category: one(category, {
    fields: [occupation.category],
    references: [category.id],
  }),
  skills: many(occupationToSkill),
  attributes: many(occupationToAttribute),
}));

// Category schema

export const category = sqliteTable("category", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull().unique(),
  description: text(),
});

export const categoryRelations = relations(category, ({ many }) => ({
  occupations: many(occupation),
}));

// Skill schema

export const skill = sqliteTable("skill", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull().unique(),
  description: text(),
});

export const occupationToSkill = sqliteTable(
  "occupation_to_skill",
  {
    occupation: integer("occupation_id")
      .notNull()
      .references(() => occupation.id, {
        onDelete: "cascade",
      }),
    skill: integer("skill_id")
      .notNull()
      .references(() => skill.id, {
        onDelete: "cascade",
      }),
  },
  (t) => [primaryKey({ columns: [t.occupation, t.skill] })],
);

export const occupationToSkillRelations = relations(
  occupationToSkill,
  ({ one }) => ({
    occupation: one(occupation, {
      fields: [occupationToSkill.occupation],
      references: [occupation.id],
    }),
    skill: one(skill, {
      fields: [occupationToSkill.skill],
      references: [skill.id],
    }),
  }),
);

// Attribute schema

export const attribute = sqliteTable("attribute", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull().unique(),
  description: text(),
});

export const occupationToAttribute = sqliteTable(
  "occupation_to_attribute",
  {
    occupation: integer("occupation_id")
      .notNull()
      .references(() => occupation.id, {
        onDelete: "cascade",
      }),
    attribute: integer("attribute_id")
      .notNull()
      .references(() => attribute.id, {
        onDelete: "cascade",
      }),
  },
  (t) => [primaryKey({ columns: [t.occupation, t.attribute] })],
);

export const occupationToAttributeRelations = relations(
  occupationToAttribute,
  ({ one }) => ({
    occupation: one(occupation, {
      fields: [occupationToAttribute.occupation],
      references: [occupation.id],
    }),
    attribute: one(attribute, {
      fields: [occupationToAttribute.attribute],
      references: [attribute.id],
    }),
  }),
);
