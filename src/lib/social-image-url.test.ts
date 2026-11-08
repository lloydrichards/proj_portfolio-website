import { describe, expect, it } from "vitest";
import { socialImageParams, socialImageURL } from "./social-image-url";

describe("query-free social image URLs", () => {
  it("preserves Unicode, punctuation and every render input through a proxy URL", () => {
    const inputs = new URLSearchParams({
      kind: "lab",
      title: "Zürich / 東京 🌍 & tools?",
      description: "A+B = C #1",
      tags: "React,Effect",
      artwork: "/images/social/artwork/example.png",
      date: "2026",
      label: "Lab 058",
    });
    const image = new URL(socialImageURL(inputs));
    const proxy = new URL(
      `https://example.com/preview?image=${image.href}&id=deployment`,
    );
    const received = new URL(proxy.searchParams.get("image") ?? "");
    expect(received.href).toBe(image.href);
    expect(received.search).toBe("");
    expect(
      socialImageParams(received.pathname.split("/").at(-1) ?? ""),
    ).toEqual(inputs);
  });

  it("uses a stable named homepage image and distinct paths for different cards", () => {
    expect(socialImageURL(new URLSearchParams({ kind: "home" }))).toBe(
      "https://www.lloydrichards.dev/api/og/v4/home.png",
    );
    const first = new URLSearchParams({ kind: "page", title: "First" });
    expect(socialImageURL(first)).toBe(socialImageURL(first));
    expect(socialImageURL(first)).not.toBe(
      socialImageURL(new URLSearchParams({ kind: "page", title: "Second" })),
    );
  });

  it("rejects malformed, oversized and non-string render payloads", () => {
    for (const card of [
      "missing",
      "../home.png",
      "!.png",
      "a.png",
      `${"a".repeat(8193)}.png`,
      `${btoa("null")}.png`,
      `${btoa("[]")}.png`,
      `${btoa('{"title":42}')}.png`,
    ]) {
      expect(socialImageParams(card)).toBeUndefined();
    }
  });
});
