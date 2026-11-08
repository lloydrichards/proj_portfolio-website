import { Layer, ManagedRuntime } from "effect";
import { Dataset } from "./Dataset/Dataset";
import { JourneyService } from "./Dataset/JourneyService";
import { OccupationService } from "./Dataset/OccupationService";
import { GitHub } from "./GitHub";
import { Laboratory } from "./Laboratory";
import { Portfolio } from "./Portfolio";

const MainLayer = Layer.suspend(() =>
  Layer.mergeAll(
    Laboratory.layer,
    Portfolio.layer,
    Dataset.layer,
    JourneyService.layer,
    GitHub.layer,
    OccupationService.layer,
  ),
);

export const RuntimeServer = ManagedRuntime.make(MainLayer);
