import { type Config } from "drizzle-kit";

export default {
  out: "./src/services/db/migrations",
  schema: "./src/services/db/schema",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DB_FILE_NAME ?? "",
  },
} satisfies Config;
