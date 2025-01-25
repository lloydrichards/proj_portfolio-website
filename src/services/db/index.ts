import { createClient, type Client } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { env } from "@/lib/env";
import path from "path";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  client: Client | undefined;
};

const initClient = () => {
  if (env.NEXT_RUNTIME === "edge") {
    // Skip database initialization in edge runtime
    return null as unknown as Client;
  }
  const dbPath = path.join(process.cwd(), env.DB_FILE_NAME);
  return globalForDb.client ?? createClient({ url: `file:${dbPath}` });
};

export const client = initClient();

if (env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
export type db = typeof db;
