import { createClient, type Client } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { env } from "@/lib/env";
import * as schema from "./schema";
import path from "path";

const globalForDb = globalThis as unknown as {
  client: Client | undefined;
};

const dbPath = path.join(process.cwd(), env.DB_FILE_NAME);

export const client =
  globalForDb.client ?? createClient({ url: `file:${dbPath}` });
if (env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
export type db = typeof db;
