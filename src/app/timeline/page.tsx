import { Effect, Schema } from "effect";
import { normalizeJourneyRecords } from "@/components/organism/journey_dashboard/data/records";
import JourneyDashboard from "@/components/organism/journey_dashboard/journey-dashboard";
import { prepareDashboard } from "@/components/organism/journey_dashboard/model/dashboard";
import { createPageMetadata } from "@/lib/seo";
import { Dataset } from "@/services/Dataset/Dataset";
import { JourneyService } from "@/services/Dataset/JourneyService";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Occupation } from "@/types/Occupation";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Timeline",
  description:
    "Work, learning, community, and places through the phases of my journey.",
});

export default async function TimelinePage() {
  const occupations = await RuntimeServer.runPromise(
    Effect.gen(function* () {
      const dataset = yield* Dataset;
      return yield* dataset.allOccupations();
    }).pipe(Effect.andThen(Schema.encodeEffect(Occupation.Array))),
  );
  const personalData = await RuntimeServer.runPromise(
    Effect.gen(function* () {
      const journey = yield* JourneyService;
      return yield* journey.personalData();
    }),
  );
  const records = normalizeJourneyRecords(occupations, personalData);
  const asOf = new Date().toISOString();
  const data = prepareDashboard(records, asOf, personalData.geographicPlaces);
  return (
    <main className="col-span-full min-w-0 px-4 pb-10 text-foreground selection:bg-primary selection:text-primary-foreground [@media(max-width:760px)]:px-2 [@media(max-width:760px)]:pb-6 [&_:where(:focus-visible)]:outline-2 [&_:where(:focus-visible)]:outline-offset-4 [&_:where(:focus-visible)]:outline-primary [&_article:focus-visible]:outline-none [&_article:focus-visible>h2]:outline-2 [&_article:focus-visible>h2]:outline-offset-[6px] [&_article:focus-visible>h2]:outline-primary [&_a]:underline-offset-[5px]">
      <header className="mb-6 border-b border-border pt-6 pb-4 [@media(max-width:960px)]:mb-4 [@media(max-width:960px)]:pt-[18px] [@media(max-width:960px)]:pb-3">
        <h1 className="m-0 text-[clamp(28px,3vw,38px)] font-medium leading-[1.15] tracking-[-0.035em] text-balance [@media(max-width:960px)]:text-[28px]">
          Timeline
        </h1>
      </header>
      <JourneyDashboard data={data} />
      <footer className="mt-10 max-w-[75ch] border-t border-border pt-6 text-xs leading-[1.8] text-muted-foreground [@media(max-width:760px)]:mt-6">
        <p>
          Personal dates retain their recorded month or year precision. Places
          marked as lived are based on confirmed moves; other locations come
          from work, education, volunteering, and conferences.
        </p>
      </footer>
    </main>
  );
}
