import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { SocialCard } from "@/components/social/social-card";
import { siteMetadata } from "@/lib/metadata";
import assets from "@/lib/social-assets.json";
import { type SocialCardKind, socialCardSize } from "@/lib/social-card";

export const runtime = "nodejs";
const fontDirectory = path.join(process.cwd(), "public/fonts/roboto-mono");
const resources = Promise.all([
  readFile(path.join(fontDirectory, "RobotoMono-Regular.ttf")),
  readFile(path.join(fontDirectory, "RobotoMono-Bold.ttf")),
  readFile(path.join(process.cwd(), "public/images/social/globe.svg")),
]);
const allowedArtwork = new Set(Object.values(assets.artwork));

export async function GET(request: Request) {
  try {
    const params = new URL(request.url).searchParams;
    const requestedKind = params.get("kind");
    const kind: SocialCardKind =
      requestedKind === "home" ||
      requestedKind === "project" ||
      requestedKind === "lab"
        ? requestedKind
        : "page";
    const title = (params.get("title") || siteMetadata.title).slice(0, 240);
    const description = (
      params.get("description") || siteMetadata.description
    ).slice(0, 400);
    const tags = (params.get("tags") || "")
      .split(",")
      .filter(Boolean)
      .slice(0, 3)
      .map((tag) => tag.trim().slice(0, 60));
    const [regular, bold, globe] = await resources;
    const artwork = params.get("artwork");
    let image: string | undefined;
    if (artwork && allowedArtwork.has(artwork)) {
      try {
        image = `data:image/png;base64,${(await readFile(path.join(process.cwd(), "public", artwork))).toString("base64")}`;
      } catch {
        // Artwork is optional; the title and metadata still form a complete card.
      }
    }
    const props = {
      kind,
      title,
      description,
      tags,
      label: params.get("label")?.slice(0, 80),
      date: params.get("date")?.slice(0, 50),
      globe: `data:image/svg+xml;base64,${globe.toString("base64")}`,
    };
    const render = async (artworkImage?: string) => {
      const response = new ImageResponse(
        <SocialCard {...props} image={artworkImage} />,
        {
          ...socialCardSize,
          fonts: [
            {
              name: "Roboto Mono",
              data: regular,
              weight: 400,
              style: "normal",
            },
            { name: "Roboto Mono", data: bold, weight: 700, style: "normal" },
          ],
        },
      );
      return await response.arrayBuffer();
    };
    let body: ArrayBuffer;
    try {
      body = await render(image);
    } catch (error) {
      if (!image) throw error;
      body = await render();
    }
    return new Response(body, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control":
          "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("Failed to generate social image", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
