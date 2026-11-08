import { describe, expect, it } from "vitest";
import { recordsForSection } from "./phase-entries";
import type { JourneyPhase, JourneyRecord } from "./types";

const record = (
  id: string,
  start: string,
  extra: Partial<JourneyRecord> = {},
): JourneyRecord => ({
  id,
  start,
  end: null,
  title: id,
  organization: "",
  location: "",
  description: "",
  lane: "Work",
  kind: "period",
  source: "CV database",
  ...extra,
});

const phase = (
  started: JourneyRecord[],
  continuing: JourneyRecord[] = [],
): JourneyPhase => ({
  id: "phase-business",
  start: "2015",
  end: "2019",
  label: "2015–2019",
  title: "Business",
  subtitle: "",
  reason: "Work change",
  started,
  continuing,
});

describe("phase section reading order", () => {
  it("places a linked annotation below its role while keeping other entries in date order", () => {
    const role = record("cv-14", "2016-04");
    const business = record("event-business", "2016-09", {
      lane: "Events",
      kind: "moment",
      source: "Personal account",
      annotation: {
        kind: "pivot",
        contextLane: "Work",
        afterRecordId: "cv-14",
      },
    });
    const section = phase([
      role,
      business,
      record("newer", "2018"),
      record("older", "2015"),
    ]);
    expect(recordsForSection(section, "Work").map(({ id }) => id)).toEqual([
      "newer",
      "cv-14",
      "event-business",
      "older",
    ]);
    expect(section.started.map(({ id }) => id)).toEqual([
      "cv-14",
      "event-business",
      "newer",
      "older",
    ]);
  });

  it("includes continuing records and keeps unlinked annotations in their contextual section", () => {
    const annotation = record("event-study", "2013-04", {
      lane: "Events",
      kind: "moment",
      source: "Personal account",
      annotation: {
        kind: "learning",
        contextLane: "Education",
        afterRecordId: "absent",
      },
    });
    const section = phase(
      [annotation],
      [record("degree", "2012", { lane: "Education" })],
    );
    expect(recordsForSection(section, "Education").map(({ id }) => id)).toEqual(
      ["event-study", "degree"],
    );
    expect(recordsForSection(section, "Events")).toEqual([]);
  });
});
