# Personal annotations

`events.ts` supplies brief context about a moment in the journey. Conferences remain CV activities; these annotations are personal recollections, not another employment or education record.

| Field | Purpose |
| --- | --- |
| `id` | Stable identity used by timeline links. Keep existing IDs when rewriting copy. |
| `date` | Year, month, or day actually known. Never invent a month to place a marker. |
| `kind` | `pivot` or `learning`, describing the event. All callouts share an info icon. |
| `contextLane` | Work, Volunteer, or Education section where the annotation belongs. |
| `phaseLeadFor` | Optional work/education record ID whose phase this annotation explicitly begins. Extends that phase boundary without changing source dates. |
| `afterRecordId` | Optional record ID to place the callout directly below, overriding ordinary section date order. |
| `title` | Short description of the moment. |
| `text` | One brief, factual blurb explaining its significance. |
| `location` | Optional explicit location; do not infer one from the phase. |
| `dateNote` | Optional uncertainty or conflicting evidence, available from the selected callout. |

Annotations are interleaved newest-first with records in their context section. They stay visible as icon-and-text callouts, without an Events section or expandable description. Selecting the title or timeline diamond highlights the same annotation. With no explicit location, the globe retains phase geography.

The seven current annotations use month-level dates supplied by Lloyd. The April 2013 sabbatical replaces the earlier year-only departure account and resolves its mismatch with the master's CV end date. UK, Berlin, Switzerland internship, and startup-transition dates retain notes where the residence or CV dataset differs. Those underlying datasets are unchanged. Existing departure and coding IDs remain stable. The February 2020 annotation describes personal experience as COVID-19 emerged, rather than asserting a formal pandemic declaration date.

Future candidates could include a career pivot, the beginning of a skill, or a significant decision that explains surrounding records. These are authoring ideas, not additional biographical claims or placeholder records.

Selection uses the callout left rule, a soft background, and a colored title rather than a full rectangular border. The date sits beside the title; year-only precision is retained in the data and date tooltip.

The January 2019 Berlin learning event explicitly begins the phase anchored by `cv-10`. The landscaping-business annotation appears directly after the Lloyd Richards Design role, `cv-14`, while retaining its September 2016 date.
