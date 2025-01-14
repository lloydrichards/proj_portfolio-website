import { type Config } from "drizzle-kit";

import { env } from "@/lib/env";

export default {
  out: "./src/services/db/migrations",
  schema: "./src/services/db/schema",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DB_FILE_NAME,
  },
} satisfies Config;
