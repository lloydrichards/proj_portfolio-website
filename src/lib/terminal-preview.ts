import * as Box from "effect-boxes/Box";
import { FancyAnsi } from "fancy-ansi";

const ansi = new FancyAnsi();
const segmenter = new Intl.Segmenter();
const entities = new Map([
  ["&amp;", "&"],
  ["&lt;", "<"],
  ["&gt;", ">"],
  ["&quot;", '"'],
  ["&#39;", "'"],
]);
const escapedCharacters = new Map(
  Array.from(entities, ([entity, character]) => [character, entity]),
);

export function renderTerminalPreview(input: string): string {
  const html = ansi.toHtml(input);
  // FancyAnsi emits style spans and escaped text. Measure the text inside each
  // style run, then escape it again before inserting cell spans.
  return html.replace(/<[^>]*>|[^<]+/g, (part) => {
    if (part.startsWith("<") || !/\P{ASCII}/u.test(part)) return part;

    const text = part.replace(
      /&(?:amp|lt|gt|quot|#39);/g,
      (entity) => entities.get(entity) ?? entity,
    );
    return Array.from(segmenter.segment(text), ({ segment }) => {
      const escaped = segment.replace(
        /[&<>"']/g,
        (character) => escapedCharacters.get(character) ?? character,
      );
      if (!/\P{ASCII}/u.test(segment)) return escaped;
      const columns = Box.char(segment).cols;
      return columns > 0
        ? `<span class="inline-block text-center leading-[inherit] [text-decoration:inherit]" style="width:${columns}ch">${escaped}</span>`
        : escaped;
    }).join("");
  });
}
