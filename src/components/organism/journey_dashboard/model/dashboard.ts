import { timestamp } from "./dates";
import { buildPhases } from "./phases";
import type { JourneyRecord } from "./types";

export function prepareDashboard(records: JourneyRecord[], asOf: string) {
  const timelineStart =
    records
      .filter((record) => record.lane === "Work" || record.lane === "Education")
      .toSorted((a, b) => timestamp(a.start) - timestamp(b.start))[0]?.start ??
    records.at(-1)?.start ??
    asOf;
  return {
    records,
    timelineRecords: records.filter(
      (record) => timestamp(record.start) >= timestamp(timelineStart),
    ),
    phases: buildPhases(records, asOf, timelineStart),
    range: { start: timelineStart, end: asOf },
  };
}
export type JourneyDashboardData = ReturnType<typeof prepareDashboard>;
