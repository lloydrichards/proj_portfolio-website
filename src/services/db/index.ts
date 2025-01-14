import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

import { env } from "@/lib/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  client: Database | undefined;
};

export const client = globalForDb.client ?? new Database(env.DB_FILE_NAME);
if (env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
