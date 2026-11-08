const imageOrigin = "https://www.lloydrichards.dev";
const pathPrefix = "/api/og/v4/";

/** Put the complete render inputs in the path so image proxies cannot drop them. */
export function socialImageURL(params: URLSearchParams) {
  if (params.size === 1 && params.get("kind") === "home") {
    return `${imageOrigin}${pathPrefix}home.png`;
  }
  const bytes = new TextEncoder().encode(
    JSON.stringify(Object.fromEntries(params)),
  );
  const payload = btoa(
    Array.from(bytes, (byte) => String.fromCharCode(byte)).join(""),
  )
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");
  return `${imageOrigin}${pathPrefix}${payload}.png`;
}

export function socialImageParams(card: string): URLSearchParams | undefined {
  if (card === "home.png") return new URLSearchParams({ kind: "home" });
  if (card.length > 8192 || !/^[A-Za-z0-9_-]+\.png$/.test(card)) return;
  try {
    const encoded = card.slice(0, -4).replaceAll("-", "+").replaceAll("_", "/");
    const bytes = Uint8Array.from(atob(encoded), (char) => char.charCodeAt(0));
    const value: unknown = JSON.parse(
      new TextDecoder("utf-8", { fatal: true }).decode(bytes),
    );
    if (!value || typeof value !== "object" || Array.isArray(value)) return;
    const entries = Object.entries(value);
    if (!entries.length || entries.some(([, item]) => typeof item !== "string"))
      return;
    return new URLSearchParams(entries as [string, string][]);
  } catch {
    return;
  }
}
