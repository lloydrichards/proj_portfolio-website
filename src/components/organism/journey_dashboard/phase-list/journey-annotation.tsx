import { Info } from "lucide-react";
import { formatDate } from "../model/dates";
import type { JourneyRecord } from "../model/types";
import styles from "./journey-annotation.module.css";

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
      className={styles.callout}
      data-selected={selected}
      aria-labelledby={`${record.id}-title`}
    >
      <Info size={18} aria-hidden="true" className={styles.icon} />
      <div>
        <h4 id={`${record.id}-title`}>
          <button
            type="button"
            aria-label={record.title}
            aria-pressed={selected}
            onClick={onSelect}
          >
            <span>{record.title}</span>
            <span
              className={styles.date}
              title={
                record.start.length === 4 ? "Date known to the year" : undefined
              }
            >
              {formatDate(record.start)}
            </span>
          </button>
        </h4>

        <p className={styles.text}>{record.description}</p>
        {selected && record.note && (
          <details className={styles.note}>
            <summary>Date note</summary>
            <p>{record.note}</p>
          </details>
        )}
      </div>
    </aside>
  );
}
