import { readdir } from "node:fs/promises";
import path from "node:path";
import { db } from ".";
import { importDatabase } from "./backup";

const importJsonToDatabase = async (fileName: string) => {
  const filePath = path.join(process.cwd(), "database/backup", fileName);
  const data: unknown = JSON.parse(await Bun.file(filePath).text());
  await importDatabase(db, data);
  return { success: true, message: "Database import completed" };
};

const main = async () => {
  try {
    // Get the most recent backup file
    const backupDir = path.join(process.cwd(), "database/backup");
    const files = await readdir(backupDir);
    const latestBackup = files
      .filter((f) => f.startsWith("database-export-"))
      .sort()
      .at(-1);

    if (!latestBackup) {
      throw new Error("No backup files found");
    }

    const result = await importJsonToDatabase(latestBackup);
    console.log(result);
  } catch (error) {
    console.error("Failed to import database:", error);
    process.exit(1);
  }
};

main().then(
  () => process.exit(0),
  () => process.exit(1),
);
