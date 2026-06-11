"use client";

import { useEffect, useState } from "react";

/**
 * English-only greeting for now — multilingual greetings (Bawo, Kedu, Sannu,
 * How far) are parked until voice AI language support fully launches.
 */
const PAIRS: { greeting: string; phrase: string }[] = [
  { greeting: "Hello", phrase: "I need a plumber in Lekki" },
  { greeting: "Hello", phrase: "find me a makeup artist for Saturday" },
  { greeting: "Hello", phrase: "abeg, who fit fix generator for Yaba?" },
  { greeting: "Hello", phrase: "who can fix my AC today?" },
  { greeting: "Hello", phrase: "I need a nanny for weekends, in Surulere" },
  { greeting: "Hello", phrase: "find a reliable electrician nearby" },
];

export function TypingEffect() {
  const [pairIndex, setPairIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const { greeting, phrase } = PAIRS[pairIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < phrase.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setPairIndex((p) => (p + 1) % PAIRS.length);
          }
        }
      },
      isDeleting ? 25 : 55
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phrase.length]);

  return (
    <>
      <span className="block font-display text-foreground">
        &ldquo;<span className="text-vendoh-orange">{greeting}</span>{" "}
        <span className="text-vendoh-blue">Vendoh,</span>
      </span>
      <span className="block mt-1">
        <span className="gradient-text">{phrase.slice(0, charIndex)}</span>
        <span className="typing-cursor text-vendoh-orange font-light">|</span>
        &rdquo;
      </span>
    </>
  );
}
