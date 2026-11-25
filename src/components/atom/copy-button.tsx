"use client";

import { Check, Copy, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/atom/button";

export function CopyButton({
  getText,
  label,
  className,
}: {
  getText: () => string | null | undefined;
  label: string;
  className?: string;
}) {
  const [result, setResult] = useState<"copied" | "failed" | null>(null);
  const feedback =
    result === "copied"
      ? "Copied to clipboard."
      : result === "failed"
        ? "Copy unavailable."
        : "";
  const Icon = result === "copied" ? Check : result === "failed" ? X : Copy;

  useEffect(() => {
    if (!result) return;
    const timeout = window.setTimeout(() => setResult(null), 2500);
    return () => window.clearTimeout(timeout);
  }, [result]);

  async function copy() {
    const text = getText();
    if (text == null) return;

    setResult(null);
    try {
      await navigator.clipboard.writeText(text);
      setResult("copied");
    } catch {
      setResult("failed");
    }
  }

  return (
    <>
      <Button
        type="button"
        variant="floating"
        size="icon-sm"
        aria-label={label}
        title={feedback || label}
        className={className}
        data-feedback={result ?? undefined}
        onClick={copy}
      >
        <Icon aria-hidden="true" />
      </Button>
      <span role="status" className="sr-only">
        {feedback}
      </span>
    </>
  );
}
