"use client";
import { X } from "lucide-react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
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
      <div
        className="[--journey-sidebar-height:180px] min-[961px]:grid min-[961px]:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] min-[961px]:items-start min-[961px]:gap-[clamp(32px,6vw,80px)]"
        ref={navigation.layoutRef}
      >
        <aside
          className="sticky top-0 z-5 grid min-w-0 grid-cols-[100px_minmax(0,1fr)] gap-x-3 border-b border-border bg-background py-1.5 min-[961px]:top-6 min-[961px]:z-auto min-[961px]:flex min-[961px]:h-[calc(100dvh-48px)] min-[961px]:max-h-[calc(100dvh-48px)] min-[961px]:flex-col min-[961px]:overflow-y-auto min-[961px]:border-0 min-[961px]:py-0 min-[961px]:scrollbar-thin min-[961px]:[scrollbar-color:var(--border)_var(--background)] [@media(max-width:960px)_and_(max-height:500px)]:grid-cols-[64px_minmax(0,1fr)]"
          ref={navigation.sidebarRef}
          aria-label="Journey map"
        >
          <div className="col-start-2 row-start-1 flex min-h-27.5 min-w-0 flex-col justify-center min-[961px]:min-h-9.5 min-[961px]:shrink-0 min-[961px]:justify-start min-[961px]:gap-1 [@media(max-width:960px)_and_(max-height:500px)]:min-h-16">
            <span className="text-xs leading-normal text-primary tabular-nums min-[961px]:text-[26px] min-[961px]:leading-[1.2]">
              {activePhase.label}
            </span>
            <span className="text-[11px] leading-normal min-[961px]:text-xs [@media(max-width:960px)_and_(max-height:500px)]:hidden">
              {activePhase.subtitle || activePhase.title}
            </span>
            <div
              className={cn(
                "flex h-6 min-h-6 min-w-0 w-full items-center text-[11px] leading-normal text-muted-foreground min-[961px]:block min-[961px]:h-auto",
                !selectedRecord && "min-[961px]:invisible",
              )}
              data-selected={!!selectedRecord}
            >
              {selectedRecord ? (
                <button
                  type="button"
                  className="flex min-h-6 w-full cursor-pointer items-center justify-between gap-2 text-left text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  onClick={navigation.clearSelection}
                  aria-label={`Clear ${recordPresentation(selectedRecord).heading} and follow phase`}
                  title="Follow phase"
                >
                  <span className="truncate">
                    {recordPresentation(selectedRecord).heading}
                  </span>
                  <X size={15} className="shrink-0" aria-hidden="true" />
                </button>
              ) : (
                <span className="line-clamp-2">{globe.caption}</span>
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
      <details className="my-6 border-t border-border pt-4 text-xs">
        <summary className="min-h-11 cursor-pointer content-center">
          All places lived
        </summary>
        <ol className="grid gap-3 py-4">
          {data.records
            .filter((record) => record.placeKind === "lived")
            .sort((a, b) => a.start.localeCompare(b.start))
            .map((record) => (
              <li className="flex justify-between gap-5" key={record.id}>
                <span>{record.location}</span>
                <small className="text-muted-foreground">
                  {recordDates(record)}
                </small>
              </li>
            ))}
        </ol>
      </details>
    </>
  );
}
