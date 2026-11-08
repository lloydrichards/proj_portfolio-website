import type { JourneyPersonalData } from "@/types/Journey";
import { personalEvents } from "./events";
import { geographicPlaces } from "./geographic-places";
import { places } from "./places";
export const personalData: JourneyPersonalData = {
  places,
  events: personalEvents,
  geographicPlaces,
};
