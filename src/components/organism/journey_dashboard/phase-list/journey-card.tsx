import { cva } from "class-variance-authority";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { recordDates } from "../model/dates";
import { recordPresentation } from "../model/record-presentation";
import type { JourneyRecord } from "../model/types";

const cardVariants = cva(
  "relative scroll-mt-10 focus-visible:outline-none after:pointer-events-none after:absolute after:inset-0 after:rounded after:border-primary focus-visible:after:border [@media(max-width:960px)]:scroll-mt-[calc(var(--journey-sidebar-height,180px)+56px)]",
  {
    variants: {
      layout: {
        standard: "p-5 [@media(max-width:960px)]:p-4",
        home: "min-w-0 flex-[1_1_130px] border-0 px-3 py-2 [@media(max-width:960px)]:scroll-mt-[calc(var(--journey-sidebar-height,180px)+24px)]",
      },
      selected: {
        true: "bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] after:border",
        false: "",
      },
    },
  },
);

export default function JourneyCard({
  record,
  phaseId,
  continuing = false,
  selected = false,
  onSelect,
}: {
  record: JourneyRecord;
  phaseId?: string;
  continuing?: boolean;
  selected?: boolean;
  onSelect: () => void;
}) {
  const { type, heading, secondary } = recordPresentation(record);
  const id =
    continuing && phaseId
      ? `${phaseId}-entry-${record.id}`
      : `entry-${record.id}`;
  return (
    <div
      id={id}
      tabIndex={-1}
      className={cn(
        cardVariants({
          layout: type === "home" ? "home" : "standard",
          selected,
        }),
      )}
      data-card-type={type}
      data-continuing={continuing}
      data-selected={selected}
      data-source={record.source}
    >
      <h4
        className={cn(
          "mb-0.5 text-[17px] font-medium leading-normal [@media(max-width:960px)]:text-base",
          type === "activity" && "text-base",
          type === "turning-point" && "text-balance",
          type === "home" &&
            "mb-0 text-[13px] [@media(max-width:960px)]:text-[13px]",
        )}
      >
        <button
          type="button"
          className="flex min-h-11 w-full cursor-pointer items-center gap-1.5 text-left font-[inherit] leading-[inherit] hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-primary aria-pressed:text-primary"
          onClick={onSelect}
          aria-pressed={selected}
          aria-expanded={selected}
          aria-controls={`${id}-details`}
        >
          {type === "home" && <MapPin size={14} aria-hidden="true" />}
          <span>{heading}</span>
        </button>
      </h4>
      {secondary && type !== "home" && (
        <p className="text-xs leading-[1.7]">{secondary}</p>
      )}
      <div
        className={cn(
          "mt-1.5 flex flex-wrap justify-start gap-x-4 gap-y-1 text-[11px] leading-[1.7] text-muted-foreground tabular-nums",
          type === "home" && "mt-0",
        )}
      >
        <span>{recordDates(record)}</span>
        {record.location && type !== "home" && (
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} aria-hidden="true" className="shrink-0" />
            {record.location}
          </span>
        )}
        {continuing && type !== "home" && (
          <span className="text-[10px] text-muted-foreground">
            Already underway
          </span>
        )}
      </div>
      <div id={`${id}-details`} hidden={!selected}>
        {selected && (
          <>
            {record.description && type !== "home" && (
              <p className="mt-3 max-w-[65ch] text-[13px] leading-[1.75]">
                {record.description}
              </p>
            )}
            {type === "home" && (
              <p className="mt-2.5 block text-[11px] text-muted-foreground">
                {record.placeKind === "visited" ? "Visited" : "Lived here"}
              </p>
            )}
            {record.source === "Personal account" && type !== "home" && (
              <small className="mt-2.5 block text-[11px] text-muted-foreground">
                Personal account
                {record.start.length === 4 ? " · approximate year" : ""}
              </small>
            )}
            {record.note && (
              <p className="mt-3 rounded bg-card p-3 text-xs leading-[1.8]">
                {record.note}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
