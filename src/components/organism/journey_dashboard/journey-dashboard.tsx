"use client";
import { X } from "lucide-react";
import { useMemo } from "react";
import styles from "./dashboard.module.css";
import { prepareGlobeData } from "./globe/globe-data";
import JourneyGlobe, { GlobeKey } from "./globe/journey-globe";
import type { JourneyDashboardData } from "./model/dashboard";
import { recordDates } from "./model/dates";
import { recordPresentation } from "./model/record-presentation";
import PhaseList from "./phase-list/phase-list";
import JourneyTimeline from "./timeline/journey-timeline";
import { prepareTimelineData } from "./timeline/timeline-data";
import { useJourneyNavigation } from "./use-journey-navigation";

export default function JourneyDashboard({
  data,
}: {
  data: JourneyDashboardData;
}) {
  const navigation = useJourneyNavigation(data.phases);
  const activePhase =
    data.phases.find((phase) => phase.id === navigation.activePhaseId) ??
    data.phases[0];
  const timeline = useMemo(() => prepareTimelineData(data), [data]);
  const globe = useMemo(
    () =>
      activePhase
        ? prepareGlobeData(
            data.records,
            activePhase,
            navigation.selectedRecordId,
          )
        : null,
    [data.records, activePhase, navigation.selectedRecordId],
  );
  const selectedRecord = data.records.find(
    (record) => record.id === navigation.selectedRecordId,
  );
  if (!activePhase || !globe)
    return <p>No journey records are available yet.</p>;
  return (
    <>
      <div className={styles.atlas} ref={navigation.layoutRef}>
        <aside
          className={styles.map}
          ref={navigation.sidebarRef}
          aria-label="Journey map"
        >
          <div className={styles.mapHeading}>
            <span className={styles.activeYear}>{activePhase.label}</span>
            <span className={styles.activeTitle}>
              {activePhase.subtitle || activePhase.title}
            </span>
            <div className={styles.selection} data-selected={!!selectedRecord}>
              {selectedRecord ? (
                <button
                  type="button"
                  onClick={navigation.clearSelection}
                  aria-label={`Clear ${recordPresentation(selectedRecord).heading} and follow phase`}
                  title="Follow phase"
                >
                  <span>{recordPresentation(selectedRecord).heading}</span>
                  <X size={15} aria-hidden="true" />
                </button>
              ) : (
                <span className={styles.phasePlaces}>{globe.caption}</span>
              )}
            </div>
          </div>
          <JourneyGlobe data={globe} />
          <GlobeKey mobile />
          <JourneyTimeline
            data={timeline}
            activePhase={activePhase}
            selectedRecordId={navigation.selectedRecordId}
            onSelectPhase={navigation.selectPhase}
            onSelectRecord={navigation.selectRecord}
          />
        </aside>
        <PhaseList
          phases={data.phases}
          activePhaseId={activePhase.id}
          timeline={timeline}
          onSelectRecord={navigation.selectRecord}
          selectedRecordId={navigation.selectedRecordId}
          onPhaseMount={navigation.registerPhase}
        />
      </div>
      <details className={styles.residenceHistory}>
        <summary>All places lived</summary>
        <ol>
          {data.records
            .filter((record) => record.placeKind === "lived")
            .sort((a, b) => a.start.localeCompare(b.start))
            .map((record) => (
              <li key={record.id}>
                <span>{record.location}</span>
                <small>{recordDates(record)}</small>
              </li>
            ))}
        </ol>
      </details>
    </>
  );
}
