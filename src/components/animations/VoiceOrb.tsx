"use client";

import { motion } from "framer-motion";

export function VoiceOrb({ size = 80 }: { size?: number }) {
  const coreSize = size * 0.55;
  const shimmerSize = size * 0.25;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Outer pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(75,108,255,0.12) 0%, transparent 65%)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      />

      {/* Secondary ring */}
      <motion.div
        className="absolute inset-1 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.8,
        }}
      />

      {/* Core orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: coreSize,
          height: coreSize,
          top: "50%",
          left: "50%",
          marginTop: -coreSize / 2,
          marginLeft: -coreSize / 2,
          background:
            "linear-gradient(135deg, #4B6CFF 0%, #7B9AFF 35%, #FF8533 70%, #FF6B00 100%)",
          boxShadow:
            "0 0 24px rgba(75,108,255,0.35), 0 0 48px rgba(255,107,0,0.15), inset 0 -2px 6px rgba(0,0,0,0.1)",
        }}
        animate={{
          scale: [1, 1.06, 1],
          rotate: [0, 5, 0],
          boxShadow: [
            "0 0 24px rgba(75,108,255,0.35), 0 0 48px rgba(255,107,0,0.15), inset 0 -2px 6px rgba(0,0,0,0.1)",
            "0 0 36px rgba(75,108,255,0.5), 0 0 64px rgba(255,107,0,0.25), inset 0 -2px 6px rgba(0,0,0,0.1)",
            "0 0 24px rgba(75,108,255,0.35), 0 0 48px rgba(255,107,0,0.15), inset 0 -2px 6px rgba(0,0,0,0.1)",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Specular highlight */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: shimmerSize,
          height: shimmerSize,
          top: "38%",
          left: "42%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.1) 60%, transparent 80%)",
        }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
