import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { Effect, Layer } from "effect";
import { describe, expect, it } from "vitest";
import { normalizeJourneyRecords } from "@/components/organism/journey_dashboard/data/records";
import { prepareDashboard } from "@/components/organism/journey_dashboard/model/dashboard";
import { JourneyService, loadJourney } from "../Dataset/JourneyService";
import { Database } from ".";
import { exportDatabase, importDatabase } from "./backup";
import * as schema from "./schema";
import { seedJourney } from "./seed/journey";
import { personalData } from "./seed/personal-data";

async function disposableDatabase() {
  const directory = await mkdtemp(path.join(tmpdir(), "journey-sql-"));
  const client = createClient({
    url: `file:${path.join(directory, "test.sqlite")}`,
  });
  const database = drizzle(client, { schema });
  const journal = JSON.parse(
    await readFile(
      new URL("./migrations/meta/_journal.json", import.meta.url),
      "utf8",
    ),
  ) as { entries: { tag: string }[] };
  for (const { tag } of journal.entries)
    await client.executeMultiple(
      await readFile(
        new URL(`./migrations/${tag}.sql`, import.meta.url),
        "utf8",
      ),
    );
  await client.execute("PRAGMA foreign_keys = ON");
  await database.insert(schema.category).values({ id: 1, name: "Work" });
  await database.insert(schema.occupation).values(
    [10, 14].map((id) => ({
      id,
      title: `Occupation ${id}`,
      company: "",
      location: "",
      category: 1,
      startDate: "2019-01",
    })),
  );
  return { client, database, directory };
}

describe("SQL timeline", () => {
  it("preserves authored records, precision, editorial links and repeated city identities across idempotent seeding", async () => {
    const { client, database, directory } = await disposableDatabase();
    try {
      await seedJourney(database);
      const before = await exportDatabase(database);
      await seedJourney(database);
      expect(await exportDatabase(database)).toEqual(before);
      const data = await Effect.runPromise(
        Effect.gen(function* () {
          const service = yield* JourneyService;
          return yield* service.personalData();
        }).pipe(
          Effect.provide(
            Layer.effect(JourneyService, JourneyService.make).pipe(
              Layer.provide(Layer.succeed(Database, database)),
            ),
          ),
        ),
      );
      const occupations = [
        {
          id: 14,
          title: "Regenerative Garden Designer",
          company: "Lloyd Richards Design",
          start_date: "2016-04",
          end_date: "2018-10",
        },
        {
          id: 10,
          title: "Gardener",
          company: "Der Holländer Pflanzencenter",
          start_date: "2019-03",
          end_date: "2019-10",
        },
      ].map((role) => ({
        ...role,
        location: "",
        description: null,
        longDescription: null,
        pensum: 100,
        isFeatures: true,
        category: "WORK",
        skills: null,
        attributes: null,
      }));
      const sqlDashboard = prepareDashboard(
        normalizeJourneyRecords(occupations, data),
        "2026-11-08",
      );
      expect(
        sqlDashboard.phases.map(({ id, start }) => ({ id, start })),
      ).toEqual([
        { id: "phase-cv-10", start: "2019-01" },
        { id: "phase-cv-14", start: "2016-04" },
      ]);
      expect(sqlDashboard).toEqual(
        prepareDashboard(
          normalizeJourneyRecords(occupations, personalData),
          "2026-11-08",
        ),
      );
      expect(normalizeJourneyRecords([], data)).toEqual(
        normalizeJourneyRecords([], personalData),
      );
      expect(
        data.geographicPlaces.toSorted((a, b) => a.id.localeCompare(b.id)),
      ).toEqual(
        personalData.geographicPlaces.toSorted((a, b) =>
          a.id.localeCompare(b.id),
        ),
      );
      expect(data.places.filter((p) => p.kind === "lived")).toHaveLength(19);
      expect(data.places.filter((p) => p.kind === "visited")).toHaveLength(15);
      expect(data.events).toHaveLength(7);
      expect(
        data.places
          .filter((p) => p.place.startsWith("Calgary"))
          .every((p) => p.geographicPlaceId === "5913490"),
      ).toBe(true);
      await importDatabase(database, before);
      expect(await exportDatabase(database)).toEqual(before);
      await expect(importDatabase(database, { category: [] })).rejects.toThrow(
        "complete current or legacy",
      );
      expect(await exportDatabase(database)).toEqual(before);
      await expect(
        importDatabase(database, {
          ...before,
          journeyEvent: [{ id: "invalid" }],
        }),
      ).rejects.toThrow();
      expect(await exportDatabase(database)).toEqual(before);
    } finally {
      client.close();
      await rm(directory, { recursive: true, force: true });
    }
  });
  it("rejects invalid stored date precision rather than returning a partial timeline", async () => {
    const { client, database, directory } = await disposableDatabase();
    try {
      await seedJourney(database);
      await database.update(schema.journeyPlace).set({ date: "2019-13" });
      await expect(loadJourney(database)).rejects.toThrow();
    } finally {
      client.close();
      await rm(directory, { recursive: true, force: true });
    }
  });
  it("rolls back an incomplete seed when an editorial occupation target is missing", async () => {
    const { client, database, directory } = await disposableDatabase();
    try {
      await database.delete(schema.occupation);
      await expect(seedJourney(database)).rejects.toThrow();
      expect(await database.select().from(schema.journeyCity)).toEqual([]);
      await expect(loadJourney(database)).rejects.toThrow(
        "Timeline data is missing",
      );
    } finally {
      client.close();
      await rm(directory, { recursive: true, force: true });
    }
  });
});

describe("atomic backup restoration", () => {
  it("restores compatible legacy backups while retaining journey data, and rejects missing occupation targets atomically", async () => {
    const { client, database, directory } = await disposableDatabase();
    try {
      await seedJourney(database);
      const before = await exportDatabase(database);
      const legacy = Object.fromEntries(
        Object.entries(before).filter(([name]) => !name.startsWith("journey")),
      );
      await importDatabase(database, legacy);
      expect(await exportDatabase(database)).toEqual(before);
      legacy.occupation = legacy.occupation.filter(
        (row) =>
          typeof row === "object" &&
          row !== null &&
          "id" in row &&
          row.id !== 10,
      );
      await expect(importDatabase(database, legacy)).rejects.toThrow();
      expect(await exportDatabase(database)).toEqual(before);
    } finally {
      client.close();
      await rm(directory, { recursive: true, force: true });
    }
  });

  it.each([
    ["journeyPlace", "date", "2019-13"],
    ["journeyEvent", "kind", "promotion"],
    ["journeyCity", "latitude", 95],
  ] as const)("rejects invalid %s.%s before replacing the original database", async (table, field, value) => {
    const { client, database, directory } = await disposableDatabase();
    try {
      await seedJourney(database);
      const before = await exportDatabase(database);
      const invalid = structuredClone(before);
      const row = invalid[table][0];
      if (typeof row !== "object" || row === null)
        throw new Error("Missing fixture row");
      invalid[table][0] = { ...row, [field]: value };
      await expect(importDatabase(database, invalid)).rejects.toThrow();
      expect(await exportDatabase(database)).toEqual(before);
    } finally {
      client.close();
      await rm(directory, { recursive: true, force: true });
    }
  });
});
