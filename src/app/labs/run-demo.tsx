"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/atom/button";

async function loadDemo(src: string, signal: AbortSignal) {
  const source = new URL(src, window.location.origin);
  const directory = new URL(".", source);

  // The sandbox has an opaque origin. Fetch with the article's preview session.
  async function fetchAsset(url: URL) {
    if (
      url.origin !== directory.origin ||
      !url.pathname.startsWith(directory.pathname)
    ) {
      throw new Error("Invalid demo asset URL");
    }
    const response = await fetch(url, {
      signal,
      mode: "same-origin",
      redirect: "error",
    });
    if (!response.ok) throw new Error("Could not load demo asset");
    return response.text();
  }

  const document = new DOMParser().parseFromString(
    await fetchAsset(source),
    "text/html",
  );
  const script = document.querySelector("script[src]");
  const stylesheet = document.querySelector('link[rel="stylesheet"][href]');
  if (!script || !stylesheet) throw new Error("Incomplete demo document");

  const [code, css] = await Promise.all([
    fetchAsset(new URL(script.getAttribute("src") ?? "", source)),
    fetchAsset(new URL(stylesheet.getAttribute("href") ?? "", source)),
  ]);
  if (/<\/script/i.test(code) || /<\/style/i.test(css)) {
    throw new Error("Invalid inline demo asset");
  }

  const base = document.createElement("base");
  base.href = source.href;
  document.head.prepend(base);
  const style = document.createElement("style");
  style.textContent = css;
  stylesheet.replaceWith(style);
  script.remove();
  const inlineScript = document.createElement("script");
  inlineScript.textContent = code;
  document.body.append(inlineScript);
  return `<!doctype html>${document.documentElement.outerHTML}`;
}

export function RunDemo({
  title,
  src,
  height,
  syncScroll = false,
}: {
  title: string;
  src: `/labs/${string}`;
  height: number | string;
  syncScroll?: boolean;
}) {
  const [running, setRunning] = useState(false);
  const [demo, setDemo] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const viewportId = useId();
  const frame = useRef<HTMLIFrameElement>(null);

  const sendPageScroll = useCallback(() => {
    frame.current?.contentWindow?.postMessage(
      { type: "lab-scroll", y: window.scrollY },
      "*",
    );
  }, []);

  useEffect(() => {
    if (!running || !syncScroll) return;
    window.addEventListener("scroll", sendPageScroll, { passive: true });
    return () => window.removeEventListener("scroll", sendPageScroll);
  }, [running, syncScroll, sendPageScroll]);

  useEffect(() => {
    if (!running) return;
    const controller = new AbortController();
    void loadDemo(src, controller.signal).then(
      (document) => {
        if (!controller.signal.aborted) setDemo(document);
      },
      () => {
        if (!controller.signal.aborted) setFailed(true);
      },
    );
    return () => controller.abort();
  }, [running, src]);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-md border border-border">
      <figcaption className="flex items-center gap-3 border-b border-border/50 bg-muted/50 p-3">
        <Button
          type="button"
          aria-controls={viewportId}
          aria-expanded={running}
          className="w-28 shrink-0"
          onClick={() => {
            setDemo(null);
            setFailed(false);
            setRunning(!running);
          }}
        >
          {running ? "Stop demo" : "Run demo"}
        </Button>
        <span className="min-w-0 text-sm font-medium">{title}</span>
      </figcaption>
      <div id={viewportId} className="bg-muted/30" style={{ height }}>
        {running && demo ? (
          <iframe
            ref={frame}
            title={title}
            sandbox="allow-scripts"
            srcDoc={demo}
            onLoad={syncScroll ? sendPageScroll : undefined}
            className="block size-full border-0"
          />
        ) : (
          <p
            role="status"
            className="grid size-full place-items-center p-4 text-center text-sm text-muted-foreground"
          >
            {failed
              ? "The demo could not load. Stop it and run it again to retry."
              : running
                ? "Loading demo…"
                : "Select Run demo to load the interactive example."}
          </p>
        )}
      </div>
    </figure>
  );
}
