import { describe, expect, it } from "vitest";
import { prepareDashboard } from "../model/dashboard";
import type { JourneyRecord } from "../model/types";
import { prepareGlobeData } from "./globe-data";

const record = (
  id: string,
  lane: JourneyRecord["lane"],
  start: string,
  end: string | null,
  location: string,
  extra: Partial<JourneyRecord> = {},
): JourneyRecord => ({
  id,
  lane,
  start,
  end,
  location,
  title: id,
  organization: id,
  description: "",
  source: "CV database",
  kind: "period",
  ...extra,
});
describe("globe data", () => {
  it("distinguishes historical homes from activity in the active phase", () => {
    const records = [
      record("berlin", "Places", "2018-12", "2019-11", "Berlin", {
        country: "DEU",
        placeKind: "lived",
        endExclusive: true,
      }),
      record("zurich", "Places", "2019-11", null, "Zurich", {
        country: "CHE",
        placeKind: "lived",
      }),
      record("job", "Work", "2023-02-01", null, "Switzerland"),
      record("conference", "Events", "2023-11-22", "2023-11-24", "Scotland"),
    ];
    const dashboard = prepareDashboard(records, "2026-11-08");
    const data = prepareGlobeData(records, dashboard.phases[0]);
    expect(
      data.history.map((location) => ({
        code: location.code,
        kind: location.kind,
      })),
    ).toEqual([
      { code: "DEU", kind: "lived" },
      { code: "CHE", kind: "lived" },
      { code: "GBR", kind: "activity" },
    ]);
    expect(
      data.active.map((location) => ({
        code: location.code,
        kind: location.kind,
      })),
    ).toEqual([
      { code: "CHE", kind: "lived" },
      { code: "GBR", kind: "activity" },
    ]);
    expect(data.caption).toBe("Zurich");
    expect(data.markers.find((place) => place.label === "Berlin")?.active).toBe(
      false,
    );
    expect(data.center[0]).toBeCloseTo(8.55);
  });
});

describe("phase geography", () => {
  const records = [
    record("old-home", "Places", "1991-01", "1994-01", "Aberdeen, Scotland", {
      country: "GBR",
      placeKind: "lived",
      endExclusive: true,
    }),
    record(
      "return-home",
      "Places",
      "2000-01",
      "2019-01",
      "Aberdeen, Scotland",
      { country: "GBR", placeKind: "lived", endExclusive: true },
    ),
    record("degree", "Education", "2006-09-01", "2010-06-01", "Scotland"),
    record("new-home", "Places", "2019-01", null, "Berlin, Germany", {
      country: "DEU",
      placeKind: "lived",
      endExclusive: true,
    }),
    record("job", "Work", "2019-01", null, "Germany"),
    record("conference", "Events", "2023-01", "2023-01", "Portugal"),
  ];
  const phases = prepareDashboard(records, "2026-11-08").phases;
  it("excludes future places, including moves on the next phase boundary", () => {
    const data = prepareGlobeData(records, phases[phases.length - 1]);
    expect(data.markers.map((place) => place.label)).toEqual(["Aberdeen"]);
    expect(data.markers[0].recordIds).toEqual(["old-home", "return-home"]);
    expect(data.markers[0].precision).toBe("city");
  });
  it("follows a selected activity and falls back to phase homes outside that phase", () => {
    const latest = prepareGlobeData(records, phases[0], "conference");
    expect(latest.caption).toBe("Portugal");
    expect(
      latest.markers.find((place) => place.label === "Portugal")?.precision,
    ).toBe("country");
    expect(
      prepareGlobeData(records, phases[phases.length - 1], "conference")
        .caption,
    ).toBe("Aberdeen");
  });
});
