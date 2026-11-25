import { expect, it } from "vitest";
import { renderTerminalPreview } from "./terminal-preview";

it("preserves combined indexed foreground and background colors on wide text", () => {
  const html = renderTerminalPreview("\x1b[0;038;5;231;48;5;24m你好\x1b[0m");

  expect(html).toContain("color:rgb(255,255,255);");
  expect(html).toContain("background-color:rgb(0,95,135);");
  expect(html).toContain('style="width:2ch">你</span>');
  expect(html).toContain('style="width:2ch">好</span>');
});
