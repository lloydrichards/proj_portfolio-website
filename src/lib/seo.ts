import type { Metadata } from "next";
import { siteMetadata } from "@/lib/metadata";
import {
  labArtwork,
  type SocialCardKind,
  socialCardSize,
} from "@/lib/social-card";
import { makeOGImageURL } from "@/services/utils";

type PageSEOProps = {
  title: string;
  description?: string;
  image?: string;
  artwork?: string;
  kind?: SocialCardKind;
  social?: { label?: string; tags?: string[]; description?: string };
} & Metadata;

export function createPageMetadata({
  title,
  description = siteMetadata.description,
  image,
  artwork,
  kind = "page",
  social,
  ...rest
}: PageSEOProps): Metadata {
  const url =
    image || makeOGImageURL({ title, description, artwork, kind, ...social });
  const images = [{ url, ...socialCardSize, alt: `${title} | Lloyd Richards` }];
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description,
      url: "./",
      siteName: siteMetadata.title,
      images,
      locale: siteMetadata.locale,
      type: "website",
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      description,
      card: "summary_large_image",
      images,
    },
    ...rest,
  };
}

export const createOGImageMetadata = ({
  title,
  description,
  date,
  tags,
  id,
  socialImage,
  ...rest
}: {
  title: string;
  description: string;
  tags: string[];
  date: Date | string;
  id?: string;
  socialImage?: string;
} & Record<string, unknown>) => {
  const image = makeOGImageURL({
    title,
    description,
    tags,
    date,
    kind: "lab",
    label: id ? `Lab ${id}` : "Lab",
    artwork: labArtwork(id, socialImage),
  });
  return {
    ...createPageMetadata({ title, description, image }),
    title,
    description,
    tags,
    date,
    id,
    socialImage,
    ...rest,
  };
};
