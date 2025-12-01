import path from "node:path";
import * as SqliteDrizzle from "@effect/sql-drizzle/Sqlite";
import { LibsqlClient } from "@effect/sql-libsql";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { Config, Layer } from "effect";
import * as schema from "./schema";

// Helper to create database client for standalone scripts
const createDBClient = () => {
  const dbFileName = process.env.DB_FILE_NAME ?? "database/db.sqlite";
  const dbPath = path.join(process.cwd(), dbFileName);
  return createClient({ url: `file:${dbPath}` });
};

// Raw database instance for scripts (export.ts, import.ts)
// This is a simple, non-Effect instance for standalone scripts
export const db = drizzle(createDBClient(), { schema });
export type db = typeof db;

export const SqlLive = LibsqlClient.layerConfig({
  url: Config.string("DB_FILE_NAME").pipe(
    Config.withDefault("database/db.sqlite"),
    Config.map((fileName) => `file:${path.join(process.cwd(), fileName)}`),
  ),
});

// Create Drizzle layer with proper Effect integration
// Layer.provide eliminates SqlLive from the requirements
export const DrizzleLive = SqliteDrizzle.layer.pipe(
  Layer.provideMerge(SqlLive),
);
export const Database = SqliteDrizzle.make({
  schema,
});
