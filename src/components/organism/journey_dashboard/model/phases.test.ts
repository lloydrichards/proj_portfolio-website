import { describe, expect, it } from "vitest";
import { buildPhases } from "./phases";
import type { JourneyRecord } from "./types";

const role = (
  id: string,
  start: string,
  end: string | null,
  extra: Partial<JourneyRecord> = {},
): JourneyRecord => ({
  id,
  start,
  end,
  organization: id,
  title: id,
  lane: "Work",
  location: "",
  description: "",
  kind: "period",
  source: "CV database",
  commitment: 100,
  ...extra,
});
const move = (id: string, year: string): JourneyRecord =>
  role(id, year, year, {
    kind: "moment",
    lane: "Places",
    source: "Personal account",
    location: id,
  });
const asOf = "2026-11-08";
describe("phases generated from changes", () => {
  it("keeps moves inside the ongoing work phase", () => {
    const phases = buildPhases(
      [
        role("work", "2016-04-01", null),
        move("germany", "2018"),
        move("switzerland", "2019"),
      ],
      asOf,
    );
    expect(phases).toHaveLength(1);
    expect(phases[0].start).toBe("2016-04-01");
    expect(phases[0].title).toBe("work");
    expect(phases[0].started.map((record) => record.id).sort()).toEqual([
      "germany",
      "switzerland",
      "work",
    ]);
  });
  it("keeps study side jobs and volunteering in the study phase", () => {
    const chapters = buildPhases(
      [
        role("degree", "2006-09-01", "2011-04-21", { lane: "Education" }),
        role("shop", "2009-09-01", "2011-04-21", { commitment: 60 }),
        role("community", "2010-01-01", null, { lane: "Volunteer" }),
      ],
      asOf,
    );
    expect(chapters).toHaveLength(1);
    expect(chapters[0].title).toBe("degree");
    expect(chapters[0].started.map((record) => record.id).sort()).toEqual([
      "community",
      "degree",
      "shop",
    ]);
  });
  it("retains promotions and adjacent same-role employers within the same phase", () => {
    const chapters = buildPhases(
      [
        role("intern", "2020-01-01", "2020-06-30", {
          organization: "A",
          title: "Intern",
        }),
        role("intern-b", "2020-08-01", "2021-03-31", {
          organization: "B",
          title: "Intern",
        }),
        role("specialist", "2021-04-01", "2023-01-31", { organization: "B" }),
      ],
      asOf,
    );
    expect(chapters).toHaveLength(1);
    expect(chapters[0].started).toHaveLength(3);
    expect(chapters[0].title).toBe("specialist");
  });
  it("groups nearby work and education changes, but splits a later new employer", () => {
    const chapters = buildPhases(
      [
        role("study", "2012-09-01", "2013-04-21", { lane: "Education" }),
        role("work", "2013-09-01", "2013-12-21"),
        role("later", "2015-08-01", null),
      ],
      asOf,
    );
    expect(chapters.map((chapter) => chapter.start)).toEqual([
      "2015-08-01",
      "2012-09-01",
    ]);
    expect(chapters[1].reason).toContain("Education change + Work change");
  });
  it("preserves approximate move dates without changing work boundaries", () => {
    const phases = buildPhases(
      [role("work", "2018-03-01", null), move("move", "2019")],
      asOf,
    );
    expect(phases).toHaveLength(1);
    expect(phases[0].start).toBe("2018-03-01");
    expect(
      phases[0].started.find((record) => record.id === "move")?.start,
    ).toBe("2019");
  });
  it("assigns every entry once, carrying only periods that still overlap", () => {
    const records = [
      role("long", "2016-01-01", "2019-12-31"),
      role("next", "2020-01-01", null),
      role("finished", "2016-02-01", "2017-01-01", { lane: "Volunteer" }),
      move("move", "2019"),
      role("future", "2030-01-01", null),
    ];
    const chapters = buildPhases(records, asOf);
    expect(
      chapters
        .flatMap((chapter) => chapter.started.map((record) => record.id))
        .sort(),
    ).toEqual(["finished", "long", "move", "next"]);
    expect(chapters[0].continuing).toEqual([]);
  });
  it("retains a short or non-work history without requiring a major role", () => {
    const chapters = buildPhases(
      [role("volunteer", "2010-01-01", "2010-02-01", { lane: "Volunteer" })],
      asOf,
    );
    expect(chapters).toHaveLength(1);
    expect(chapters[0].started[0].id).toBe("volunteer");
  });
  it("does not split an ongoing main role for a part-time overlapping job", () => {
    expect(
      buildPhases(
        [
          role("main", "2020-01-01", null),
          role("side", "2022-07-01", "2023-04-30", { commitment: 40 }),
        ],
        asOf,
      ),
    ).toHaveLength(1);
  });
  it("does not turn a visit into a move or split a work phase", () => {
    const records = [
      role("work", "2016-01-01", null),
      {
        ...move("visit", "2019"),
        placeKind: "visited" as const,
      },
    ];
    const phases = buildPhases(records, asOf);
    expect(phases).toHaveLength(1);
    expect(phases[0].started.map((record) => record.id).sort()).toEqual([
      "visit",
      "work",
    ]);
  });
  it("carries the correct home into the next work phase without using moves as boundaries", () => {
    const records = [
      role("baseline", "2017-01-01", "2019-12-31"),
      role("new-work", "2020-01-01", null),
      {
        ...move("berlin", "2018-12"),
        kind: "period" as const,
        end: "2019-11",
        endExclusive: true,
      },
      {
        ...move("zurich", "2019-11"),
        kind: "period" as const,
        end: null,
        endExclusive: true,
      },
    ];
    const phases = buildPhases(records, asOf);
    expect(phases.map((phase) => phase.start)).toEqual([
      "2020-01-01",
      "2017-01-01",
    ]);
    expect(phases[0].continuing.map((record) => record.id)).toEqual(["zurich"]);
    expect(
      phases[1].started.find((record) => record.id === "berlin")?.start,
    ).toBe("2018-12");
    expect(
      phases[1].started.find((record) => record.id === "zurich")?.start,
    ).toBe("2019-11");
  });
  it("starts the career timeline at the cutoff while preserving the home already underway", () => {
    const home = {
      ...move("home", "2000-03"),
      kind: "period" as const,
      end: "2012-01",
      endExclusive: true,
    };
    const degree = role("degree", "2006-09-01", "2011-04-21", {
      lane: "Education",
    });
    const phases = buildPhases([home, degree], asOf, degree.start);
    expect(phases).toHaveLength(1);
    expect(phases[0].start).toBe("2006-09-01");
    expect(phases[0].started.map((record) => record.id)).toEqual(["degree"]);
    expect(phases[0].continuing.map((record) => record.id)).toEqual(["home"]);
  });
  it("handles an empty history", () => {
    expect(buildPhases([], asOf)).toEqual([]);
  });
});

it("uses an explicit learning lead-in to begin the next phase without changing record dates or phase identity", () => {
  const garden = role("garden", "2015-08", "2018-10");
  const next = role("next", "2019-03", null);
  const learning = role("learning", "2019-01", "2019-01", {
    lane: "Events",
    kind: "moment",
    source: "Personal account",
    annotation: { kind: "learning", contextLane: "Work", phaseLeadFor: "next" },
  });
  const phases = buildPhases([garden, next, learning], asOf);
  expect(phases[0].id).toBe("phase-next");
  expect(phases[0].start).toBe("2019-01");
  expect(phases[0].started.map((record) => record.id)).toContain("learning");
  expect(phases[1].end).toBe("2019-01");
  expect(phases[1].started.map((record) => record.id)).not.toContain(
    "learning",
  );
  expect(next.start).toBe("2019-03");
});
