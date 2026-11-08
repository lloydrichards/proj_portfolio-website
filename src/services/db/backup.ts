import { sql } from "drizzle-orm";
import type { SQLiteTable } from "drizzle-orm/sqlite-core";
import type { $IntentionalAny } from "@/types/helpers";
import type { db } from ".";
import { readJourney } from "./journey-data";
import {
  attribute,
  category,
  journeyCity,
  journeyEvent,
  journeyPlace,
  occupation,
  occupationToAttribute,
  occupationToSkill,
  skill,
  teamMember,
} from "./schema";

// Parent tables precede dependants; deletion uses the reverse order.
const tables: [string, SQLiteTable][] = [
  ["category", category],
  ["attribute", attribute],
  ["skill", skill],
  ["teamMember", teamMember],
  ["occupation", occupation],
  ["occupationToAttribute", occupationToAttribute],
  ["occupationToSkill", occupationToSkill],
  ["journeyCity", journeyCity],
  ["journeyPlace", journeyPlace],
  ["journeyEvent", journeyEvent],
];
export async function exportDatabase(database: db) {
  return database.transaction(async (tx) => {
    const result: Record<string, unknown[]> = {};
    for (const [name, table] of tables)
      result[name] = await tx.select().from(table);
    return result;
  });
}
export async function importDatabase(database: db, input: unknown) {
  if (typeof input !== "object" || input === null)
    throw new Error("Expected database backup object");
  const data = input as Record<string, unknown>;
  const names = Object.keys(data);
  const legacyTables = tables.filter(([name]) => !name.startsWith("journey"));
  const matches = (expected: typeof tables) =>
    names.length === expected.length &&
    expected.every(([name]) => Object.hasOwn(data, name));
  const present = matches(tables)
    ? tables
    : matches(legacyTables)
      ? legacyTables
      : null;
  if (!present)
    throw new Error("Expected a complete current or legacy database backup");
  for (const [name] of present)
    if (!Array.isArray(data[name]))
      throw new Error(`Invalid backup table: ${name}`);
  await database.transaction(async (tx) => {
    // Legacy replacement temporarily removes occupations referenced by retained annotations.
    await tx.run(sql`PRAGMA defer_foreign_keys = ON`);
    for (const [, table] of [...present].reverse()) await tx.delete(table);
    for (const [name, table] of present) {
      const rows = data[name] as unknown[];
      if (rows.length) await tx.insert(table).values(rows as $IntentionalAny);
    }
    await readJourney(tx);
    const violations = await tx.all(sql`PRAGMA foreign_key_check`);
    if (violations.length)
      throw new Error("Restored backup violates foreign key constraints");
  });
}
