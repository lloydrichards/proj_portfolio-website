import type { FC } from "react";
import { typefaceBody2 } from "../typeface";
type ColorPaletteProps = {
  children: React.ReactNode;
};
export const ColorPalette: FC<ColorPaletteProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={typefaceBody2(
          "hidden gap-2 font-semibold text-foreground/50 sm:flex",
        )}
      >
        <p className="flex-1">Name</p>
        <p className="flex-[3]">Swatches</p>
      </div>
      {children}
    </div>
  );
};
