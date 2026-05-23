import path from "node:path";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { Context, Layer } from "effect";
import * as schema from "./schema";

// Helper to create database client
const createDBClient = () => {
  const dbFileName = process.env.DB_FILE_NAME ?? "database/db.sqlite";
  const dbPath = path.join(process.cwd(), dbFileName);
  return createClient({ url: `file:${dbPath}` });
};

// Raw database instance for scripts (export.ts, import.ts)
export const db = drizzle(createDBClient(), { schema });
export type db = typeof db;

// Effect service for the database
export class Database extends Context.Service<Database, db>()("app/Database") {}

export const DrizzleLive = Layer.succeed(Database, db);
