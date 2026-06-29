import { Option } from "effect";
import { notFound } from "next/navigation";
import { getCvData } from "../../data/get-cv-data";
import { renderCvMarkdown } from "../../data/render-cv-markdown";
import { getCvVariantBySlug } from "../../data/variants";

type CvVariantMarkdownRouteProps = {
  params: Promise<{ variant: string }>;
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: CvVariantMarkdownRouteProps,
) {
  const { variant: slug } = await params;
  const variant = Option.getOrElse(getCvVariantBySlug(slug), () => notFound());
  const data = await getCvData();
  const markdown = renderCvMarkdown({ data, variant });

  return new Response(markdown, {
    headers: {
      "Content-Disposition": `attachment; filename="${variant.markdownFilename}"`,
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
