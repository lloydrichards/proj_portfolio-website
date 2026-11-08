"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { JourneyPhase } from "./model/types";

// Phase elements and public entry anchors are the only DOM this coordinator reads.
export function useJourneyNavigation(phases: JourneyPhase[]) {
  const [activePhaseId, setActivePhaseId] = useState(phases[0]?.id ?? "");
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null);
  const selectedPhase = useRef<string | null>(null);
  const navigating = useRef(false);
  const layoutRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const phaseElements = useRef(new Map<string, HTMLElement>());
  const registerPhase = useCallback(
    (id: string, element: HTMLElement | null) => {
      if (element) phaseElements.current.set(id, element);
      else phaseElements.current.delete(id);
    },
    [],
  );
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = window.matchMedia("(max-width: 960px)").matches
        ? (sidebarRef.current?.getBoundingClientRect().height ?? 180) + 48
        : Math.min(window.innerHeight * 0.1, 100);
      let current = phases[0]?.id ?? "";
      for (const phase of phases) {
        const element = phaseElements.current.get(phase.id);
        if (element && element.getBoundingClientRect().top <= readingLine)
          current = phase.id;
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      )
        current = phases.at(-1)?.id ?? current;
      setActivePhaseId(current);
      if (
        !navigating.current &&
        selectedPhase.current &&
        selectedPhase.current !== current
      ) {
        selectedPhase.current = null;
        setSelectedRecordId(null);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const measure = () => {
      layoutRef.current?.style.setProperty(
        "--journey-sidebar-height",
        `${sidebarRef.current?.getBoundingClientRect().height ?? 180}px`,
      );
      onScroll();
    };
    const onScrollEnd = () => {
      navigating.current = false;
      onScroll();
    };
    const resize = new ResizeObserver(measure);
    if (sidebarRef.current) resize.observe(sidebarRef.current);
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("resize", measure);
    return () => {
      resize.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("resize", measure);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [phases]);
  function navigate(id: string, instant = false) {
    const target = document.getElementById(id);
    if (!target) return;
    history.replaceState(null, "", `#${id}`);
    target.scrollIntoView({
      block: "start",
      behavior:
        instant || window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
    });
    target.focus({ preventScroll: true });
  }
  function selectRecord(id: string, phaseId?: string, scrollToEntry = true) {
    const targetPhase =
      phaseId ??
      phases.find((phase) => phase.started.some((record) => record.id === id))
        ?.id ??
      null;
    if (selectedRecordId === id && selectedPhase.current === targetPhase) {
      clearSelection();
      return;
    }
    navigating.current = scrollToEntry;
    selectedPhase.current = targetPhase;
    if (targetPhase) setActivePhaseId(targetPhase);
    setSelectedRecordId(id);
    if (!scrollToEntry) return;
    // Let an inline chooser close before measuring the card's scroll position.
    requestAnimationFrame(() =>
      navigate(phaseId ? `${phaseId}-entry-${id}` : `entry-${id}`, true),
    );
  }
  function selectPhase(id: string) {
    navigating.current = true;
    selectedPhase.current = null;
    setActivePhaseId(id);
    setSelectedRecordId(null);
    requestAnimationFrame(() => navigate(id));
  }
  function clearSelection() {
    selectedPhase.current = null;
    setSelectedRecordId(null);
  }
  return {
    clearSelection,
    activePhaseId,
    selectedRecordId,
    layoutRef,
    sidebarRef,
    registerPhase,
    selectRecord,
    selectPhase,
  };
}
