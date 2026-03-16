"use client";

import { Suspense, lazy, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface Spline3DSceneProps {
  /** Spline scene URL — get from Spline.design export */
  sceneUrl?: string;
  className?: string;
  fallback?: React.ReactNode;
}

/**
 * Interactive 3D scene powered by Spline.
 *
 * To create your scene:
 * 1. Go to https://app.spline.design (free tier)
 * 2. Create a floating phone or service icon scene
 * 3. Export → Share → Copy embed URL
 * 4. Pass as sceneUrl prop
 *
 * The component lazy-loads Spline (~200KB) only when visible.
 */
export function Spline3DScene({
  sceneUrl,
  className = "",
  fallback,
}: Spline3DSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!sceneUrl) {
    return fallback ?? null;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading shimmer while Spline loads */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-vendoh-plum-200/30 to-vendoh-orange-200/20 animate-pulse" />
        </div>
      )}
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-vendoh-plum-100/30 animate-pulse" />
          </div>
        }
      >
        <Spline
          scene={sceneUrl}
          onLoad={() => setIsLoaded(true)}
          style={{ width: "100%", height: "100%" }}
        />
      </Suspense>
    </div>
  );
}
