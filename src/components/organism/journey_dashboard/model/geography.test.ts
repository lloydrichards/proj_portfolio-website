import { describe, expect, it } from "vitest";
import { locationHistory } from "./geography";
import type { JourneyRecord } from "./types";

const names = {
  DEU: "Germany",
  CHE: "Switzerland",
  GBR: "United Kingdom",
  CRI: "Costa Rica",
  ESP: "Spain",
  MAR: "Morocco",
  TUR: "Turkey",
};
const activity = (
  id: string,
  location: string,
  extra: Partial<JourneyRecord> = {},
): JourneyRecord => ({
  id,
  location,
  start: "2019",
  end: "2019",
  title: id,
  organization: "",
  description: "",
  lane: "Work",
  kind: "moment",
  source: "CV database",
  ...extra,
});
describe("places history", () => {
  it("keeps activity locations separate from confirmed residence", () => {
    expect(locationHistory([activity("job", "Germany")], names)).toEqual([
      { code: "DEU", kind: "activity", recordIds: ["job"] },
    ]);
  });
  it("upgrades a country to lived without losing the records that connect to it", () => {
    const result = locationHistory(
      [
        activity("job", "Germany"),
        activity("move", "Berlin", { country: "DEU", placeKind: "lived" }),
        activity("conference", "Germany"),
      ],
      names,
    );
    expect(result).toEqual([
      { code: "DEU", kind: "lived", recordIds: ["job", "move", "conference"] },
    ]);
  });
  it("normalizes regional names and splits multi-country activities", () => {
    const result = locationHistory(
      [
        activity("trip", "Costa Rica, Spain, Morocco, Turkey"),
        activity("conference", "Scotland"),
      ],
      names,
    );
    expect(result.map((country) => country.code).sort()).toEqual([
      "CRI",
      "ESP",
      "GBR",
      "MAR",
      "TUR",
    ]);
  });
  it("does not invent countries for online or unrecognized locations", () => {
    expect(
      locationHistory(
        [activity("online", "Online"), activity("unknown", "Unknown")],
        names,
      ),
    ).toEqual([]);
  });
});
