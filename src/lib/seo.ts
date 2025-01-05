import { siteMetadata } from "@/lib/metadata";
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
      card: "summary_large_image",
      images: image ? [image] : [siteMetadata.social.socialBanner],
    },
    ...rest,
  };
}
