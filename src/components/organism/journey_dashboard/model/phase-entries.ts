import { timestamp } from "./dates";
import type { JourneyPhase, Lane } from "./types";

export function recordsForSection(phase: JourneyPhase, lane: Lane) {
  const entries = [...phase.started, ...phase.continuing]
    .filter((record) =>
      record.annotation
        ? record.annotation.contextLane === lane
        : record.lane === lane,
    )
    .toSorted(
      (a, b) =>
        timestamp(b.start) - timestamp(a.start) || a.id.localeCompare(b.id),
    );
  for (const record of [...entries]) {
    const anchor = record.annotation?.afterRecordId;
    if (!anchor || !entries.some((entry) => entry.id === anchor)) continue;
    entries.splice(entries.indexOf(record), 1);
    entries.splice(
      entries.findIndex((entry) => entry.id === anchor) + 1,
      0,
      record,
    );
  }
  return entries;
}
