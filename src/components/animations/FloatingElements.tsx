"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  Scissors,
  Wrench,
  ChefHat,
  Zap,
  Sparkles,
  Car,
  SprayCan,
} from "lucide-react";

type FloatItemSpec = {
  icon: React.ElementType;
  label: string;
  color: string;
  shadow: string;
  size: number;
  position: string;
  delay: number;
  duration: number;
  rotate: number;
  /** Parallax depth — higher moves more with the cursor (feels closer) */
  depth: number;
};

const FLOAT_ITEMS: FloatItemSpec[] = [
  {
    icon: Scissors,
    label: "Beauty",
    color: "from-vendoh-orange/85 to-vendoh-orange-400/85",
    shadow: "rgba(240,125,74,0.35)",
    size: 88,
    position: "top-[12%] left-[5%]",
    delay: 0,
    duration: 6,
    rotate: -12,
    depth: 1.4,
  },
  {
    icon: Wrench,
    label: "Repairs",
    color: "from-vendoh-blue/85 to-vendoh-plum-400/85",
    shadow: "rgba(107,74,138,0.35)",
    size: 80,
    position: "top-[8%] right-[12%]",
    delay: 1.2,
    duration: 7,
    rotate: 15,
    depth: 1.0,
  },
  {
    icon: ChefHat,
    label: "Food",
    color: "from-vendoh-orange-400/85 to-vendoh-orange-300/85",
    shadow: "rgba(255,154,108,0.35)",
    size: 76,
    position: "bottom-[28%] left-[2%]",
    delay: 0.8,
    duration: 5.5,
    rotate: -8,
    depth: 0.7,
  },
  {
    icon: Zap,
    label: "Electric",
    color: "from-vendoh-orange-300/85 to-vendoh-orange-200/85",
    shadow: "rgba(255,163,102,0.35)",
    size: 72,
    position: "top-[35%] left-[8%]",
    delay: 2,
    duration: 6.5,
    rotate: 20,
    depth: 1.2,
  },
  {
    icon: Car,
    label: "Auto",
    color: "from-vendoh-plum-400/85 to-vendoh-plum-300/85",
    shadow: "rgba(166,135,196,0.35)",
    size: 72,
    position: "bottom-[18%] right-[8%]",
    delay: 1.5,
    duration: 7.5,
    rotate: -18,
    depth: 0.9,
  },
  {
    icon: SprayCan,
    label: "Cleaning",
    color: "from-vendoh-plum-300/85 to-vendoh-plum-200/85",
    shadow: "rgba(176,138,212,0.35)",
    size: 68,
    position: "top-[55%] right-[3%]",
    delay: 0.5,
    duration: 6,
    rotate: 10,
    depth: 1.6,
  },
];

/* Decorative glass orbs — pure CSS 3D feel */
const ORBS = [
  {
    size: 360,
    position: "top-[-5%] right-[15%]",
    color: "bg-gradient-to-br from-vendoh-plum-200/30 to-vendoh-blue/10",
    blur: "blur-3xl",
    delay: 0,
    duration: 8,
    depth: 0.35,
  },
  {
    size: 240,
    position: "bottom-[10%] left-[-3%]",
    color: "bg-gradient-to-tr from-vendoh-orange-200/25 to-vendoh-orange/5",
    blur: "blur-2xl",
    delay: 1.5,
    duration: 9,
    depth: 0.5,
  },
  {
    size: 160,
    position: "top-[40%] right-[-2%]",
    color: "bg-gradient-to-bl from-vendoh-plum-300/20 to-transparent",
    blur: "blur-xl",
    delay: 3,
    duration: 7,
    depth: 0.65,
  },
];

const PARALLAX_RANGE = 26; // px of travel at depth 1.0

function ParallaxLayer({
  springX,
  springY,
  depth,
  className,
  children,
}: {
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  depth: number;
  className?: string;
  children: React.ReactNode;
}) {
  const x = useTransform(springX, (v) => v * PARALLAX_RANGE * depth);
  const y = useTransform(springY, (v) => v * PARALLAX_RANGE * depth);
  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}

export function FloatingElements() {
  // Normalised cursor position (-1..1), spring-smoothed for weight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 18, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 18, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    const onMove = (e: PointerEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ perspective: 1000 }}
    >
      {/* Glass orbs — far layer, drifts gently against the cursor */}
      {ORBS.map((orb, i) => (
        <ParallaxLayer
          key={`orb-${i}`}
          springX={springX}
          springY={springY}
          depth={-orb.depth}
          className={`absolute ${orb.position}`}
        >
          <motion.div
            className={`rounded-full ${orb.color} ${orb.blur}`}
            style={{ width: orb.size, height: orb.size }}
            animate={{
              y: [0, -15, 0, 12, 0],
              x: [0, 8, 0, -6, 0],
              scale: [1, 1.05, 1, 0.97, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              delay: orb.delay,
              ease: "easeInOut",
            }}
          />
        </ParallaxLayer>
      ))}

      {/* Floating service icons — near layer, follows the cursor in 3D */}
      {FLOAT_ITEMS.map((item) => (
        <ParallaxLayer
          key={item.label}
          springX={springX}
          springY={springY}
          depth={item.depth}
          className={`absolute ${item.position} hidden lg:block`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + item.delay * 0.3, duration: 0.6 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -18, 0, 14, 0],
                rotate: [item.rotate, item.rotate + 3, item.rotate, item.rotate - 2, item.rotate],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
            >
              {/* Grounded shadow — sells the depth */}
              <div
                className="absolute inset-0 rounded-2xl opacity-45 translate-y-3 scale-90 blur-lg"
                style={{ background: item.shadow }}
              />
              {/* Glass card with specular highlight */}
              <div
                className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden`}
                style={{
                  width: item.size,
                  height: item.size,
                  transform: `perspective(600px) rotateX(8deg) rotateY(${item.rotate > 0 ? -8 : 8}deg)`,
                }}
              >
                {/* Top specular sheen */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent" />
                {/* Inner rim light */}
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-2px_6px_rgba(0,0,0,0.15)]" />
                <item.icon
                  size={item.size * 0.45}
                  className="relative text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
                  strokeWidth={1.8}
                />
              </div>
            </motion.div>
          </motion.div>
        </ParallaxLayer>
      ))}

      {/* Sparkle accents */}
      {[
        { pos: "top-[20%] left-[18%]", delay: 2, size: 28 },
        { pos: "top-[65%] right-[15%]", delay: 3.5, size: 24 },
        { pos: "bottom-[35%] left-[12%]", delay: 1, size: 32 },
      ].map((spark, i) => (
        <motion.div
          key={`spark-${i}`}
          className={`absolute ${spark.pos} hidden lg:block`}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: spark.delay,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={spark.size} className="text-vendoh-plum-300/40" />
        </motion.div>
      ))}
    </div>
  );
}
