"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const PALETTES = ["standard", "nerdy", "analog"] as const;
export type Palette = (typeof PALETTES)[number];

const STORAGE_KEY = "palette";
const DEFAULT_PALETTE: Palette = "standard";

interface PaletteContextValue {
  palette: Palette;
  setPalette: (palette: Palette) => void;
  palettes: readonly Palette[];
}

const PaletteContext = createContext<PaletteContextValue | undefined>(
  undefined,
);

function disableTransitions() {
  const style = document.createElement("style");
  style.setAttribute("data-palette-transition", "");
  style.textContent = "*, *::before, *::after { transition: none !important; }";
  document.head.appendChild(style);

  // Force reflow so the style takes effect before any attribute change
  window.getComputedStyle(document.body).opacity;

  return () => {
    // Re-enable transitions after one frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove();
      });
    });
  };
}

function applyPalette(palette: Palette) {
  if (palette === DEFAULT_PALETTE) {
    delete document.documentElement.dataset.theme;
  } else {
    document.documentElement.dataset.theme = palette;
  }
}

export function PaletteProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPaletteState] = useState<Palette>(() => {
    if (typeof window === "undefined") return DEFAULT_PALETTE;
    const stored = localStorage.getItem(STORAGE_KEY) as Palette | null;
    return stored && PALETTES.includes(stored) ? stored : DEFAULT_PALETTE;
  });

  const setPalette = useCallback((next: Palette) => {
    // Disable transitions during palette swap to prevent intermediate
    // blended color states (palette changes swap many variables at once).
    const enableTransitions = disableTransitions();
    setPaletteState(next);
    applyPalette(next);
    enableTransitions();

    try {
      if (next === DEFAULT_PALETTE) {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, next);
      }
    } catch {}
  }, []);

  // Sync attribute on mount (covers hydration mismatch edge case)
  useEffect(() => {
    applyPalette(palette);
  }, [palette]);

  const value = useMemo<PaletteContextValue>(
    () => ({ palette, setPalette, palettes: PALETTES }),
    [palette, setPalette],
  );

  return (
    <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>
  );
}

export function usePalette(): PaletteContextValue {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error("usePalette must be used within a PaletteProvider");
  }
  return context;
}
