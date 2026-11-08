import { renderSocialImage } from "@/components/social/render-social-image";
import { socialImageParams } from "@/lib/social-image-url";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ card: string }> },
) {
  const { card } = await params;
  const inputs = socialImageParams(card);
  if (!inputs) return new Response("Unknown social image", { status: 404 });
  return renderSocialImage(inputs);
}
