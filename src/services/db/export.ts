import { $IntentionalAny } from "@/types/helpers";
import { db } from ".";
import * as schema from "./schema";
import path from "path";

const exportDatabaseToJson = async () => {
  try {
    const exportData: Record<string, unknown> = {};

    // Get all table names from schema
    const tables = Object.entries(schema).filter(
      ([_, value]) =>
        typeof value === "object" && Symbol.for("drizzle:Name") in value,
    );
    console.log(Object.entries(schema));

    // Fetch data from all tables
    for (const [tableName, table] of tables) {
      console.log("exporting table", tableName);
      try {
        const tableData = await db.select().from(table as $IntentionalAny);
        exportData[tableName] = tableData;
      } catch (error) {
        console.error(`Failed to export table ${tableName}:`, error);
        exportData[tableName] = [];
      }
    }

    return exportData;
  } catch (error) {
    console.error("Database export failed:", error);
    throw error;
  }
};

const main = async () => {
  try {
    const data = await exportDatabaseToJson();
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `database-export-${timestamp}.json`;
    const filePath = path.join(process.cwd(), "database/backup", fileName);

    await Bun.write(filePath, JSON.stringify(data, null, 2));
    console.log(`Database exported successfully to ${fileName}`);
  } catch (error) {
    console.error("Failed to export database:", error);
    process.exit(1);
  }
};

main().then(
  () => process.exit(0),
  () => process.exit(1),
);
