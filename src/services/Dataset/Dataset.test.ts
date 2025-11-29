import { it } from "@effect/vitest";
import { Effect } from "effect";
import { beforeEach, describe, expect, vi } from "vitest";
import { Occupation } from "@/types/Occupation";
import { DrizzleLive } from "../db";
import { Dataset } from "./Dataset";
import * as GetAllOccupations from "./get-all-occupations";
import * as GetSkillData from "./get-skill-data";
import { SkillData } from "./get-skill-data";

// Mock data for the tests
const mockOccupations = [
  new Occupation({
    id: 1,
    title: "Software Engineer",
    company: "Tech Co",
    description: "Building web apps",
    longDescription: "Detailed description here",
    tasks: ["Coding", "Testing"],
    isFeatures: true,
    start_date: new Date("2023-01-01"),
    end_date: null,
    category: "TECHNOLOGY",
    skills: ["TypeScript", "React"],
    attributes: ["Teamwork", "Leadership"],
    location: "Remote",
    pensum: 100,
  }),
  new Occupation({
    id: 2,
    title: "Project Manager",
    company: "Agency",
    description: "Managing projects",
    longDescription: "Detailed PM description",
    tasks: ["Planning", "Coordination"],
    isFeatures: true,
    start_date: new Date("2022-01-01"),
    end_date: new Date("2022-12-31"),
    category: "MANAGEMENT",
    skills: ["Agile", "Scrum"],
    attributes: ["Organization", "Communication"],
    location: "Office",
    pensum: 100,
  }),
  new Occupation({
    id: 3,
    title: "Designer",
    company: "Creative Studio",
    description: "UI/UX Design",
    longDescription: "Detailed design description",
    tasks: ["Wireframing", "Prototyping"],
    isFeatures: false,
    start_date: new Date("2021-01-01"),
    end_date: new Date("2021-12-31"),
    category: "DESIGN",
    skills: ["Figma", "Sketch"],
    attributes: ["Creativity", "Attention to detail"],
    location: "Hybrid",
    pensum: 100,
  }),
];

const mockSkills = [
  new SkillData({
    type: "Frontend",
    name: "React",
    description: "React library",
    pensum: 100,
    factor: 0.5,
    date: "2023-01-15T00:00:00.000Z",
  }),
  new SkillData({
    type: "Backend",
    name: "Node.js",
    description: "Node.js runtime",
    pensum: 100,
    factor: 0.5,
    date: "2023-02-15T00:00:00.000Z",
  }),
];

