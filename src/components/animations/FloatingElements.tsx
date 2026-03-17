"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Wrench,
  ChefHat,
  Zap,
  Sparkles,
  Car,
  Baby,
  SprayCan,
} from "lucide-react";

const FLOAT_ITEMS = [
  {
    icon: Scissors,
    label: "Beauty",
    color: "from-vendoh-orange/80 to-vendoh-orange-400/80",
    shadow: "rgba(240,125,74,0.3)",
    size: 88,
    position: "top-[12%] left-[5%]",
    delay: 0,
    duration: 6,
    rotate: -12,
  },
  {
    icon: Wrench,
    label: "Repairs",
    color: "from-vendoh-blue/80 to-vendoh-plum-400/80",
    shadow: "rgba(107,74,138,0.3)",
    size: 80,
    position: "top-[8%] right-[12%]",
    delay: 1.2,
    duration: 7,
    rotate: 15,
  },
  {
    icon: ChefHat,
    label: "Food",
    color: "from-vendoh-orange-400/80 to-vendoh-orange-300/80",
    shadow: "rgba(255,154,108,0.3)",
    size: 76,
    position: "bottom-[28%] left-[2%]",
    delay: 0.8,
    duration: 5.5,
    rotate: -8,
  },
  {
    icon: Zap,
    label: "Electric",
    color: "from-vendoh-orange-300/80 to-vendoh-orange-200/80",
    shadow: "rgba(255,163,102,0.3)",
    size: 72,
    position: "top-[35%] left-[8%]",
    delay: 2,
    duration: 6.5,
    rotate: 20,
  },
  {
    icon: Car,
    label: "Auto",
    color: "from-vendoh-plum-400/80 to-vendoh-plum-300/80",
    shadow: "rgba(166,135,196,0.3)",
    size: 72,
    position: "bottom-[18%] right-[8%]",
    delay: 1.5,
    duration: 7.5,
    rotate: -18,
  },
  {
    icon: SprayCan,
    label: "Cleaning",
    color: "from-vendoh-plum-300/80 to-vendoh-plum-200/80",
    shadow: "rgba(176,138,212,0.3)",
    size: 68,
    position: "top-[55%] right-[3%]",
    delay: 0.5,
    duration: 6,
    rotate: 10,
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
  },
  {
    size: 240,
    position: "bottom-[10%] left-[-3%]",
    color: "bg-gradient-to-tr from-vendoh-orange-200/25 to-vendoh-orange/5",
    blur: "blur-2xl",
    delay: 1.5,
    duration: 9,
  },
  {
    size: 160,
    position: "top-[40%] right-[-2%]",
    color: "bg-gradient-to-bl from-vendoh-plum-300/20 to-transparent",
    blur: "blur-xl",
    delay: 3,
    duration: 7,
  },
];

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Glass orbs — large blurred gradient spheres for depth */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className={`absolute ${orb.position} rounded-full ${orb.color} ${orb.blur}`}
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
      ))}

      {/* Floating service icons — glassmorphic 3D cards */}
      {FLOAT_ITEMS.map((item, i) => (
        <motion.div
          key={item.label}
          className={`absolute ${item.position} hidden lg:flex`}
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
            {/* 3D shadow layer */}
            <div
              className="absolute inset-0 rounded-2xl opacity-40 translate-y-2 blur-md"
              style={{ background: item.shadow }}
            />
            {/* Glass card */}
            <div
              className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/30 shadow-lg`}
              style={{
                width: item.size,
                height: item.size,
                transform: `perspective(600px) rotateX(5deg) rotateY(${item.rotate > 0 ? -5 : 5}deg)`,
              }}
            >
              <item.icon
                size={item.size * 0.45}
                className="text-white drop-shadow-sm"
                strokeWidth={1.8}
              />
            </div>
          </motion.div>
        </motion.div>
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
