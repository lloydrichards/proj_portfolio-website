import { Schema } from "effect";
import { describe, expect, it } from "vitest";
import { Project, ProjectMeta } from "./Project";

describe("ProjectMeta", () => {
  it("should support the new awards field", () => {
    const validWithAwards = {
      id: 1,
      title: "Test Project",
      description: "A test project",
      date: new Date().toISOString(),
      category: ["DEVELOP"],
      image: "/test.png",
      awards: [
        {
          award: "Best Design",
          result: "Winner",
        },
      ],
    };

    const result = Schema.decodeUnknownSync(ProjectMeta)(validWithAwards);
    expect(result.awards).toBeDefined();
    expect(result.awards?.[0].award).toBe("Best Design");
    expect(result.awards?.[0].result).toBe("Winner");
  });

  it("should fail if awards structure is incorrect", () => {
    const invalidAwards = {
      id: 1,
      title: "Test Project",
      description: "A test project",
      date: new Date().toISOString(),
      category: ["DEVELOP"],
      image: "/test.png",
      awards: [
        {
          award: "Best Design",
          // Missing result
        },
      ],
    };

    expect(() =>
      Schema.decodeUnknownSync(ProjectMeta)(invalidAwards),
    ).toThrow();
  });
});
