"use client";
import { ArrowUp } from "lucide-react";
import { recordsForSection } from "../model/phase-entries";
import { type JourneyPhase, lanes } from "../model/types";
import PhaseTimeline from "../timeline/phase-timeline";
import type { TimelineData } from "../timeline/timeline-data";
import JourneyAnnotation from "./journey-annotation";
import JourneyCard from "./journey-card";
import styles from "./phase-list.module.css";
import PhasePlaces from "./phase-places";

export default function PhaseList({
  phases,
  selectedRecordId,
  activePhaseId,
  onPhaseMount,
  timeline,
  onSelectRecord,
}: {
  phases: JourneyPhase[];
  timeline: TimelineData;
  onSelectRecord: (
    id: string,
    phaseId?: string,
    scrollToEntry?: boolean,
  ) => void;
  selectedRecordId: string | null;
  activePhaseId: string;
  onPhaseMount?: (id: string, element: HTMLElement | null) => void;
}) {
  return (
    <div className={styles.narrative} id="journey-stories" tabIndex={-1}>
      {phases.map((phase, index) => {
        return (
          <article
            ref={(element) => {
              onPhaseMount?.(phase.id, element);
            }}
            className={styles.story}
            key={phase.id}
            id={phase.id}
            data-chapter={phase.id}
            tabIndex={-1}
            aria-labelledby={`${phase.id}-title`}
          >
            <h2 id={`${phase.id}-title`}>{phase.title}</h2>
            {phase.subtitle && (
              <p className={styles.phaseSubtitle}>{phase.subtitle}</p>
            )}

            <PhasePlaces phase={phase} />
            <PhaseTimeline
              phase={phase}
              data={timeline}
              selectedRecordId={selectedRecordId}
              onSelectRecord={onSelectRecord}
            />
            {lanes
              .filter((lane) => lane !== "Places")
              .map((lane) => {
                const entries = recordsForSection(phase, lane);
                return (
                  entries.length > 0 && (
                    <section
                      key={lane}
                      className={styles.entryGroup}
                      aria-label={`${phase.label} ${lane}`}
                    >
                      <h3>{lane}</h3>
                      {entries.map((record) => {
                        const continuing = phase.continuing.includes(record);
                        if (record.annotation)
                          return (
                            <JourneyAnnotation
                              key={record.id}
                              record={record}
                              selected={
                                activePhaseId === phase.id &&
                                selectedRecordId === record.id
                              }
                              onSelect={() =>
                                onSelectRecord(record.id, undefined, false)
                              }
                            />
                          );
                        return (
                          <JourneyCard
                            key={record.id}
                            record={record}
                            phaseId={phase.id}
                            continuing={continuing}
                            selected={
                              activePhaseId === phase.id &&
                              selectedRecordId === record.id
                            }
                            onSelect={() =>
                              onSelectRecord(
                                record.id,
                                continuing ? phase.id : undefined,
                                false,
                              )
                            }
                          />
                        );
                      })}
                    </section>
                  )
                );
              })}
            {index === phases.length - 1 && (
              <nav
                className={styles.storyNav}
                aria-label="Return to the present"
              >
                <a href={`#${phases[0].id}`}>
                  Back to the present <ArrowUp size={16} />
                </a>
              </nav>
            )}
          </article>
        );
      })}
    </div>
  );
}
