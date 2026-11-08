import { formatDate } from "@/lib/format";
import { type SocialCardKind, socialArtwork } from "@/lib/social-card";
import { socialImageURL } from "@/lib/social-image-url";

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
  const params = new URLSearchParams();
  params.set("kind", kind);
  const image = socialArtwork(artwork);
  if (image) params.set("artwork", image);
  if (label) params.set("label", label.slice(0, 80));
  params.set("title", title.slice(0, 240));
  params.set("description", description.slice(0, 400));
  if (tags) {
    params.set(
      "tags",
      tags
        .slice(0, kind === "cv" ? 4 : 3)
        .map((tag) => tag.slice(0, 60))
        .join(","),
    );
  }
  if (date) {
    params.set("date", formatDate(new Date(date)));
  }
  return socialImageURL(params);
};
