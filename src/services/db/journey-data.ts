import { asc } from "drizzle-orm";
import { Schema } from "effect";
import {
  type JourneyPersonalData,
  JourneyPersonalDataSchema,
} from "@/types/Journey";
import type { db } from ".";
import { journeyCity, journeyEvent, journeyPlace } from "./schema";

/** Read and validate journey rows within the caller's transaction. */
export async function readJourney(
  database: Pick<db, "select">,
): Promise<JourneyPersonalData> {
  const cities = await database
    .select()
    .from(journeyCity)
    .orderBy(asc(journeyCity.id));
  const episodes = await database
    .select()
    .from(journeyPlace)
    .orderBy(asc(journeyPlace.date), asc(journeyPlace.id));
  const annotations = await database
    .select()
    .from(journeyEvent)
    .orderBy(asc(journeyEvent.date), asc(journeyEvent.id));
  const homes = episodes.filter((place) => place.kind === "lived");
  return Schema.decodeUnknownSync(JourneyPersonalDataSchema)({
    geographicPlaces: cities.map((city) => ({
      id: city.id,
      label: city.label,
      country: city.country,
      coordinates: [city.longitude, city.latitude],
    })),
    places: episodes.map(({ geographicPlaceId, ...place }) => ({
      ...place,
      ...(geographicPlaceId === null ? {} : { geographicPlaceId }),
      ...(place.kind === "lived"
        ? {
            end:
              homes[homes.findIndex((home) => home.id === place.id) + 1]
                ?.date ?? null,
          }
        : {}),
    })),
    events: annotations.map(
      ({
        location,
        dateNote,
        phaseLeadOccupationId,
        afterOccupationId,
        ...event
      }) => ({
        ...event,
        ...(location === null ? {} : { location }),
        ...(dateNote === null ? {} : { dateNote }),
        ...(phaseLeadOccupationId === null
          ? {}
          : { phaseLeadFor: `cv-${phaseLeadOccupationId}` }),
        ...(afterOccupationId === null
          ? {}
          : { afterRecordId: `cv-${afterOccupationId}` }),
      }),
    ),
  });
}
