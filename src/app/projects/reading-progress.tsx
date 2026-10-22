"use client";

import { useEffect, useRef } from "react";

export default function ReadingProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const article = document.getElementById("case-study-article");
    const progress = progressRef.current;
    const fill = fillRef.current;

    if (!article || !progress || !fill) return;

    const trackedArticle = article as HTMLElement;
    const progressElement = progress as HTMLDivElement;
    const fillElement = fill as HTMLSpanElement;

    let frame = 0;

    function updateProgress() {
      frame = 0;
      const articleTop =
        trackedArticle.getBoundingClientRect().top + window.scrollY;
      const scrollableDistance =
        trackedArticle.offsetHeight - window.innerHeight;
      const progressRatio =
        scrollableDistance > 0
          ? Math.min(
              1,
              Math.max(0, (window.scrollY - articleTop) / scrollableDistance),
            )
          : 0;
      const percentage = Math.round(progressRatio * 100);

      fillElement.style.transform = `scaleX(${progressRatio})`;
      progressElement.setAttribute("aria-valuenow", String(percentage));
    }

    function scheduleUpdate() {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="case-reading-progress"
      role="progressbar"
      aria-label="Case study reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      ref={progressRef}
    >
      <span ref={fillRef} />
    </div>
  );
}
