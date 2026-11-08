import assets from "./social-assets.json";

export type SocialCardKind = "home" | "page" | "project" | "lab";
export const socialCardSize = { width: 1200, height: 630 };

export function socialArtwork(source?: string) {
  return source
    ? (assets.artwork as Record<string, string>)[source]
    : undefined;
}
export function labArtwork(id?: string, override?: string) {
  if (override && socialArtwork(override)) return override;
  return id ? (assets.labs as Record<string, string>)[id] : undefined;
}

/** Keep full text in page metadata; only the image uses a bounded line budget. */
export function wrapCardText(text: string, columns: number, maxLines: number) {
  const words = text.trim().replace(/\s+/g, " ").split(" ");
  const lines: string[] = [];
  let line = "";
  for (let word of words) {
    if (line && line.length + word.length + 1 > columns) {
      lines.push(line);
      line = "";
    }
    while (word.length > columns) {
      if (line) lines.push(line);
      lines.push(word.slice(0, columns));
      word = word.slice(columns);
      line = "";
    }
    line = line ? `${line} ${word}` : word;
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    return [
      ...lines.slice(0, maxLines - 1),
      `${lines[maxLines - 1].slice(0, columns - 1).trimEnd()}…`,
    ];
  }
  return lines;
}

export function fitCardTitle(
  text: string,
  width: number,
  height: number,
  maxSize: number,
) {
  for (let size = maxSize; size >= 30; size -= 2) {
    const columns = Math.floor(width / (size * 0.61));
    const lines = wrapCardText(text, columns, 20);
    if (lines.length * size * 1.12 <= height) return { size, lines };
  }
  return {
    size: 30,
    lines: wrapCardText(
      text,
      Math.floor(width / 18.3),
      Math.floor(height / 33.6),
    ),
  };
}
