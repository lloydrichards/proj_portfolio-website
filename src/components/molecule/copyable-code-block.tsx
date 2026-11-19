"use client";

import { type ReactNode, useRef, useState } from "react";
import { Button } from "@/components/atom/button";

export function CopyableCodeBlock({ children }: { children: ReactNode }) {
  const block = useRef<HTMLDivElement>(null);
  const [feedback, setFeedback] = useState("");

  async function copy() {
    const code = block.current?.querySelector("pre code")?.textContent;
    if (code == null) return;

    try {
      await navigator.clipboard.writeText(code);
      setFeedback("Copied to clipboard.");
    } catch {
      setFeedback("Copy unavailable. Select the code to copy it.");
    }
  }

  return (
    <div ref={block} className="min-w-0">
      <div className="flex flex-wrap items-center justify-end gap-2 bg-muted/50 px-2 pt-2">
        <span role="status" className="text-sm">
          {feedback}
        </span>
        <Button
          type="button"
          variant="outline"
          className="min-h-11"
          onClick={copy}
        >
          Copy code
        </Button>
      </div>
      {children}
    </div>
  );
}
