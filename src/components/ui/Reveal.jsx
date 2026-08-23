import { useReveal } from "../../hooks/useReveal";

/**
 * Wraps children in a fade/slide reveal that triggers once, on scroll into view.
 * `as` lets the wrapper render as a semantic element instead of a div.
 * `delay` (0-4) applies a staggered transition-delay class.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : "";
  const classes = ["reveal", delayClass, className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
