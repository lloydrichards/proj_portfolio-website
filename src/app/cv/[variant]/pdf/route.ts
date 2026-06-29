import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import chromium from "@sparticuz/chromium-min";
import { Option } from "effect";
import { notFound } from "next/navigation";
import { getCvVariantBySlug } from "../../data/variants";

type CvVariantPdfRouteProps = {
  params: Promise<{ variant: string }>;
};

export const dynamic = "force-dynamic";
export const maxDuration = 60;
export const runtime = "nodejs";

const LETTER_WIDTH_PX = 1350;
const MIN_HEIGHT_PX = 1056;
const MAX_HEIGHT_PX = 14_400;
const PAGE_HEIGHT_BUFFER_PX = 160;
const DEFAULT_CHROMIUM_PACK_URL =
  "https://github.com/Sparticuz/chromium/releases/download/v149.0.0/chromium-v149.0.0-pack.x64.tar";

const clampPdfHeight = (height: number) =>
  Math.min(
    Math.max(Math.ceil(height + PAGE_HEIGHT_BUFFER_PX), MIN_HEIGHT_PX),
    MAX_HEIGHT_PX,
  );

const localChromeExecutablePath = () => {
  const chromeRoot = join(homedir(), ".cache/puppeteer/chrome");
  if (!existsSync(chromeRoot)) {
    return undefined;
  }

  return readdirSync(chromeRoot)
    .filter((entry) => entry.startsWith("mac_"))
    .sort()
    .reverse()
    .map((entry) =>
      join(
        chromeRoot,
        entry,
        "chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
      ),
    )
    .find(existsSync);
};

const chromiumExecutablePath = async () =>
  process.env.PUPPETEER_EXECUTABLE_PATH ??
  (process.platform === "darwin" ? localChromeExecutablePath() : undefined) ??
  (await chromium.executablePath(
    process.env.CHROMIUM_PACK_URL ?? DEFAULT_CHROMIUM_PACK_URL,
  ));

export async function GET(
  request: Request,
  { params }: CvVariantPdfRouteProps,
) {
  const { variant: slug } = await params;
  const variant = Option.getOrElse(getCvVariantBySlug(slug), () => notFound());
  const puppeteer = await import("puppeteer-core");
  const browser = await puppeteer.default.launch({
    args: await puppeteer.default.defaultArgs({
      args: chromium.args,
      headless: "shell",
    }),
    executablePath: await chromiumExecutablePath(),
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
      timeout: 15_000,
      waitUntil: "domcontentloaded",
    });
    await page.evaluate(() => document.fonts.ready);

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
