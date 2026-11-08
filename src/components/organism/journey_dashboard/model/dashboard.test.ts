import { describe, expect, it } from "vitest";
import { prepareDashboard } from "./dashboard";
import type { JourneyRecord } from "./types";

describe("dashboard data", () => {
  it("retains full geography while starting the timeline at the first work or education record", () => {
    const records: JourneyRecord[] = [
      {
        id: "degree",
        lane: "Education",
        title: "Degree",
        organization: "University",
        location: "Canada",
        description: "",
        start: "2006-09-01",
        end: "2011-04-21",
        kind: "period",
        source: "CV database",
      },
      {
        id: "home",
        lane: "Places",
        title: "Calgary",
        organization: "",
        location: "Calgary",
        country: "CAN",
        placeKind: "lived",
        description: "",
        start: "2000-03",
        end: "2012-01",
        endExclusive: true,
        kind: "period",
        source: "Personal account",
      },
    ];
    const data = prepareDashboard(records, "2026-11-08");
    expect(data.records.map((record) => record.id)).toEqual(["degree", "home"]);
    expect(data.timelineRecords.map((record) => record.id)).toEqual(["degree"]);
    expect(data.range).toEqual({ start: "2006-09-01", end: "2026-11-08" });
    expect(data.phases[0].title).toBe("Degree");
    expect(data.phases[0].continuing.map((record) => record.id)).toEqual([
      "home",
    ]);
  });
});
