type P = { className?: string };

export const ServiceIcons = {
  roof: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" className={p.className} aria-hidden="true">
      <path d="M3 15 16 5l13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 17.5h19M8.5 22h15M10.5 26.5h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".55" />
    </svg>
  ),
  facade: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" className={p.className} aria-hidden="true">
      <rect x="5" y="7" width="22" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M5 13.5h22M5 20.5h22M12 7v6.5M20 13.5V20M12 20.5V27" stroke="currentColor" strokeWidth="1.7" opacity=".55" />
    </svg>
  ),
  crepi: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" className={p.className} aria-hidden="true">
      <rect x="5" y="6" width="22" height="21" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12.5c2.3 1.6 4.6 1.6 6.9 0s4.6-1.6 6.9 0M9 18c2.3 1.6 4.6 1.6 6.9 0s4.6-1.6 6.9 0M9 23.5c2.3 1.6 4.6 1.6 6.9 0s4.6-1.6 6.9 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" opacity=".6" />
    </svg>
  ),
  driveway: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" className={p.className} aria-hidden="true">
      <path d="M11 27 6 5h20l-5 22z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8.2 12h15.6M9.4 19h13.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" opacity=".55" />
      <path d="M16 5v22" stroke="currentColor" strokeWidth="1.7" opacity=".4" />
    </svg>
  ),
  solar: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" className={p.className} aria-hidden="true">
      <path d="M8 26h18l-3-13H11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.6 19.5h14.8M16.6 13v13" stroke="currentColor" strokeWidth="1.6" opacity=".55" />
      <circle cx="9" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 1.8v1.6M9 11.6v1.6M3.3 7.5h1.6M13.1 7.5h1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
    </svg>
  ),
  window: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" className={p.className} aria-hidden="true">
      <rect x="5" y="5" width="22" height="22" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M16 5v22M5 16h22" stroke="currentColor" strokeWidth="1.8" opacity=".55" />
      <path d="m9 12 3 3 6.5-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
    </svg>
  ),
} as const;

export const Phone = (p: P) => (
  <svg viewBox="0 0 20 20" fill="none" className={p.className} aria-hidden="true">
    <path d="M4.2 3h2.9l1.4 3.6-1.8 1.3a9.3 9.3 0 0 0 4.4 4.4l1.3-1.8L16 11.9v2.9c0 .9-.7 1.6-1.6 1.5C8 15.8 4.2 12 3.7 4.6A1.5 1.5 0 0 1 4.2 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const WhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={p.className} aria-hidden="true">
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2.1 22l5.36-1.4a9.8 9.8 0 0 0 4.58 1.17h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm5.76 14.06c-.24.68-1.42 1.3-1.96 1.34-.5.05-.98.23-3.3-.69-2.78-1.1-4.54-3.95-4.68-4.13-.14-.18-1.12-1.49-1.12-2.84s.71-2.02.96-2.29c.25-.27.55-.34.73-.34l.52.01c.17 0 .4-.06.62.48.24.57.8 1.97.87 2.11.07.14.12.3.02.48-.09.18-.14.3-.28.46l-.42.49c-.14.14-.28.3-.12.58.16.28.71 1.17 1.52 1.9 1.04.93 1.92 1.21 2.2 1.35.27.14.43.12.59-.07.16-.19.68-.8.86-1.07.18-.27.36-.23.6-.14.25.09 1.57.74 1.84.88.27.14.45.2.52.32.07.11.07.65-.17 1.33Z" />
  </svg>
);

export const Mail = (p: P) => (
  <svg viewBox="0 0 20 20" fill="none" className={p.className} aria-hidden="true">
    <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="m3.2 6 6.8 4.8L16.8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Pin = (p: P) => (
  <svg viewBox="0 0 20 20" fill="none" className={p.className} aria-hidden="true">
    <path d="M10 17.5s5.5-4.9 5.5-9a5.5 5.5 0 1 0-11 0c0 4.1 5.5 9 5.5 9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="10" cy="8.4" r="2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 20 20" fill="none" className={p.className} aria-hidden="true">
    <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
