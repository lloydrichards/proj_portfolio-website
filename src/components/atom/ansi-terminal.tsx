"use client";

import { AnsiHtml } from "fancy-ansi/react";

import { cn } from "@/lib/utils";

const vscodePalette = {
  "--ansi-black": "#000000",
  "--ansi-red": "#cd3131",
  "--ansi-green": "#0dbc79",
  "--ansi-yellow": "#e5e510",
  "--ansi-blue": "#2473c8",
  "--ansi-magenta": "#bc3fbc",
  "--ansi-cyan": "#11a7cd",
  "--ansi-white": "#e5e5e5",
  "--ansi-bright-black": "#666666",
  "--ansi-bright-red": "#f14c4c",
  "--ansi-bright-green": "#23d18b",
  "--ansi-bright-yellow": "#f5f543",
  "--ansi-bright-blue": "#3b8dea",
  "--ansi-bright-magenta": "#d670d6",
  "--ansi-bright-cyan": "#29b7db",
  "--ansi-bright-white": "#e5e5e5",
} as React.CSSProperties;

interface AnsiTerminalProps {
  input: string;
  title?: string;
  className?: string;
}

export const AnsiTerminal = ({
  input,
  title,
  className,
}: AnsiTerminalProps) => (
  <div
    className={cn(
      "my-6 overflow-hidden rounded-md border border-border",
      className,
    )}
  >
    {/* Title bar */}
    <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 border-b border-border/50">
      <div className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-[#FF5F56]" />
        <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="size-2.5 rounded-full bg-[#27C93F]" />
      </div>
      {title && (
        <span className="ml-2 text-xs font-medium text-muted-foreground">
          {title}
        </span>
      )}
    </div>
    {/* Terminal body — dark background required for ANSI color legibility */}
    <pre
      className="overflow-x-auto bg-[hsl(220_20%_12%)] p-4 text-sm leading-[1.3] text-slate-200"
      style={{
        ...vscodePalette,
        fontFamily:
          "Menlo, Consolas, 'Liberation Mono', 'Courier New', monospace",
      }}
    >
      <AnsiHtml text={input} />
    </pre>
  </div>
);