describe("Dataset", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe("allOccupations", () => {
    it.effect("should provide all occupations", () =>
      Effect.gen(function* () {
        // Setup mocks
        vi.spyOn(GetAllOccupations, "getAllOccupations", "get").mockReturnValue(
          Effect.succeed(mockOccupations),
        );

        // Execute
        const dataset = yield* Dataset;
        const result = yield* dataset.allOccupations();

        // Assert
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(3);
        mockOccupations.forEach((occupation, idx) => {
          expect(result[idx]).toBeInstanceOf(Occupation);
          expect(result[idx].title).toBe(occupation.title);
        });
      }).pipe(Effect.provide([Dataset.Default, DrizzleLive])),
    );
    it.effect("should handle empty occupations", () =>
      Effect.gen(function* () {
        // Setup mocks
        vi.spyOn(GetAllOccupations, "getAllOccupations", "get").mockReturnValue(
          Effect.succeed([]),
        );

        // Execute
        const dataset = yield* Dataset;
        const result = yield* dataset.currentCurriculumVitae();

        // Assert
        expect(Object.keys(result)).toHaveLength(0);
      }).pipe(Effect.provide([Dataset.Default, DrizzleLive])),
    );
  });

  describe("currentCurriculumVitae", () => {
    it.effect("should provide current curriculum vitae", () =>
      Effect.gen(function* () {
        // Setup mocks
        vi.spyOn(GetAllOccupations, "getAllOccupations", "get").mockReturnValue(
          Effect.succeed(mockOccupations),
        );

        // Execute
        const dataset = yield* Dataset;
        const result = yield* dataset.currentCurriculumVitae();

        // Assert
        const keys = Object.keys(result);
        expect(keys).toHaveLength(2); // TECHNOLOGY and MANAGEMENT categories
        expect(result.TECHNOLOGY).toBeDefined();
        expect(result.MANAGEMENT).toBeDefined();
        expect(result.TECHNOLOGY[0].title).toBe("Software Engineer");
        expect(result.MANAGEMENT[0].title).toBe("Project Manager");

        // DESIGN category should not be included since the Designer has isFeatures=false
        expect(result.DESIGN).toBeUndefined();
      }).pipe(Effect.provide([Dataset.Default, DrizzleLive])),
    );
  });

  describe("skillDataset", () => {
    it.effect("should provide skill dataset", () =>
      Effect.gen(function* () {
        // Setup mocks
        vi.spyOn(GetSkillData, "getSkillData", "get").mockReturnValue(
          Effect.succeed(mockSkills),
        );

        // Execute
        const dataset = yield* Dataset;
        const result = yield* dataset.skillDataset();

        // Assert
        expect(result).toHaveLength(mockSkills.length);
        mockSkills.forEach((skill, idx) => {
          expect(result[idx]).toBeInstanceOf(SkillData);
          expect(result[idx].name).toBe(skill.name);
        });
      }).pipe(Effect.provide([Dataset.Default, DrizzleLive])),
    );

    it.effect("should handle empty skill dataset", () =>
      Effect.gen(function* () {
        // Setup mocks
        vi.spyOn(GetSkillData, "getSkillData", "get").mockReturnValue(
          Effect.succeed([]),
        );

        // Execute
        const dataset = yield* Dataset;
        const result = yield* dataset.skillDataset();

        // Assert
        expect(result).toHaveLength(0);
      }).pipe(Effect.provide([Dataset.Default, DrizzleLive])),
    );

    it.effect("should maintain data integrity of skill properties", () =>
      Effect.gen(function* () {
        // Setup mocks with specific data to test
        const detailedSkills = [
          new SkillData({
            type: "Frontend",
            name: "React",
            description: "React library",
            pensum: 80,
            factor: 0.8,
            date: "2023-01-15T00:00:00.000Z",
          }),
          new SkillData({
            type: "Backend",
            name: "Node.js",
            description: "Node.js runtime",
            pensum: 60,
            factor: 0.6,
            date: "2023-02-15T00:00:00.000Z",
          }),
        ];

        vi.spyOn(GetSkillData, "getSkillData", "get").mockReturnValue(
          Effect.succeed(detailedSkills),
        );

        // Execute
        const dataset = yield* Dataset;
        const result = yield* dataset.skillDataset();

        // Assert detailed property checks
        expect(result).toHaveLength(detailedSkills.length);
        result.forEach((skill, idx) => {
          expect(skill.type).toBe(detailedSkills[idx].type);
          expect(skill.name).toBe(detailedSkills[idx].name);
          expect(skill.description).toBe(detailedSkills[idx].description);
          expect(skill.pensum).toBe(detailedSkills[idx].pensum);
          expect(skill.factor).toBe(detailedSkills[idx].factor);
          expect(skill.date).toBe(detailedSkills[idx].date);
        });
      }).pipe(Effect.provide([Dataset.Default, DrizzleLive])),
    );

    it.effect("should group skills by type when requested", () =>
      Effect.gen(function* () {
        // Setup mocks with multiple types
        const mixedSkills = [
          new SkillData({
            type: "Frontend",
            name: "React",
            description: "React library",
            pensum: 100,
            factor: 0.5,
            date: "2023-01-15T00:00:00.000Z",
          }),
          new SkillData({
            type: "Frontend",
            name: "Angular",
            description: "Angular framework",
            pensum: 75,
            factor: 0.4,
            date: "2023-01-20T00:00:00.000Z",
          }),
          new SkillData({
            type: "Backend",
            name: "Node.js",
            description: "Node.js runtime",
            pensum: 100,
            factor: 0.5,
            date: "2023-02-15T00:00:00.000Z",
          }),
          new SkillData({
            type: "DevOps",
            name: "Docker",
            description: "Containerization",
            pensum: 80,
            factor: 0.3,
            date: "2023-03-10T00:00:00.000Z",
          }),
        ];

        vi.spyOn(GetSkillData, "getSkillData", "get").mockReturnValue(
          Effect.succeed(mixedSkills),
        );

        // Execute
        const dataset = yield* Dataset;
        const result = yield* dataset.skillDataset();

        // Group by type manually to verify
        const groupedByType = result.reduce<Record<string, SkillData[]>>(
          (acc, skill) => {
            acc[skill.type] = acc[skill.type] || [];
            acc[skill.type].push(skill);
            return acc;
          },
          {},
        );

        // Assert
        expect(result).toHaveLength(mixedSkills.length);
        expect(Object.keys(groupedByType)).toHaveLength(3); // Frontend, Backend, DevOps
        expect(groupedByType.Frontend).toHaveLength(2);
        expect(groupedByType.Backend).toHaveLength(1);
        expect(groupedByType.DevOps).toHaveLength(1);
      }).pipe(Effect.provide([Dataset.Default, DrizzleLive])),
    );
  });
});
