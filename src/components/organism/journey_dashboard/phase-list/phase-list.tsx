"use client";
import { ArrowUp } from "lucide-react";
import { recordsForSection } from "../model/phase-entries";
import { type JourneyPhase, lanes } from "../model/types";
import PhaseTimeline from "../timeline/phase-timeline";
import type { TimelineData } from "../timeline/timeline-data";
import JourneyAnnotation from "./journey-annotation";
import JourneyCard from "./journey-card";

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
    <div
      className="relative isolate z-0 min-w-0 scroll-mt-10 [@media(max-width:960px)]:scroll-mt-[calc(var(--journey-sidebar-height,180px)+20px)]"
      id="journey-stories"
      tabIndex={-1}
    >
      {phases.map((phase, index) => {
        return (
          <article
            ref={(element) => {
              onPhaseMount?.(phase.id, element);
            }}
            className="scroll-mt-10 border-b border-border pt-2 pb-10 [&+article]:pt-10 last:min-h-[calc(100dvh-48px)] [@media(max-width:960px)]:scroll-mt-[calc(var(--journey-sidebar-height,180px)+20px)] [@media(max-width:960px)]:pt-6 [@media(max-width:960px)]:pb-7 [@media(max-width:960px)]:[&+article]:pt-7 [@media(max-width:960px)]:last:min-h-[calc(100dvh-var(--journey-sidebar-height,180px)-40px)]"
            key={phase.id}
            id={phase.id}
            data-chapter={phase.id}
            tabIndex={-1}
            aria-labelledby={`${phase.id}-title`}
          >
            <h2
              id={`${phase.id}-title`}
              className="my-5 text-[clamp(26px,3.2vw,40px)] font-medium leading-[1.2] tracking-[-0.03em] text-balance [@media(max-width:960px)]:mt-4 [@media(max-width:960px)]:mb-4.5 [@media(max-width:960px)]:text-[27px]"
            >
              {phase.title}
            </h2>
            {phase.subtitle && (
              <p className="mb-3 text-[15px] leading-[1.7] [@media(max-width:960px)]:text-sm">
                {phase.subtitle}
              </p>
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
                      className="mt-8 [@media(max-width:960px)]:mt-10"
                      aria-label={`${phase.label} ${lane}`}
                    >
                      <h3 className="border-b border-border pb-2.5 text-[13px] font-medium text-primary [@media(max-width:960px)]:sticky [@media(max-width:960px)]:top-(--journey-sidebar-height,180px) [@media(max-width:960px)]:z-4 [@media(max-width:960px)]:flex [@media(max-width:960px)]:h-10 [@media(max-width:960px)]:items-center [@media(max-width:960px)]:bg-background [@media(max-width:960px)]:p-0">
                        {lane}
                      </h3>
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
                className="mt-6 [@media(max-width:960px)]:mt-5"
                aria-label="Return to the present"
              >
                <a
                  className="inline-flex min-h-11 items-center justify-between gap-4 text-xs leading-[1.7] text-primary"
                  href={`#${phases[0].id}`}
                >
                  Back to the present <ArrowUp size={16} className="shrink-0" />
                </a>
              </nav>
            )}
          </article>
        );
      })}
    </div>
  );
}
