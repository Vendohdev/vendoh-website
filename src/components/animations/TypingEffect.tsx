"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "I need a plumber in Lekki",
  "find me a makeup artist for Saturday",
  "who can fix my AC today?",
  "I need a private chef for my dinner party",
  "find a reliable electrician nearby",
];

export function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = PHRASES[phraseIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentPhrase.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setPhraseIndex((p) => (p + 1) % PHRASES.length);
          }
        }
      },
      isDeleting ? 25 : 55
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhrase.length]);

  return (
    <>
      <span className="block text-foreground">
        &ldquo;Hello Vendoh,
      </span>
      <span className="block mt-1">
        <span className="gradient-text">{currentPhrase.slice(0, charIndex)}</span>
        <span className="typing-cursor text-vendoh-orange font-light">|</span>
        &rdquo;
      </span>
    </>
  );
}
