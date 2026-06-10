"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Founder portrait with graceful fallback: renders /founder/alex-nwoko.jpg
 * when the file exists, otherwise falls back to the AN monogram so the
 * About page never shows a broken image.
 */
export function FounderAvatar({ size = 96 }: { size?: number }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        style={{ width: size, height: size }}
        className="mx-auto rounded-full bg-gradient-to-br from-vendoh-blue to-vendoh-plum-400 flex items-center justify-center shadow-[0_8px_24px_rgba(99,84,184,0.4)]"
      >
        <span className="text-3xl font-extrabold text-white">AN</span>
      </div>
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className="relative mx-auto rounded-full overflow-hidden ring-2 ring-white/20 shadow-[0_8px_24px_rgba(99,84,184,0.4)]"
    >
      <Image
        src="/founder/alex-nwoko.jpg"
        alt="Alex Nwoko, Founder and CEO of Vendoh"
        fill
        sizes={`${size * 2}px`}
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
