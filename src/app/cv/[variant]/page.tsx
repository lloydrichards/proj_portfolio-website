import { Option } from "effect";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { CvPublicPage } from "../components/cv-public-page";
import { getCvData } from "../data/get-cv-data";
import {
  generateCvVariantStaticParams,
  getCvVariantBySlug,
} from "../data/variants";

type CvVariantPageProps = {
  params: Promise<{ variant: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = generateCvVariantStaticParams;

export async function generateMetadata({
  params,
}: CvVariantPageProps): Promise<Metadata> {
  const { variant: slug } = await params;
  const variant = Option.getOrElse(getCvVariantBySlug(slug), () => notFound());

  return createPageMetadata({
    title: variant.pageTitle,
    description: variant.schemaDescription,
  });
}

export default async function CvVariantPage({ params }: CvVariantPageProps) {
  const { variant: slug } = await params;
  const variant = Option.getOrElse(getCvVariantBySlug(slug), () => notFound());
  const data = await getCvData();

  return (
    <CvPublicPage
      data={data}
      pdfHref={`/cv/${variant.slug}/pdf`}
      variant={variant}
    />
  );
}
