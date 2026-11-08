import { formatDate, timestamp } from "./dates";
import type { JourneyPhase, JourneyRecord } from "./types";

const day = 86_400_000;

// Starts, not inferred career meanings, determine phases. Year-only anchors retain their precision.
export function buildPhases(
  records: JourneyRecord[],
  asOf: string,
  from?: string,
): JourneyPhase[] {
  const now = timestamp(asOf);
  const available = records
    .filter((record) => timestamp(record.start) <= now)
    .toSorted(
      (a, b) =>
        timestamp(a.start) - timestamp(b.start) || a.id.localeCompare(b.id),
    );
  if (!available.length) return [];
  const startAt =
    from ??
    available.find(
      (record) => record.lane === "Work" || record.lane === "Education",
    )?.start ??
    available.find((record) => record.lane !== "Places")?.start ??
    available[0].start;
  const candidates: JourneyRecord[] = [];
  let focus: JourneyRecord | undefined;
  for (const record of available.filter(
    (item) => item.lane === "Work" || item.lane === "Education",
  )) {
    const commitment = record.commitment ?? 100;
    if (
      commitment < 50 ||
      timestamp(record.end ?? asOf) - timestamp(record.start) < 90 * day
    )
      continue;
    const score = commitment + (record.lane === "Education" ? 1 : 0);
    if (focus) {
      const focusScore =
        (focus.commitment ?? 100) + (focus.lane === "Education" ? 1 : 0);
      const overlaps = timestamp(focus.end ?? asOf) >= timestamp(record.start);
      if (
        overlaps &&
        (focusScore > score ||
          (focusScore === score &&
            timestamp(focus.end ?? asOf) - timestamp(record.start) > 90 * day))
      )
        continue;
      const adjacent =
        timestamp(record.start) - timestamp(focus.end ?? asOf) <= 90 * day;
      if (
        adjacent &&
        record.lane === focus.lane &&
        ((record.organization && record.organization === focus.organization) ||
          record.title === focus.title)
      ) {
        focus = record;
        continue;
      }
    }
    candidates.push(record);
    focus = record;
  }
  const starts = candidates
    .map((record) => ({ start: record.start, record }))
    .filter((candidate) => timestamp(candidate.start) >= timestamp(startAt))
    .toSorted(
      (a, b) =>
        timestamp(a.start) - timestamp(b.start) ||
        a.record.id.localeCompare(b.record.id),
    );
  const phases: { start: string; triggers: JourneyRecord[] }[] = [];
  if (!starts.length || timestamp(startAt) < timestamp(starts[0].start))
    phases.push({
      start: startAt,
      triggers: [
        available.find(
          (record) =>
            timestamp(record.start) === timestamp(startAt) &&
            record.lane !== "Places",
        ) ?? available[0],
      ],
    });
  for (const candidate of starts) {
    const previous = phases.at(-1);
    const gap = previous
      ? timestamp(candidate.start) - timestamp(previous.start)
      : Infinity;
    if (previous && gap <= 365 * day) previous.triggers.push(candidate.record);
    else phases.push({ start: candidate.start, triggers: [candidate.record] });
  }
  // An explicit personal lead-in can begin an existing phase before its first role.
  for (const record of available) {
    if (!record.annotation?.phaseLeadFor) continue;
    const index = phases.findIndex((phase) =>
      phase.triggers.some(
        (trigger) => trigger.id === record.annotation?.phaseLeadFor,
      ),
    );
    if (index < 0) continue;
    const start = timestamp(record.start);
    if (
      start >= timestamp(startAt) &&
      start < timestamp(phases[index].start) &&
      (index === 0 || start > timestamp(phases[index - 1].start))
    )
      phases[index].start = record.start;
  }
  return phases
    .map((phase, index): JourneyPhase => {
      const end = phases[index + 1]?.start ?? asOf;
      const beginTime = timestamp(phase.start);
      const endTime = timestamp(end);
      const started = available
        .filter(
          (record) =>
            timestamp(record.start) >= beginTime &&
            (index === phases.length - 1
              ? timestamp(record.start) <= endTime
              : timestamp(record.start) < endTime),
        )
        .reverse();
      const continuing = available
        .filter(
          (record) =>
            record.kind === "period" &&
            timestamp(record.start) < beginTime &&
            (record.endExclusive
              ? timestamp(record.end ?? asOf) > beginTime
              : timestamp(record.end ?? asOf) >= beginTime),
        )
        .reverse();
      const primary = [...started, ...continuing]
        .filter(
          (record) =>
            (record.lane === "Work" || record.lane === "Education") &&
            (record.commitment ?? 100) >= 50,
        )
        .sort((a, b) => {
          const coverage = (record: JourneyRecord) =>
            Math.max(
              0,
              Math.min(timestamp(record.end ?? asOf), endTime) -
                Math.max(timestamp(record.start), beginTime),
            ) * (record.commitment ?? 100);
          return (
            coverage(b) - coverage(a) || timestamp(a.start) - timestamp(b.start)
          );
        })[0];
      const lead = primary ?? phase.triggers[0];
      const kinds = [...new Set(phase.triggers.map((record) => record.lane))];
      const reason = kinds
        .map((lane) =>
          lane === "Work"
            ? "Work change"
            : lane === "Education"
              ? "Education change"
              : "First recorded activity",
        )
        .join(" + ");
      return {
        id: `phase-${phase.triggers[0].id}`,
        start: phase.start,
        end,
        label: `${formatDate(phase.start)} – ${index === phases.length - 1 ? "Now" : formatDate(end)}`,
        title: lead.title,
        subtitle: lead.organization,
        reason: `${reason}${phase.start.length === 4 ? " · boundary known to the year" : phase.start.length === 7 ? " · boundary known to the month" : ""}`,
        started,
        continuing,
      };
    })
    .reverse();
}
