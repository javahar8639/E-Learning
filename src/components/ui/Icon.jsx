const paths = {
  ai: (
    <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
  ),
  design: (
    <path d="M4 20 15 9l3-3 1 1-3 3-11 11H4v-1Zm10-13 3 3M9 19l-4-4" />
  ),
  code: <path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 4 11 20" />,
  business: (
    <path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9Zm4 0V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3M4 13h16" />
  ),
  marketing: (
    <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Zm14-3.5a5 5 0 0 1 0 9M16 10a2.2 2.2 0 0 1 0 4" />
  ),
  creative: (
    <path d="M12 4a8 8 0 1 0 0 16c1.5 0 2-1 2-2s-.5-1.5-1-2 .5-1.5 1.5-1.5H16a4 4 0 0 0 4-4 8 8 0 0 0-8-6.5ZM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  ),
  star: (
    <path d="m12 4 2.4 5.1 5.6.6-4.2 3.8 1.2 5.5L12 16.3 6.9 19l1.3-5.5-4.2-3.8 5.6-.6L12 4Z" />
  ),
  clock: <path d="M12 7v5l3.2 2M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />,
  users: (
    <path d="M8 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 2c-3 0-6 1.5-6 4.2V20h9v-1.8c0-1.4.7-2.6 1.7-3.5A9.5 9.5 0 0 0 8 14Zm8-2.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Zm0 1.7c-.7 0-1.4.1-2 .3 1.5 1 2.4 2.5 2.4 4.3V20H22v-1.9c0-2.5-2.8-3.9-6-3.9Z" />
  ),
  layers: (
    <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" stroke="none" />,
  check: <path d="m5 13 4 4 10-10" />,
  checkCircle: (
    <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-11 .3 2.2 2.2L15.5 10" />
  ),
  search: <path d="m20 20-3.5-3.5M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  target: (
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
  ),
  badge: (
    <path d="M12 3 4 6.5v5.4c0 4.5 3.3 7.2 8 9.1 4.7-1.9 8-4.6 8-9.1V6.5L12 3Zm-2.5 9.5 1.8 1.8L15.5 10" />
  ),
  quote: (
    <path
      d="M9.5 8c-2.2 0-4 1.8-4 4v4.5h4.5V12h-2c0-1.4 1.1-2.5 2.5-2.5V8Zm8 0c-2.2 0-4 1.8-4 4v4.5h4.5V12h-2c0-1.4 1.1-2.5 2.5-2.5V8Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  briefcase: (
    <path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9Zm4 0V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
  ),
};

/** Minimal inline icon set. Pass a key from `paths` and an optional size. */
export default function Icon({ name, size = 20, strokeWidth = 1.6, className = "" }) {
  const path = paths[name];
  if (!path) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  );
}
