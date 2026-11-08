import { chmod, copyFile, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createClient } from "@libsql/client";
import { expect, it } from "vitest";
import config from "./next.config";

it("can query the bundled database from a read-only server directory", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "deployed-sqlite-"));
  const databaseFile = process.env.DB_FILE_NAME ?? "./database/db.sqlite";
  try {
    for (const file of config.outputFileTracingIncludes?.["/*"] ?? []) {
      const target = path.join(directory, path.basename(file));
      await copyFile(file, target);
      await chmod(target, 0o444);
    }
    await chmod(directory, 0o555);
    const deployed = createClient({
      url: `file:${path.join(directory, path.basename(databaseFile))}`,
    });
    try {
      const result = await deployed.execute(
        "select id from occupation limit 1",
      );
      expect(result.rows).toHaveLength(1);
    } finally {
      deployed.close();
    }
  } finally {
    await chmod(directory, 0o755);
    await rm(directory, { recursive: true, force: true });
  }
});
