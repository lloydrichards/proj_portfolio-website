"use client";

import { useEffect, useRef, useState } from "react";
import {
  type Anime,
  type AnimeAnimation,
  loadAnime,
} from "@/app/labs/load-anime";
import { Button } from "@/components/atom/button";

export function AnimeDemo() {
  const [running, setRunning] = useState(false);
  const [anime, setAnime] = useState<Anime>();
  const [loadFailed, setLoadFailed] = useState(false);
  const diamond = useRef<HTMLDivElement>(null);
  const diamondAnimation = useRef<AnimeAnimation>(null);
  const box = useRef<HTMLDivElement>(null);
  const diamondStage = useRef<HTMLDivElement>(null);
  const boxStage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!running) return;

    let active = true;
    loadAnime().then(
      (library) => {
        if (active) setAnime(() => library);
      },
      () => {
        if (active) {
          setLoadFailed(true);
          setRunning(false);
        }
      },
    );
    return () => {
      active = false;
    };
  }, [running]);

  useEffect(() => {
    if (!running || !anime) return;

    const target = diamond.current;
    const stage = diamondStage.current;
    if (!target || !stage) return;

    const animation = anime({
      targets: target,
      translateX: [0, Math.max(0, Math.min(250, stage.clientWidth - 80))],
      translateY: [0, -Math.max(0, Math.min(250, stage.clientHeight - 80))],
      duration: 2000,
    });
    diamondAnimation.current = animation;
    return () => {
      diamondAnimation.current = null;
      animation.pause();
      target.style.removeProperty("transform");
    };
  }, [running, anime]);

  useEffect(() => {
    if (!running || !anime) return;

    const target = box.current;
    const stage = boxStage.current;
    if (!target || !stage) return;

    const animation = anime({
      targets: target,
      translateX: [0, Math.max(0, Math.min(350, stage.clientWidth - 72))],
      rotate: [0, 360],
      scale: [1, 2],
      duration: 2000,
      loop: true,
      direction: "alternate",
    });
    return () => {
      animation.pause();
      target.style.removeProperty("transform");
    };
  }, [running, anime]);

  return (
    <div className="my-6 space-y-3 rounded-md border p-4">
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          onClick={() => {
            setLoadFailed(false);
            setRunning(!running);
          }}
        >
          {running ? "Stop demo" : "Run demo"}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={!running || !anime}
          onClick={() => diamondAnimation.current?.restart()}
        >
          Replay diamond
        </Button>
      </div>
      {running && !anime && <p role="status">Loading Anime.js…</p>}
      {loadFailed && <p role="status">Could not load Anime.js.</p>}
      <div>
        <p>Diamond</p>
        <div
          ref={diamondStage}
          className="relative h-60 overflow-hidden rounded-sm bg-muted sm:h-80"
          aria-hidden="true"
        >
          <div ref={diamond} className="absolute bottom-5 left-5">
            <div className="size-12 rotate-45 bg-orange-500" />
          </div>
        </div>
      </div>
      <div>
        <p>Looping box</p>
        <div
          ref={boxStage}
          className="relative h-20 overflow-hidden rounded-sm bg-muted"
          aria-hidden="true"
        >
          <div ref={box} className="absolute top-7 left-5 size-6 bg-red-500" />
        </div>
      </div>
    </div>
  );
}
