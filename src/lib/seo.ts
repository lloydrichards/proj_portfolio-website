import { siteMetadata } from "@/lib/metadata";
import { makeOGImageURL } from "@/services/api/utils";
import { Metadata } from "next";

type PageSEOProps = {
  title: string;
  description?: string;
  image?: string;
} & Metadata;

export function createPageMetadata({
  title,
  description,
  image,
  ...rest
}: PageSEOProps): Metadata {
  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: "./",
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.social.socialBanner],
      locale: siteMetadata.language,
      type: "website",
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      card: "summary",
      images: image ? [image] : [siteMetadata.siteLogo],
    },
    ...rest,
  };
}

export const createOGImageMetadata = ({
  title,
  description,
  date,
  tags,
  ...rest
}: {
  title: string;
  description: string;
  tags: string[];
  date: Date;
} & Record<string, unknown>) => ({
  title,
  description,
  tags,
  date,
  openGraph: {
    title: `${title} | ${siteMetadata.title}`,
    description: description || siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [makeOGImageURL({ title, description, tags, date })],
    locale: siteMetadata.language,
    type: "website",
  },
  twitter: {
    title: `${title} | ${siteMetadata.title}`,
    description: description || siteMetadata.description,
    card: "summary_large_image",
    images: [makeOGImageURL({ title, description, tags, date })],
  },
  ...rest,
});
