"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

/**
 * 3D tilt card: tilts toward the cursor with spring physics and casts a
 * moving specular glare. Degrades gracefully — no tilt on touch devices
 * (hover never fires) and resets on pointer leave.
 */
export function TiltCard({
  children,
  className = "",
  max = 9,
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt in degrees */
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5); // pointer position within card, 0..1
  const py = useMotionValue(0.5);

  const sx = useSpring(px, { stiffness: 160, damping: 18, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 160, damping: 18, mass: 0.4 });

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);

  const glareX = useTransform(sx, [0, 1], [15, 85]);
  const glareY = useTransform(sy, [0, 1], [15, 85]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 55%)`;

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: 900 }}>
      <motion.div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.015 }}
        transition={{ scale: { duration: 0.2 } }}
        className={`relative ${className}`}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>
    </div>
  );
}
