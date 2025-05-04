import { Layer, ManagedRuntime } from "effect";
import { Dataset } from "./Dataset/Dataset";
import { Laboratory } from "./Laboratory";
import { Portfolio } from "./Portfolio";
import { DrizzleLive } from "./db";

const MainLayer = Layer.mergeAll(
  Laboratory.Default,
  Portfolio.Default,
  Dataset.Default,
  DrizzleLive,
);

export const RuntimeServer = ManagedRuntime.make(MainLayer);
