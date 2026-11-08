import { MapPin } from "lucide-react";
import { recordDates } from "../model/dates";
import { recordPresentation } from "../model/record-presentation";
import type { JourneyRecord } from "../model/types";
import styles from "./journey-card.module.css";

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
      className={`${styles.entry} ${type === "home" ? styles.home : ""}`}
      data-card-type={type}
      data-continuing={continuing}
      data-selected={selected}
      data-source={record.source}
    >
      <h4>
        <button
          type="button"
          className={styles.selectTitle}
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
        <p className={styles.organization}>{secondary}</p>
      )}
      <div className={styles.entryDate}>
        <span>{recordDates(record)}</span>
        {record.location && type !== "home" && (
          <span className={styles.location}>
            <MapPin size={12} aria-hidden="true" />
            {record.location}
          </span>
        )}
        {continuing && type !== "home" && (
          <span className={styles.status}>Already underway</span>
        )}
      </div>
      <div id={`${id}-details`} hidden={!selected}>
        {selected && (
          <>
            {record.description && type !== "home" && (
              <p className={styles.description}>{record.description}</p>
            )}
            {type === "home" && (
              <p className={styles.source}>
                {record.placeKind === "visited" ? "Visited" : "Lived here"}
              </p>
            )}
            {record.source === "Personal account" && type !== "home" && (
              <small className={styles.source}>
                Personal account
                {record.start.length === 4 ? " · approximate year" : ""}
              </small>
            )}
            {record.note && <p className={styles.dataNote}>{record.note}</p>}
          </>
        )}
      </div>
    </div>
  );
}
