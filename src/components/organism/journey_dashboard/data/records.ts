import type { JourneyPersonalData } from "@/types/Journey";
import type { Occupation } from "@/types/Occupation";
import { timestamp } from "../model/dates";
import type { JourneyRecord, Lane } from "../model/types";

const categoryLane: Record<string, Lane> = {
  WORK: "Work",
  VOLUNTEER: "Volunteer",
  EDUCATION: "Education",
  CONFERENCE: "Events",
};
export function normalizeJourneyRecords(
  occupations: typeof Occupation.Array.Encoded,
  { places, events: personalEvents }: JourneyPersonalData,
): JourneyRecord[] {
  const cv = occupations.map(
    (record): JourneyRecord => ({
      id: `cv-${record.id}`,
      lane: categoryLane[record.category] ?? "Events",
      title: record.title,
      organization: record.company,
      location: record.location,
      description: record.description ?? record.longDescription ?? "",
      start: record.start_date,
      end: record.end_date,
      kind: "period",
      commitment: record.pensum,
      source: "CV database",
    }),
  );
  const moves = places.map(
    (place): JourneyRecord => ({
      id: `place-${place.id}`,
      lane: "Places",
      title: place.title,
      organization: "",
      location: place.place,
      country: place.country,
      geographicPlaceId: place.geographicPlaceId,
      placeKind: place.kind,
      endExclusive: true,
      description:
        place.kind === "lived"
          ? `Lived in ${place.place}.`
          : `Visited ${place.place}.`,
      start: place.date,
      end: place.end === undefined ? place.date : place.end,
      kind: place.end === undefined ? "moment" : "period",
      source: "Personal account",
    }),
  );
  const events = personalEvents.map(
    (event): JourneyRecord => ({
      id: `event-${event.id}`,
      lane: "Events",
      title: event.title,
      organization: "",
      location: event.location ?? "",
      description: event.text,
      start: event.date,
      end: event.date,
      kind: "moment",
      source: "Personal account",
      note: event.dateNote,
      annotation: {
        kind: event.kind,
        contextLane: event.contextLane,
        phaseLeadFor: event.phaseLeadFor,
        afterRecordId: event.afterRecordId,
      },
    }),
  );
  return [...cv, ...moves, ...events].sort(
    (a, b) =>
      timestamp(b.start) - timestamp(a.start) || a.id.localeCompare(b.id),
  );
}
