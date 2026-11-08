import { cva } from "class-variance-authority";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDate } from "../model/dates";
import type { JourneyRecord } from "../model/types";

const annotationVariants = cva(
  "relative mt-5 mb-2 grid scroll-mt-10 grid-cols-[20px_minmax(0,1fr)] gap-3 border-l border-primary p-4 focus-visible:outline-none [@media(max-width:960px)]:scroll-mt-[calc(var(--journey-sidebar-height,180px)+56px)]",
  {
    variants: {
      selected: {
        true: "bg-[color-mix(in_srgb,var(--primary)_8%,var(--background))]",
        false: "bg-[color-mix(in_srgb,var(--primary)_5%,var(--background))]",
      },
    },
  },
);

export default function JourneyAnnotation({
  record,
  selected,
  onSelect,
}: {
  record: JourneyRecord;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <aside
      id={`entry-${record.id}`}
      tabIndex={-1}
      className={annotationVariants({ selected })}
      data-selected={selected}
      aria-labelledby={`${record.id}-title`}
    >
      <Info size={18} aria-hidden="true" className="mt-3 text-primary" />
      <div>
        <h4
          id={`${record.id}-title`}
          className={cn(
            "m-0 text-sm font-medium leading-normal",
            selected && "text-primary",
          )}
        >
          <button
            type="button"
            className="grid min-h-11 w-full cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={record.title}
            aria-pressed={selected}
            onClick={onSelect}
          >
            <span>{record.title}</span>
            <span
              className="text-[10px] font-normal whitespace-nowrap text-muted-foreground"
              title={
                record.start.length === 4 ? "Date known to the year" : undefined
              }
            >
              {formatDate(record.start)}
            </span>
          </button>
        </h4>

        <p className="max-w-[65ch] text-[13px] leading-[1.75]">
          {record.description}
        </p>
        {selected && record.note && (
          <details className="mt-2 text-[11px] leading-[1.7]">
            <summary className="min-h-11 cursor-pointer content-center text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Date note
            </summary>
            <p>{record.note}</p>
          </details>
        )}
      </div>
    </aside>
  );
}
