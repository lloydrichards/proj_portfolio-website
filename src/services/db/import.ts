import { readdir } from "node:fs/promises";
import path from "node:path";
import { sql } from "drizzle-orm";
import type { $IntentionalAny } from "@/types/helpers";
import { db } from ".";
import * as schema from "./schema";

const importJsonToDatabase = async (fileName: string) => {
  try {
    const filePath = path.join(process.cwd(), "database/backup", fileName);
    const fileContent = await Bun.file(filePath).text();
    const importData = JSON.parse(fileContent) as Record<string, unknown[]>;

    // Get all table names from schema
    const tables = Object.entries(schema).filter(
      ([_, value]) =>
        typeof value === "object" && Symbol.for("drizzle:Name") in value,
    );

    // Import data into each table
    for (const [tableName, table] of tables) {
      try {
        const tableData = importData[tableName];
        if (!Array.isArray(tableData)) continue;

        // Clear existing data using safe Drizzle API
        await db.delete(table as $IntentionalAny);

        // Reset auto-increment sequence for SQLite
        await db.run(
          sql`DELETE FROM sqlite_sequence WHERE name = ${tableName}`,
        );

        // Skip if no data to import
        if (tableData.length === 0) continue;

        // Insert new data
        await db.insert(table as $IntentionalAny).values(tableData);
        console.log(`Imported ${tableData.length} records into ${tableName}`);
      } catch (error) {
        console.error(`Failed to import table ${tableName}:`, error);
      }
    }

    return { success: true, message: "Database import completed" };
  } catch (error) {
    console.error("Database import failed:", error);
    throw error;
  }
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
