import { Layer, ManagedRuntime } from "effect";
import { Dataset } from "./Dataset/Dataset";
import { OccupationService } from "./Dataset/OccupationService";
import { GitHub } from "./GitHub";
import { Laboratory } from "./Laboratory";
import { Portfolio } from "./Portfolio";

const MainLayer = Layer.suspend(() =>
  Layer.mergeAll(
    Laboratory.Default,
    Portfolio.Default,
    Dataset.Default,
    GitHub.Default,
    OccupationService.Default,
  ),
);

export const RuntimeServer = ManagedRuntime.make(MainLayer);
