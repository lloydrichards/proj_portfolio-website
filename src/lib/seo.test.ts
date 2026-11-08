import { describe, expect, it } from "vitest";
import { makeOGImageURL } from "../services/utils";
import { siteMetadata } from "./metadata";
import { createOGImageMetadata, createPageMetadata } from "./seo";
import assets from "./social-assets.json";
import { fitCardTitle, wrapCardText } from "./social-card";

describe("social previews", () => {
  it("uses the final image host without relying on a redirect or metadataBase", () => {
    const urls = [siteMetadata.social.socialBanner];
    for (const kind of [
      "page",
      "project",
      "lab",
      "timeline",
      "projects",
      "labs",
      "cv",
    ] as const) {
      const metadata = createPageMetadata({
        title: "Example",
        description: "Example description",
        kind,
      });
      const images = metadata.openGraph?.images as { url: string }[];
      urls.push(images[0].url);
      expect(metadata.twitter).toMatchObject({ images });
    }
    for (const value of urls) {
      const url = new URL(value);
      expect(url.origin).toBe("https://www.lloydrichards.dev");
      expect(url.pathname).toBe("/api/og");
    }
  });
  it("carries a CV variant's role and skills into its matching preview", () => {
    const metadata = createPageMetadata({
      title: "Design Engineer CV",
      description: "Accessible React interfaces",
      kind: "cv",
      social: {
        label: "Design Engineer",
        tags: ["Interaction Design", "React"],
      },
    });
    const images = metadata.openGraph?.images as { url: string }[];
    const url = new URL(images[0].url, "https://lloydrichards.dev");
    expect(Object.fromEntries(url.searchParams)).toMatchObject({
      v: "3",
      kind: "cv",
      label: "Design Engineer",
      tags: "Interaction Design,React",
    });
    expect(metadata).not.toHaveProperty("social");
    expect(metadata.twitter).toMatchObject({ images });
  });
  it("gives ordinary pages the same large, named card on Open Graph and Twitter", () => {
    const metadata = createPageMetadata({
      title: "About",
      description: "About Lloyd",
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      images: metadata.openGraph?.images,
    });
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({
        width: 1200,
        height: 630,
        alt: "About | Lloyd Richards",
        url: expect.stringContaining("title=About"),
      }),
    ]);
  });

  it("selects prepared lab artwork while preserving article metadata", () => {
    const metadata = createOGImageMetadata({
      id: "058",
      title: "RAG Builder",
      description: "Chunkers",
      tags: ["effect"],
      date: "2026-04-02",
    });
    expect(metadata).toMatchObject({
      id: "058",
      date: "2026-04-02",
      tags: ["effect"],
    });
    const image = metadata.openGraph?.images;
    expect(image).toEqual([
      expect.objectContaining({
        url: expect.stringContaining("artwork="),
        alt: "RAG Builder | Lloyd Richards",
      }),
    ]);
    expect(metadata.twitter).toMatchObject({ images: image });
    const relativeOverride = createOGImageMetadata({
      id: "058",
      title: "RAG Builder",
      description: "Chunkers",
      tags: ["effect"],
      date: "2026-04-02",
      socialImage: "./rag-playground.png",
    });
    expect(relativeOverride.openGraph?.images).toEqual(image);
  });

  it("uses a generated fallback when artwork is absent or not prepared", () => {
    for (const artwork of [
      undefined,
      "https://example.com/untrusted.png",
      "/images/missing.png",
    ]) {
      const url = new URL(
        makeOGImageURL({
          title: "An experiment",
          description: "No image",
          kind: "lab",
          artwork,
        }),
        "https://example.com",
      );
      expect(url.searchParams.get("kind")).toBe("lab");
      expect(url.searchParams.has("artwork")).toBe(false);
    }
  });

  it("uses an explicit artwork selection instead of another article's default", () => {
    const source = "/images/projects/2601/sme-policy-index-01.png";
    const metadata = createOGImageMetadata({
      id: "058",
      title: "Example",
      description: "Example",
      tags: [],
      date: "2026-04-02",
      socialImage: source,
    });
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({
        url: expect.stringContaining(
          encodeURIComponent(assets.artwork[source]),
        ),
      }),
    ]);
  });

  it("keeps unusually long words and descriptions inside the image's line budget", () => {
    const lines = wrapCardText("x".repeat(300), 24, 3);
    expect(lines).toHaveLength(3);
    expect(lines.every((line) => line.length <= 24)).toBe(true);
    expect(lines[2].endsWith("…")).toBe(true);
    const fitted = fitCardTitle(
      "A long title about building a filesystem and preserving useful behavior across many adapters",
      344,
      292,
      54,
    );
    expect(fitted.lines.join(" ")).toContain("filesystem");
    expect(fitted.lines.length * fitted.size * 1.12).toBeLessThanOrEqual(292);
  });
});
