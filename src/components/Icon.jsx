// Small stroke icon set used by cards across the site.
const paths = {
  pill: <><path d="M10.5 20.5a5 5 0 01-7-7l10-10a5 5 0 017 7z" /><path d="M8.5 8.5l7 7" /></>,
  capsule: <><rect x="2" y="8" width="20" height="8" rx="4" /><path d="M12 8v8" /></>,
  bottle: <><path d="M9 2h6v4H9z" /><path d="M8 6h8l1 3v11a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" /><path d="M7 13h10" /></>,
  tube: <><path d="M7 3h10l-1 4H8z" /><path d="M8 7h8v10l-2 4h-4l-2-4z" /></>,
  powder: <><path d="M6 10h12l-1.5 10a2 2 0 01-2 2h-5a2 2 0 01-2-2z" /><path d="M9 10V6a3 3 0 016 0v4" /></>,
  drop: <path d="M12 2.7l5.7 5.7a8 8 0 11-11.4 0z" />,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>,
  handshake: <><path d="M11 17l2 2a1 1 0 003-3" /><path d="M14 14l2.5 2.5a1 1 0 003-3l-3.88-3.88a3 3 0 00-4.24 0l-.88.88a1 1 0 11-3-3l2.81-2.81a5.79 5.79 0 017.06-.87l.47.28a2 2 0 001.42.25L21 4" /><path d="M21 3l1 11h-2" /><path d="M3 3L2 14l6.5 6.5a1 1 0 003-3" /><path d="M3 4h8" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>,
  factory: <><path d="M2 20h20" /><path d="M4 20V9l5 3V9l5 3V9l5 3v8" /><path d="M8 16h1M12 16h1M16 16h1" /></>,
  flask: <><path d="M9 3h6" /><path d="M10 3v6L4.5 18.5A2 2 0 006.2 21.5h11.6a2 2 0 001.7-3L14 9V3" /><path d="M7 15h10" /></>,
  tag: <><path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L2 12V2h10l8.6 8.6a2 2 0 010 2.8z" /><circle cx="7" cy="7" r="1.5" /></>,
  truck: <><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
  clipboard: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3h6v3H9z" /><path d="M9 12l2 2 4-4" /></>,
  users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z" />,
  award: <><circle cx="12" cy="8" r="6" /><path d="M15.5 12.9L17 22l-5-3-5 3 1.5-9.1" /></>,
  box: <><path d="M21 16V8a2 2 0 00-1-1.7l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.7l7 4a2 2 0 002 0l7-4a2 2 0 001-1.7z" /><path d="M3.3 7L12 12l8.7-5M12 22V12" /></>,
  phone: <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
  mail: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  pin: <><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
  doc: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
}

export default function Icon({ name, size }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width={size} height={size}>
      {paths[name]}
    </svg>
  )
}
