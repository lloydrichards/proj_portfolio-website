import { Layer, ManagedRuntime } from "effect";
import { Dataset } from "./Dataset/Dataset";
import { DrizzleLive } from "./db";
import { GitHub } from "./GitHub";
import { Laboratory } from "./Laboratory";
import { Portfolio } from "./Portfolio";

const MainLayer = Layer.mergeAll(
  Laboratory.Default,
  Portfolio.Default,
  Dataset.Default,
  DrizzleLive,
  GitHub.Default,
);

export const RuntimeServer = ManagedRuntime.make(MainLayer);
