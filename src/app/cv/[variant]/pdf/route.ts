import { Option } from "effect";
import { notFound } from "next/navigation";
import { getCvVariantBySlug } from "../../data/variants";

type CvVariantPdfRouteProps = {
  params: Promise<{ variant: string }>;
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const LETTER_WIDTH_PX = 816;
const MIN_HEIGHT_PX = 1056;
const MAX_HEIGHT_PX = 14_400;
const PAGE_HEIGHT_BUFFER_PX = 160;

const clampPdfHeight = (height: number) =>
  Math.min(
    Math.max(Math.ceil(height + PAGE_HEIGHT_BUFFER_PX), MIN_HEIGHT_PX),
    MAX_HEIGHT_PX,
  );

export async function GET(
  request: Request,
  { params }: CvVariantPdfRouteProps,
) {
  const { variant: slug } = await params;
  const variant = Option.getOrElse(getCvVariantBySlug(slug), () => notFound());
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.default.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "shell",
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({
      width: LETTER_WIDTH_PX,
      height: MIN_HEIGHT_PX,
      deviceScaleFactor: 1,
    });
    const origin = new URL(request.url).origin;
    await page.goto(`${origin}/cv/${variant.slug}`, {
      waitUntil: "networkidle0",
    });

    const documentHeight = await page.evaluate(() =>
      Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      ),
    );

    const pageHeight = clampPdfHeight(documentHeight);
    await page.addStyleTag({
      content: `@page { size: ${LETTER_WIDTH_PX}px ${pageHeight}px; margin: 0; }`,
    });

    const pdf = await page.pdf({
      height: `${pageHeight}px`,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
      preferCSSPageSize: true,
      printBackground: true,
      width: `${LETTER_WIDTH_PX}px`,
    });

    return new Response(new Uint8Array(pdf), {
      headers: {
        "Content-Disposition": `attachment; filename="${variant.pdfFilename}"`,
        "Content-Type": "application/pdf",
      },
    });
  } finally {
    await browser.close();
  }
}
