import { describe, expect, it } from "vitest";
import { prepareTimelineData } from "../timeline/timeline-data";
import { prepareDashboard } from "./dashboard";
import { resolveJourneyTarget } from "./navigation-target";
import type { JourneyPhase, JourneyRecord } from "./types";

const role = (
  id: string,
  start: string,
  end: string | null = null,
): JourneyRecord => ({
  id,
  start,
  end,
  title: id,
  organization: id,
  lane: "Work",
  location: "",
  description: "",
  kind: "period",
  source: "CV database",
  commitment: 100,
});
const ongoing = role("cv-4", "2022-07", "2023-04");
const phase = (
  id: string,
  started: JourneyRecord[],
  continuing: JourneyRecord[] = [],
): JourneyPhase => ({
  id,
  started,
  continuing,
  start: "2023-02",
  end: "2026-11-08",
  label: id,
  title: id,
  subtitle: "",
  reason: "Work change",
});
const phases = [
  phase("phase-cv-3", [role("cv-3", "2023-02")], [ongoing]),
  phase("phase-cv-10", [ongoing]),
];

describe("entry URL restoration", () => {
  it("restores canonical entry context on direct navigation and reload", () => {
    expect(resolveJourneyTarget(phases, "#entry-cv-4")).toEqual({
      phaseId: "phase-cv-10",
      recordId: "cv-4",
      anchor: "entry-cv-4",
    });
  });
  it("restores the phase-local instance of a continuing entry", () => {
    expect(resolveJourneyTarget(phases, "#phase-cv-3-entry-cv-4")).toEqual({
      phaseId: "phase-cv-3",
      recordId: "cv-4",
      anchor: "phase-cv-3-entry-cv-4",
    });
  });
  it("resolves phase links without selecting an entry and ignores invalid anchors", () => {
    expect(resolveJourneyTarget(phases, "#phase-cv-3")?.recordId).toBeNull();
    expect(resolveJourneyTarget(phases, "#entry-missing")).toBeNull();
    expect(resolveJourneyTarget(phases, "#%invalid")).toBeNull();
  });
});

it("excludes future records from chart marks and entry navigation", () => {
  const data = prepareTimelineData(
    prepareDashboard(
      [role("current", "2023-02"), role("future", "2030-01")],
      "2026-11-08",
    ),
  );
  expect(data.marks.map(({ record }) => record.id)).toEqual(["current"]);
  expect(data.navigationRecords.map(({ id }) => id)).toEqual(["current"]);
});
