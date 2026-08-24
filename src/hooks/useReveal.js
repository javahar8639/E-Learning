import { useEffect, useRef, useState } from "react";

const pending = new Map();
let listenersAttached = false;

function isInView(node) {
  const rect = node.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewportHeight * 0.92 && rect.bottom > 0;
}

function sweep() {
  for (const [node, reveal] of pending) {
    if (isInView(node)) {
      reveal();
      pending.delete(node);
    }
  }
}

function ensureListeners() {
  if (listenersAttached) return;
  listenersAttached = true;
  window.addEventListener("scroll", sweep, { passive: true });
  window.addEventListener("resize", sweep, { passive: true });
  window.addEventListener("load", sweep, { passive: true });
  // Catch-all: anything the above events miss still gets revealed within
  // one tick instead of staying stuck forever.
  setInterval(sweep, 400);
}

/**
 * Tracks reveal-on-scroll visibility as real React state (not an imperative
 * classList mutation) so it survives re-renders triggered by unrelated state
 * changes elsewhere in the app - e.g. clicking a filter shouldn't wipe the
 * "revealed" class off every other already-visible card on the page.
 */
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || isInView(node)) {
      setVisible(true);
      return;
    }

    ensureListeners();
    const reveal = () => setVisible(true);
    pending.set(node, reveal);
    sweep();

    return () => {
      pending.delete(node);
    };
  }, []);

  return { ref, visible };
}
