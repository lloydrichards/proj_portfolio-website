"use client";
import type { FC } from "react";
import { typefaceBody1, typefaceMeta2 } from "../../typeface";

const hslToHex = (h: number, s: number, l: number) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};
const hexToHSL = (hex: string) => {
  const r = parseInt(hex.substring(1, 3), 16) / 255;
  const g = parseInt(hex.substring(3, 5), 16) / 255;
  const b = parseInt(hex.substring(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = (max + min) / 2;
  let s = (max + min) / 2;
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  return `hsl(${h}, ${s}%, ${l}%)`;
};

type ColorBlockProps = {
  title: string;
  token?: string;
  value: string;
};
export const ColorBlock: FC<ColorBlockProps> = ({ title, value, token }) => {
  const isHex = value.startsWith("#");
  const style = window.getComputedStyle(document.body);
  const variable = value.match(/var\(([^)]+)\)/)?.[1] ?? "";
  const [h, s, l] = style.getPropertyValue(variable).match(/\d+/g) ?? [];
  const colorHSL = isHex ? hexToHSL(value) : `hsl(${h}, ${s}%, ${l}%)`;
  const colorHex = isHex ? value : hslToHex(Number(h), Number(s), Number(l));
  return (
    <div className="flex w-full flex-col pb-2">
      <div className="h-16 w-full" style={{ backgroundColor: value }}></div>
      <p className={typefaceBody1("text-center font-semibold")}>{title}</p>
      <p className={typefaceMeta2("text-center opacity-70")}>
        {token ?? variable}
      </p>
      <p className={typefaceMeta2("text-center")}>{colorHex}</p>
      <p className={typefaceMeta2("text-center")}>{colorHSL}</p>
    </div>
  );
};
