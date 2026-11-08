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
