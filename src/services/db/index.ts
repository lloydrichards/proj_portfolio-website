import { env } from "@/lib/env";
import * as schema from "./schema";

import { drizzle } from "drizzle-orm/bun-sqlite";
import Database from "bun:sqlite";

const sqlite = new Database(env.DB_FILE_NAME);

export const db = drizzle({ client: sqlite, schema });
export type db = typeof db;
