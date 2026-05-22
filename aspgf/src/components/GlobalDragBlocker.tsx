"use client";

import { useEffect } from "react";

export default function GlobalDragBlocker() {
  useEffect(() => {
    const handleDragStart = (e: DragEvent) => {
      // Check if the dragged element is an image, link, or SVG
      const target = e.target as HTMLElement | null;
      if (target) {
        const isImageOrSvgOrLink =
          target.tagName === "IMG" ||
          target.tagName === "svg" ||
          target.tagName === "A" ||
          target.closest("img") ||
          target.closest("svg") ||
          target.closest("a");

        if (isImageOrSvgOrLink) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener("dragstart", handleDragStart);
    return () => {
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}
