import { Effect, Schema } from "effect";
import { normalizeJourneyRecords } from "@/components/organism/journey_dashboard/data/records";
import JourneyDashboard from "@/components/organism/journey_dashboard/journey-dashboard";
import { prepareDashboard } from "@/components/organism/journey_dashboard/model/dashboard";
import { createPageMetadata } from "@/lib/seo";
import { Dataset } from "@/services/Dataset/Dataset";
import { RuntimeServer } from "@/services/RuntimeServer";
import { Occupation } from "@/types/Occupation";
import styles from "./journey-page.module.css";

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
  const records = normalizeJourneyRecords(occupations);
  const asOf = new Date().toISOString();
  const data = prepareDashboard(records, asOf);
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Timeline</h1>
      </header>
      <JourneyDashboard data={data} />
      <footer className={styles.footer}>
        <p>
          Personal dates retain their recorded month or year precision. Places
          marked as lived are based on confirmed moves; other locations come
          from work, education, volunteering, and conferences.
        </p>
      </footer>
    </main>
  );
}
