"use client";

import { useEffect, useMemo, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

interface UseCountUpOptions {
  end: number;
  durationMs?: number;
  shouldStart?: boolean;
}

export const useCountUp = ({
  end,
  durationMs = 1200,
  shouldStart = true,
}: UseCountUpOptions): number => {
  const [value, setValue] = useState(0);
  const target = useMemo(() => Math.max(0, Math.floor(end)), [end]);

  useEffect(() => {
    if (!shouldStart) {
      setValue(0);
      return;
    }

    if (target === 0) {
      setValue(0);
      return;
    }

    let rafId = 0;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = clamp((time - start) / durationMs, 0, 1);
      const nextValue = Math.round(progress * target);
      setValue(nextValue);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [durationMs, shouldStart, target]);

  return value;
};
