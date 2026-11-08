# Journey dashboard

The route loads CV records and combines them with residence episodes and personal events. The dashboard coordinates a globe, timeline, and phase list; these views do not fetch their own data.

## Data ownership

- `data/records.ts` normalizes source records without changing their date precision.
- `model/dashboard.ts` prepares the visible range and work/education phases.
- `model/phases.ts` generates phases from major work and education transitions. Moves remain geographic context.
- `model/record-presentation.ts` supplies headings for roles, education, activities, turning points, and homes.
- `timeline/timeline-data.ts` scales dates and separates overlapping records. Events shorter than a calendar month render as points, retaining their recorded date ranges in cards.
- `globe/globe-data.ts` resolves city identities, country fallbacks, phase history, and selection focus.

## Interaction

`use-journey-navigation.ts` owns active phase, selected entry, URL navigation, focus, and measured sidebar height. Scrolling updates the phase and clears a selection from another phase. Card titles toggle details in place. Timeline entry selection makes one direct move to the selected card; phase navigation respects reduced motion.

Tablet/mobile phase charts use nearest-mark selection within each lane. `timeline/nearest-mark.ts` measures distance to horizontal bar segments or points, with a 22px cutoff. Empty space beyond that distance does nothing. Each entry retains a keyboard button and focus indicator. There is no entry chooser. Phase-local overlap tracks separate concurrent bars. The desktop overview retains its direct record buttons.

Only the selected card instance within the active phase renders details. Continuing records stay in their lanes with a status label and phase-local anchors. Homes sit below phase headings. Existing public `entry-*`, `phase-*`, and `journey-stories` anchors remain stable.

The globe follows the active phase or selected entry. Dragging is local; changing phase or entry restores automatic focus. Its reset icon does not affect layout. Homes lead camera focus, active countries are highlighted, and earlier countries are muted. The residence archive sits below the dashboard.

## Responsive layout

Through 960px, the dashboard uses full-width phase charts and a compact sticky header. Screens at most 500px tall use a smaller globe and context row. On desktop, selected and unselected contexts reserve equal height so the chart remains stable.

Mobile lane headings stick below the measured header, stopping at their own section boundary. Entry scroll offsets reserve the heading and clearance. Card highlights are internal borders, and the narrative has its own stacking context beneath the dashboard. Cards have inset padding, no individual divider, and larger gaps between sections.

## Geography sources

City coordinates use GeoNames cities15000, retrieved 2026-11-08, under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). See [GeoNames](https://www.geonames.org/) and `data/geographic-places.ts` for city IDs. Country geometry is documented in `data/COUNTRIES.md`. Country-only records use approximate country centers. Repeat stays share geographic identity while retaining separate residence episodes.

The displayed lanes are Work, Volunteer, and Learning. Learning combines education and events for chart layout, while source categories and list sections remain distinct. Short events use diamond markers; education keeps duration bars. Nearby event points stagger vertically without shifting their date coordinates.

Event diamonds use a background-colored outline to remain legible over duration bars. Nearby markers retain their date coordinate while moving vertically on mobile; bar collisions are kept clear.

`phase-list/phase-places.tsx` consolidates phase homes and visits into a compact summary. Tap or keyboard activation opens a non-modal details panel with Lived, Visited, and Work & conferences groups. It is positioned within the viewport without shifting the chart. Close, Escape, and outside taps dismiss it; page scrolling also dismisses it to avoid stale phase details. Internal panel scrolling keeps it open. The globe key distinguishes lived, visited/activity, earlier, and unrecorded countries on mobile as well as desktop.
