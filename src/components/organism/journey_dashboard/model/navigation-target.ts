import type { JourneyPhase } from "./types";

/** Resolve the same canonical and continuing-entry anchors rendered by the list. */
export function resolveJourneyTarget(phases: JourneyPhase[], hash: string) {
  let anchor: string;
  try {
    anchor = decodeURIComponent(hash.replace(/^#/, ""));
  } catch {
    return null;
  }
  for (const phase of phases) {
    if (anchor === phase.id)
      return { phaseId: phase.id, recordId: null, anchor };
    for (const record of phase.started) {
      if (anchor === `entry-${record.id}`)
        return { phaseId: phase.id, recordId: record.id, anchor };
    }
    for (const record of phase.continuing) {
      if (anchor === `${phase.id}-entry-${record.id}`)
        return { phaseId: phase.id, recordId: record.id, anchor };
    }
  }
  return null;
}
