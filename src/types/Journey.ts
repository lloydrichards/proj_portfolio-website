import { Schema } from "effect";

/** Authored dates keep their supplied year, month, or day precision. */
export type JourneyDate = string;

export type JourneyPlace = {
  id: string;
  date: JourneyDate;
  end?: JourneyDate | null;
  place: string;
  country: string;
  kind: "lived" | "visited";
  title: string;
  geographicPlaceId?: string;
};

export type JourneyEvent = {
  id: string;
  date: JourneyDate;
  title: string;
  text: string;
  kind: "pivot" | "learning";
  contextLane: "Work" | "Volunteer" | "Education";
  location?: string;
  dateNote?: string;
  phaseLeadFor?: string;
  afterRecordId?: string;
};

export type JourneyGeographicPlace = {
  id: string;
  label: string;
  country: string;
  coordinates: [number, number];
};

export type JourneyPersonalData = {
  places: JourneyPlace[];
  events: JourneyEvent[];
  geographicPlaces: JourneyGeographicPlace[];
};

const date = Schema.String.check(
  Schema.isPattern(
    /^\d{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12]\d|3[01]))?)?$/,
  ),
);
const country = Schema.String.check(Schema.isPattern(/^[A-Z]{3}$/));
export const JourneyPersonalDataSchema = Schema.Struct({
  places: Schema.mutable(
    Schema.Array(
      Schema.Struct({
        id: Schema.NonEmptyString,
        date,
        end: Schema.optionalKey(Schema.NullOr(date)),
        place: Schema.NonEmptyString,
        country,
        kind: Schema.Literals(["lived", "visited"]),
        title: Schema.NonEmptyString,
        geographicPlaceId: Schema.optionalKey(Schema.NonEmptyString),
      }),
    ),
  ),
  events: Schema.mutable(
    Schema.Array(
      Schema.Struct({
        id: Schema.NonEmptyString,
        date,
        title: Schema.NonEmptyString,
        text: Schema.String,
        kind: Schema.Literals(["pivot", "learning"]),
        contextLane: Schema.Literals(["Work", "Volunteer", "Education"]),
        location: Schema.optionalKey(Schema.String),
        dateNote: Schema.optionalKey(Schema.String),
        phaseLeadFor: Schema.optionalKey(
          Schema.String.check(Schema.isPattern(/^cv-\d+$/)),
        ),
        afterRecordId: Schema.optionalKey(
          Schema.String.check(Schema.isPattern(/^cv-\d+$/)),
        ),
      }),
    ),
  ),
  geographicPlaces: Schema.mutable(
    Schema.Array(
      Schema.Struct({
        id: Schema.NonEmptyString,
        label: Schema.NonEmptyString,
        country,
        coordinates: Schema.mutable(
          Schema.Tuple([
            Schema.Finite.check(
              Schema.isBetween({ minimum: -180, maximum: 180 }),
            ),
            Schema.Finite.check(
              Schema.isBetween({ minimum: -90, maximum: 90 }),
            ),
          ]),
        ),
      }),
    ),
  ),
});
