import { useCallback, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export const useColor = () => {
  const [current, setLocalTheme] = useLocalStorage<string | undefined>(
    "theme",
    undefined,
  );
  const setTheme = useCallback(
    function (theme?: string) {
      if (!theme) {
        setLocalTheme(undefined);
        return document.querySelector("html")?.removeAttribute("data-theme");
      }
      setLocalTheme(theme);
      return document.querySelector("html")?.setAttribute("data-theme", theme);
    },
    [setLocalTheme],
  );

  useEffect(() => {
    setTheme(current);
  });

  return [current, setTheme] as const;
};
