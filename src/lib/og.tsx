import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/**
 * Shared brand card for per-page Open Graph images.
 * Deep indigo frame, white wordmark, orange accent — mirrors the site header.
 */
export function brandOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#2A1F5C",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(99,84,184,0.55) 0%, rgba(42,31,92,0) 55%), radial-gradient(circle at 10% 90%, rgba(240,125,74,0.25) 0%, rgba(42,31,92,0) 45%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#6B5CE7",
              color: "#FFFFFF",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            V
          </div>
          <div style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 800 }}>
            Vendoh
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#FFA366",
              fontSize: 26,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", color: "rgba(255,255,255,0.65)", fontSize: 26 }}>
          Africa&apos;s voice-powered service marketplace — vendoh.io
        </div>
      </div>
    ),
    OG_SIZE
  );
}
