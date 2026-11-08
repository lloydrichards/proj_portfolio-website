import path from "node:path";
import { db } from ".";
import { exportDatabase } from "./backup";

const main = async () => {
  try {
    const data = await exportDatabase(db);
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
