import { describe, expect, it } from "vitest";
import { countryNames } from "../globe/world";
import { recordDates } from "../model/dates";
import { buildPhases } from "../model/phases";
import { places } from "./places";
import { normalizeJourneyRecords } from "./records";

describe("confirmed residence history", () => {
  it("keeps all arrivals and links each departure to the next arrival without inventing days", () => {
    const homes = places.filter((place) => place.kind === "lived");
    expect(homes).toHaveLength(19);
    expect(new Set(homes.map((place) => place.id)).size).toBe(19);
    for (const [index, place] of homes.entries()) {
      expect(place.kind).toBe("lived");
      expect(place.date).toMatch(/^\d{4}-\d{2}$/);
      expect(place.end).toBe(homes[index + 1]?.date ?? null);
    }
  });
  it("retains the entire residence history without creating separate phases for homes", () => {
    const records = normalizeJourneyRecords([]);
    expect(
      records.filter((record) => record.placeKind === "lived"),
    ).toHaveLength(19);
    const phases = buildPhases(records, "2026-11-08");
    expect(phases).toHaveLength(1);
    expect(
      phases[0].started.filter((record) => record.lane === "Places").length,
    ).toBeGreaterThan(0);
    expect(phases[0].title).not.toContain("Living in");
  });
});

it("keeps trips as month-precision visits without changing residence periods", () => {
  const visits = normalizeJourneyRecords([]).filter(
    (record) => record.placeKind === "visited",
  );
  expect(visits).toHaveLength(15);
  expect(
    visits.every((record) => /^\w+ \d{4}$/.test(recordDates(record))),
  ).toBe(true);
  expect(visits.every((record) => !!countryNames[record.country ?? ""])).toBe(
    true,
  );
  expect(
    visits.every(
      (record) =>
        record.kind === "moment" &&
        record.start === record.end &&
        /^\d{4}-\d{2}$/.test(record.start),
    ),
  ).toBe(true);
  expect(visits.find((record) => record.country === "SGP")?.start).toBe(
    "2026-01",
  );
});
