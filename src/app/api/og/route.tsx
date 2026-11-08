import { renderSocialImage } from "@/components/social/render-social-image";

export const runtime = "nodejs";

export function GET(request: Request) {
  return renderSocialImage(new URL(request.url).searchParams);
}
