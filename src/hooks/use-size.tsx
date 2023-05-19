import { useCallback, useState } from 'react';

import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts';

interface Size {
  width: number;
  height: number;
}

/**
 * A hook that returns the size of an element. The size will be updated
 * when the window is resized. The size will also be updated when the
 * element is resized.
 */
export const useSize = <T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Size
] => {
  const [ref, setRef] = useState<T | null>(null);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });
    // HACK: had to remove the ref.offsetHeight cause it was causing too many rerenders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetWidth]);

  useEventListener('resize', handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
    // HACK: had to remove the ref.offsetHeight cause it was causing too many rerenders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetWidth]);

  return [setRef, size];
};
