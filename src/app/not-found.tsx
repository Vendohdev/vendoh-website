import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-vendoh-ink min-h-[80vh] flex items-center justify-center pt-16">
      <div className="mx-auto max-w-xl px-4 sm:px-6 py-24 text-center">
        <p className="text-7xl sm:text-8xl font-extrabold text-white/10 select-none">
          404
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
          This page no dey o
        </h1>
        <p className="mt-4 text-white/70 leading-relaxed">
          The page you&apos;re looking for has moved, never existed, or is off
          fixing someone&apos;s AC in Lekki. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#FF9A6C] px-7 py-3 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(255,154,108,0.35)] hover:bg-[#FF8A58] transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Explore features
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Read the FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
