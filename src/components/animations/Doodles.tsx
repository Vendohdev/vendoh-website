/**
 * Hand-drawn artistic accents — the "flair layer" inspired by
 * DoorDash/Glovo/Chowdeck-style marketing sites. All inherit currentColor
 * so they recolor via text-* utilities.
 */

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 14"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M3 9.5C25 3.5 40 12.5 62 8.5C84 4.5 99 11.5 121 8C143 4.5 158 11 180 7.5C195 5.2 207 7.8 217 6"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Starburst({
  className = "",
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 0c.6 4.8 1.7 7.3 3.4 8.8C17 10.2 19.4 11 24 11.6v.8c-4.6.6-7 1.4-8.6 2.8-1.7 1.5-2.8 4-3.4 8.8h-.8c-.6-4.8-1.7-7.3-3.4-8.8C6.2 13.8 3.8 13 0 12.4v-.8c3.8-.6 6.2-1.4 7.8-2.8C9.5 7.3 10.6 4.8 11.2 0h.8z" />
    </svg>
  );
}

export function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 60"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M6 8C20 30 42 46 72 48"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M60 56l14-7-5-14"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Blob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M53.6,-58.4C68.4,-46.7,78.6,-28.6,80.1,-10.1C81.6,8.4,74.4,27.4,62.1,41.5C49.8,55.6,32.5,64.9,13.3,70C-5.9,75.1,-26.9,76,-43.2,67.4C-59.5,58.8,-71,40.6,-75.3,21C-79.6,1.4,-76.6,-19.7,-66.3,-35.3C-56,-50.9,-38.4,-61.1,-20.6,-70C-2.8,-78.9,15.3,-86.6,30.7,-80.9C46.2,-75.2,38.7,-70,53.6,-58.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/**
 * Wavy section cap — Glovo-style organic transition. Place as the first
 * child of a colored section; set text-* to the color of the section ABOVE.
 */
export function WaveDivider({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="block w-full h-10 sm:h-14"
      >
        <path
          fill="currentColor"
          d="M0,28 C180,58 360,2 560,14 C760,26 900,60 1100,46 C1260,35 1370,12 1440,22 L1440,0 L0,0 Z"
        />
      </svg>
    </div>
  );
}
