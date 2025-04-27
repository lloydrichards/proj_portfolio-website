import * as SqliteDrizzle from "@effect/sql-drizzle/Sqlite";
import { SqliteClient } from "@effect/sql-sqlite-node";
import { createClient, type Client } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { Config, Layer } from "effect";
import { readdirSync } from "fs";
import path from "path";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as { client: Client | undefined };

const initClient = () => {
  const dbPath = path.join(process.cwd(), process.env.DB_FILE_NAME ?? "");
  const exists = readdirSync(path.join(process.cwd(), "database"));
  console.log(exists);
  return globalForDb.client ?? createClient({ url: `file:${dbPath}` });
};

const client = initClient();

if (process.env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
export type db = typeof db;

export const SqlLive = SqliteClient.layerConfig({
  filename: Config.string("DB_FILE_NAME"),
});

export const DrizzleLive = SqliteDrizzle.layer.pipe(Layer.provide(SqlLive));
