import { asc } from "drizzle-orm";
import { Context, Data, Effect, Layer, Schema } from "effect";
import {
  type JourneyPersonalData,
  JourneyPersonalDataSchema,
} from "@/types/Journey";
import { Database, DrizzleLive, type db } from "../db";
import { journeyCity, journeyEvent, journeyPlace } from "../db/schema";

export class JourneyUnavailable extends Data.TaggedError("JourneyUnavailable")<{
  readonly operation: string;
  readonly cause: unknown;
}> {}

export async function loadJourney(database: db): Promise<JourneyPersonalData> {
  return database.transaction(async (tx) => {
    const cities = await tx
      .select()
      .from(journeyCity)
      .orderBy(asc(journeyCity.id));
    const episodes = await tx
      .select()
      .from(journeyPlace)
      .orderBy(asc(journeyPlace.date), asc(journeyPlace.id));
    const annotations = await tx
      .select()
      .from(journeyEvent)
      .orderBy(asc(journeyEvent.date), asc(journeyEvent.id));
    if (!cities.length || !episodes.length || !annotations.length)
      throw new Error(
        "Timeline data is missing; run the explicit journey seed",
      );
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
  });
}

export class JourneyService extends Context.Service<JourneyService>()(
  "app/JourneyService",
  {
    make: Effect.gen(function* () {
      const database = yield* Database;
      return {
        personalData: Effect.fn("JourneyService.personalData")(() =>
          Effect.tryPromise({
            try: () => loadJourney(database),
            catch: (cause) =>
              new JourneyUnavailable({ operation: "personalData", cause }),
          }),
        ),
      };
    }),
  },
) {
  static readonly layer = Layer.effect(this, this.make).pipe(
    Layer.provide(DrizzleLive),
  );
}
