"use client";
import type { FC } from "react";
import { typefaceBody1, typefaceBody2, typefaceMeta2 } from "../typeface";

type ColorItemProps = {
  title: string;
  subtitle: string;
  colors: Record<string, [string, string]>;
};

export const ColorItem: FC<ColorItemProps> = ({ title, colors, subtitle }) => {
  const style = window.getComputedStyle(document.body);
  return (
    <section className="flex flex-col gap-2 sm:flex-row">
      <div className="flex flex-1 flex-col gap-2 ">
        <h2 className={typefaceBody2("font-semibold")}>{title}</h2>
        <p className={typefaceBody2("opacity-80")}>{subtitle}</p>
      </div>
      <div className="flex w-full flex-[3] text-clip rounded-md border">
        {Object.entries(colors).map(([name, [variable, value]]) => (
          <ColorBlock
            key={name}
            title={name}
            variable={variable}
            value={value}
            color={style.getPropertyValue(variable)}
          />
        ))}
      </div>
    </section>
  );
};

type ColorBlockProps = {
  title: string;
  variable: string;
  value: string;
  color: string;
};
const ColorBlock: FC<ColorBlockProps> = ({ title, value, variable, color }) => {
  return (
    <div className="flex w-full flex-col pb-2">
      <div className="h-16 w-full" style={{ backgroundColor: value }}></div>
      <p className={typefaceBody1("text-center font-semibold")}>{title}</p>
      <p className={typefaceMeta2("text-center opacity-70")}>{variable}</p>
      <p className={typefaceMeta2("text-center")}>hsl( {color} )</p>
    </div>
  );
};
