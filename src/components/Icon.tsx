const P: Record<string, string> = {
  lock: 'M6 11V8a6 6 0 1 1 12 0v3M5 11h14v10H5z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6s8 2 8 6',
  building: 'M4 21V4h11v17M15 9h5v12M8 8h3M8 12h3M8 16h3M18 13v2',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  check: 'M5 12l5 5 9-10',
  box: 'M4 8h16v12H4zM8 8V6a4 4 0 0 1 8 0v2',
  hand: 'M3 12l5-4 4 2 4-2 5 4-5 5-4-2-4 2zM8 8l4 6',
  chart: 'M5 20V14M10 20V9M15 20V12M20 20V5',
  card: 'M3 6h18v12H3zM3 10h18',
  doc: 'M6 3h9l4 4v14H6zM9 12h7M9 16h7',
  wa: 'M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3zM9 8c0 4 3 7 7 7',
}
export default function Icon({ n, s = 24 }: { n: keyof typeof P | string; s?: number }) {
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d={P[n]} /></svg>
}
