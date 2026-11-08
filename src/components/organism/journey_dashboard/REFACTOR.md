# Timeline refactor contracts

The accepted design is committed on `codex/timeline-baseline`. Refactoring preserves its content, appearance, and interaction behavior.

## Data

`src/types/Journey.ts` defines the authored-data payload. The persistence implementation adds runtime validation at the database boundary. Dates retain `YYYY`, `YYYY-MM`, or `YYYY-MM-DD` precision; visits are moments, residence departures are exclusive, and the final residence remains open. Residence departures derive from the next arrival rather than a second authored date.

Public record IDs remain `cv-*`, `place-*`, and `event-*`. Phase IDs remain trigger-derived. The existing `JourneyRecord` and `JourneyDashboardData` outputs remain compatible. SQL occupation IDs back editorial links; projection restores public references such as `cv-10` and `cv-14`.

SQL owns occupations, residence and visit episodes, annotations, and city identities. A validated server service supplies these facts. Views never fetch. Phase generation and country geometry remain code and static assets. Migration preserves exact copy, uncertainty notes, and city provenance. Repeated stays share a city identity without sharing an episode ID.

## Components

Use Tailwind, `cn`, and meaningful `cva` variants. Reuse suitable atoms; retain domain components when existing atoms would require resets. Dynamic geometry, projection, and measured placement can remain inline values. Do not introduce broad descendant overrides or a class-name lookup that mechanically preserves an entire obsolete stylesheet.

Child props and callbacks remain stable during parallel work. The list worker owns `phase-list/*`; the chart worker owns timeline and globe TSX and styles. The persistence worker owns authored data, database/services, normalization, geography injection, and server route loading. The integration owner handles dashboard shell, navigation, shared contracts, and final documentation.

## Interactions and layout

Keep the exact 960px compact-layout boundary and existing short-screen conditions. Preserve `--journey-sidebar-height`, public anchors, focus targets, lane terminology, nearest-mark hit testing, and accurate date coordinates. Card titles toggle in place; timeline selections navigate once to the appropriate card; phase navigation respects reduced motion. Only the selected entry in the active phase expands. The globe follows phase homes or the selected location.

## Validation

Run journey unit tests, type checking, and scoped Biome checks. Persistence checks use disposable SQLite, compare normalized output at a fixed date, validate editorial targets, and prove seed idempotence. Browser review covers desktop, tablet, narrow mobile, and short screens, including selection, deselection, keyboard focus, sticky section headings, places dismissal, and globe focus.

Workers use separate worktrees based on `codex/timeline-contracts`, commit only assigned files through GitButler, and return commit IDs with validation results. The integration owner combines branches sequentially. No worker changes the live database or unrelated LinkedIn icon edits.
