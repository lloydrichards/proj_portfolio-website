import { formatDate } from "@/lib/format";
import { type SocialCardKind, socialArtwork } from "@/lib/social-card";

export const notEmpty = <T>(value: T | null | undefined): value is T => {
  return value !== null && value !== undefined;
};

type Content = {
  date: Date;
};

export const descContent = (a: Content, b: Content) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const makeOGImageURL = ({
  title,
  description,
  date,
  tags,
  kind = "page",
  artwork,
  label,
}: {
  title: string;
  description: string;
  tags?: Array<string>;
  date?: Date | string;
  kind?: SocialCardKind;
  artwork?: string;
  label?: string;
}) => {
  const baseUrl = new URL("/api/og", "https://lloydrichards.dev");
  baseUrl.searchParams.set("v", "3");
  baseUrl.searchParams.set("kind", kind);
  const image = socialArtwork(artwork);
  if (image) baseUrl.searchParams.set("artwork", image);
  if (label) baseUrl.searchParams.set("label", label);
  baseUrl.searchParams.set("title", title);
  baseUrl.searchParams.set("description", description);
  if (tags) {
    baseUrl.searchParams.set("tags", tags.join(","));
  }
  if (date) {
    baseUrl.searchParams.set("date", formatDate(new Date(date)));
  }
  return baseUrl.pathname + baseUrl.search;
};
