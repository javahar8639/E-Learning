/**
 * Scrolls to an element by id, respecting prefers-reduced-motion.
 * Deferred two animation frames so it runs after any pending React
 * re-render (e.g. a filter that changes section heights above the
 * target) has painted, otherwise the scroll lands on stale layout.
 */
export function scrollToId(id) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  });
}
