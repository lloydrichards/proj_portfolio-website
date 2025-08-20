import { createClient, type Client } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { Context, Layer } from "effect";
import { readdirSync } from "fs";
import path from "path";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as { client: Client | undefined };

const initClient = () => {
  const dbPath = path.join(process.cwd(), process.env.DB_FILE_NAME ?? "");
  const exists = readdirSync(path.join(process.cwd(), "database"));
  if (!exists) {
    throw new Error(`Database file ${process.env.DB_FILE_NAME} does not exist`);
  }
  return globalForDb.client ?? createClient({ url: `file:${dbPath}` });
};

const client = initClient();

if (process.env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
export type db = typeof db;

// Create a context for the Drizzle database instance
export class DrizzleDB extends Context.Tag("DrizzleDB")<
  DrizzleDB,
  typeof db
>() {}

// Create a layer that provides the Drizzle database instance
export const DrizzleLive = Layer.succeed(DrizzleDB, db);
