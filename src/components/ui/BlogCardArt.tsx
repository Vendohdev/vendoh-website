// Distinctive per-post SVG artwork for blog cards.
// Each variant is a bespoke abstract composition keyed to the post's theme.
// Designed to sit on the gradient backgrounds defined in BlogContent.tsx —
// all artwork uses white with graduated opacity so it composes cleanly on
// any brand gradient.

export type BlogArtVariant =
  | "voice-waves"
  | "dual-rings"
  | "origin-timeline"
  | "street-grid";

interface BlogCardArtProps {
  variant: BlogArtVariant;
  className?: string;
}

/**
 * Sound-wave composition: stacked vertical bars of varying height forming
 * an audio-equalizer silhouette, with a soft radial glow behind the centre
 * bar. Used for the voice-first post.
 */
function VoiceWaves() {
  const bars = [
    { x: 40, h: 18 },
    { x: 60, h: 36 },
    { x: 80, h: 58 },
    { x: 100, h: 80 },
    { x: 120, h: 104 },
    { x: 140, h: 80 },
    { x: 160, h: 58 },
    { x: 180, h: 36 },
    { x: 200, h: 18 },
  ];
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="vw-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="90" r="78" fill="url(#vw-glow)" />
      {/* Concentric arcs */}
      <circle cx="120" cy="90" r="70" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
      <circle cx="120" cy="90" r="52" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1" />
      {/* Equalizer bars */}
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x - 4}
          y={90 - b.h / 2}
          width="8"
          height={b.h}
          rx="4"
          fill="#ffffff"
          fillOpacity={0.22 + (i === 4 ? 0.25 : 0)}
        />
      ))}
      {/* Dot over the centre bar — the "speak now" indicator */}
      <circle cx="120" cy="30" r="3" fill="#ffffff" fillOpacity="0.85" />
    </svg>
  );
}

/**
 * Two interlocking rings forming a Venn/infinity composition.
 * Client on the left, Vendor on the right, one identity at the intersection.
 */
function DualRings() {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="dr-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="180" fill="url(#dr-glow)" />
      {/* Left ring — Client */}
      <circle
        cx="95"
        cy="90"
        r="55"
        stroke="#ffffff"
        strokeOpacity="0.55"
        strokeWidth="2.5"
        fill="#ffffff"
        fillOpacity="0.04"
      />
      {/* Right ring — Vendor */}
      <circle
        cx="145"
        cy="90"
        r="55"
        stroke="#ffffff"
        strokeOpacity="0.55"
        strokeWidth="2.5"
        fill="#ffffff"
        fillOpacity="0.04"
      />
      {/* Intersection highlight dot */}
      <circle cx="120" cy="90" r="4" fill="#ffffff" fillOpacity="0.9" />
      {/* Labels */}
      <text
        x="62"
        y="95"
        fontFamily="system-ui, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#ffffff"
        fillOpacity="0.85"
        letterSpacing="1.5"
      >
        C
      </text>
      <text
        x="172"
        y="95"
        fontFamily="system-ui, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#ffffff"
        fillOpacity="0.85"
        letterSpacing="1.5"
      >
        V
      </text>
    </svg>
  );
}

/**
 * Origin timeline: "2019" and "2026" as large ghosted numerals with a
 * connecting dashed line and a single arrowhead. Seven years of journey
 * compressed into a single visual beat.
 */
function OriginTimeline() {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ot-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Background typographic years */}
      <text
        x="12"
        y="125"
        fontFamily="system-ui, sans-serif"
        fontSize="58"
        fontWeight="900"
        fill="#ffffff"
        fillOpacity="0.12"
        letterSpacing="-2"
      >
        2019
      </text>
      <text
        x="130"
        y="125"
        fontFamily="system-ui, sans-serif"
        fontSize="58"
        fontWeight="900"
        fill="#ffffff"
        fillOpacity="0.22"
        letterSpacing="-2"
      >
        2026
      </text>
      {/* Connecting line */}
      <line
        x1="40"
        y1="45"
        x2="200"
        y2="45"
        stroke="url(#ot-line)"
        strokeWidth="1.5"
        strokeDasharray="2 4"
      />
      {/* Start dot */}
      <circle cx="40" cy="45" r="3" fill="#ffffff" fillOpacity="0.6" />
      {/* End arrow */}
      <circle cx="200" cy="45" r="5" fill="#ffffff" fillOpacity="0.9" />
      <path
        d="M 195 40 L 205 45 L 195 50"
        stroke="#ffffff"
        strokeOpacity="0.9"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Street-grid composition: an isometric lattice of intersecting lines with
 * a handful of accent dots marking where vendors exist on the map. Evokes
 * both a city plan and a GIS vector layer.
 */
function StreetGrid() {
  // Build a light lattice of vertical and horizontal lines
  const lines = [];
  for (let x = 20; x <= 220; x += 20) {
    lines.push(<line key={`v${x}`} x1={x} y1="10" x2={x} y2="170" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" />);
  }
  for (let y = 20; y <= 160; y += 20) {
    lines.push(<line key={`h${y}`} x1="10" y1={y} x2="230" y2={y} stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" />);
  }
  const dots = [
    { cx: 60, cy: 60, r: 4 },
    { cx: 120, cy: 90, r: 6 },
    { cx: 180, cy: 70, r: 3 },
    { cx: 80, cy: 130, r: 3 },
    { cx: 160, cy: 120, r: 4 },
    { cx: 200, cy: 140, r: 3 },
  ];
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sg-fade" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="240" height="180" fill="url(#sg-fade)" />
      {/* Rotated grid layer for a more architectural feel */}
      <g transform="rotate(-6 120 90)">{lines}</g>
      {/* Accent ping dots — vendors on the map */}
      {dots.map((d, i) => (
        <g key={i}>
          <circle cx={d.cx} cy={d.cy} r={d.r + 3} fill="#ffffff" fillOpacity="0.15" />
          <circle cx={d.cx} cy={d.cy} r={d.r} fill="#ffffff" fillOpacity="0.95" />
        </g>
      ))}
      {/* Diagonal accent stroke — the "street that runs across everything" */}
      <line
        x1="20"
        y1="150"
        x2="220"
        y2="40"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BlogCardArt({ variant, className = "" }: BlogCardArtProps) {
  const Art = {
    "voice-waves": VoiceWaves,
    "dual-rings": DualRings,
    "origin-timeline": OriginTimeline,
    "street-grid": StreetGrid,
  }[variant];

  return (
    <div className={`h-full w-full ${className}`}>
      <Art />
    </div>
  );
}
