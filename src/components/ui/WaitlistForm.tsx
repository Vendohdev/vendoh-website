"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { track } from "@vercel/analytics";
import { ReferralShare } from "@/components/ui/ReferralShare";

interface WaitlistFormProps {
  variant?: "hero" | "footer";
  defaultRole?: "client" | "vendor";
}

const COUNTRY_CODES = [
  { code: "+234", flag: "\u{1F1F3}\u{1F1EC}", name: "Nigeria" },
  { code: "+233", flag: "\u{1F1EC}\u{1F1ED}", name: "Ghana" },
  { code: "+254", flag: "\u{1F1F0}\u{1F1EA}", name: "Kenya" },
  { code: "+250", flag: "\u{1F1F7}\u{1F1FC}", name: "Rwanda" },
  { code: "+27", flag: "\u{1F1FF}\u{1F1E6}", name: "South Africa" },
  { code: "+44", flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom" },
  { code: "+353", flag: "\u{1F1EE}\u{1F1EA}", name: "Ireland" },
  { code: "+1", flag: "\u{1F1FA}\u{1F1F8}", name: "United States" },
  { code: "+1", flag: "\u{1F1E8}\u{1F1E6}", name: "Canada" },
  { code: "+61", flag: "\u{1F1E6}\u{1F1FA}", name: "Australia" },
  { code: "+971", flag: "\u{1F1E6}\u{1F1EA}", name: "UAE" },
  { code: "+974", flag: "\u{1F1F6}\u{1F1E6}", name: "Qatar" },
];

export function WaitlistForm({ variant = "hero", defaultRole = "client" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+234");
  const [role, setRole] = useState<"client" | "vendor">(defaultRole);
  const [firstName, setFirstName] = useState("");
  const [area, setArea] = useState("");
  const [excitedAbout, setExcitedAbout] = useState("");
  const [featureConsent, setFeatureConsent] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const cleanPhone = phone.replace(/^0+/, "").replace(/\D/g, "");
      const quote = excitedAbout.trim().slice(0, 280);
      // feature_consent is always a real boolean; other keys only when non-empty
      const metadata: Record<string, string | boolean> = {
        feature_consent: featureConsent,
      };
      if (firstName.trim()) metadata.first_name = firstName.trim();
      if (area.trim()) metadata.area = area.trim();
      if (quote) metadata.excited_about = quote;

      const { error } = await supabase.from("website_leads").insert({
        email: email.trim().toLowerCase(),
        source: "waitlist",
        interest: role,
        country_code: countryCode,
        phone: cleanPhone || null,
        metadata,
      });

      if (error) {
        if (error.code === "23505") {
          setStatus("success");
          setEmail("");
          setPhone("");
          return;
        }
        throw error;
      }
      track("waitlist_signup", { role, source: "waitlist", has_quote: !!quote });
      setStatus("success");
      setEmail("");
      setPhone("");
      setFirstName("");
      setArea("");
      setExcitedAbout("");
      setFeatureConsent(false);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const isHero = variant === "hero";

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`rounded-2xl p-7 text-center ${
            isHero
              ? "bg-vendoh-blue-light/70 border border-vendoh-blue/10"
              : "bg-white/10 backdrop-blur-md border border-white/10"
          }`}
        >
          <CheckCircle
            size={36}
            className={isHero ? "text-vendoh-blue mx-auto mb-3" : "text-white mx-auto mb-3"}
          />
          <p
            className={`font-semibold text-lg ${
              isHero ? "text-vendoh-blue" : "text-white"
            }`}
          >
            You&apos;re on the list!
          </p>
          <p
            className={`text-sm mt-1.5 ${
              isHero ? "text-text-secondary" : "text-white/70"
            }`}
          >
            We&apos;ll notify you when Vendoh launches in your area.
          </p>
          <ReferralShare light={!isHero} />
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="w-full max-w-md"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          {/* Role Toggle — spring-loaded sliding pill */}
          <div className={`inline-flex gap-1 p-1 rounded-full mb-4 ${
            isHero ? "bg-surface border border-border-light" : "bg-white/10 border border-white/10"
          }`}>
            {(["client", "vendor"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                aria-pressed={role === r}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                  role === r
                    ? "text-white"
                    : isHero
                    ? "text-text-secondary hover:text-foreground"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {role === r && (
                  <motion.span
                    layoutId={`role-pill-${variant}`}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className={`absolute inset-0 rounded-full shadow-sm ${
                      r === "client" ? "bg-vendoh-blue" : "bg-vendoh-orange"
                    }`}
                  />
                )}
                <span className="relative z-10">
                  {r === "client" ? "I need services" : "I offer services"}
                </span>
              </button>
            ))}
          </div>

          {/* Email — required */}
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email *"
              aria-label="Email address (required)"
              autoComplete="email"
              required
              className={`w-full rounded-full px-5 py-3.5 text-sm outline-none transition-all ${
                isHero
                  ? "bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 shadow-sm"
                  : "bg-white/10 border border-white/25 text-white placeholder:text-white/65 focus:border-white/50 focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
              }`}
            />
          </div>

          {/* First name + Area — optional, backs the feature-consent promise */}
          <div className="grid grid-cols-2 gap-2.5 mb-3">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name (optional)"
              aria-label="First name (optional)"
              autoComplete="given-name"
              maxLength={60}
              className={`w-full min-w-0 rounded-full px-5 py-3.5 text-sm outline-none transition-all ${
                isHero
                  ? "bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 shadow-sm"
                  : "bg-white/10 border border-white/25 text-white placeholder:text-white/65 focus:border-white/50 focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
              }`}
            />
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Area / City (optional)"
              aria-label="Area or city (optional)"
              autoComplete="address-level2"
              maxLength={60}
              className={`w-full min-w-0 rounded-full px-5 py-3.5 text-sm outline-none transition-all ${
                isHero
                  ? "bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 shadow-sm"
                  : "bg-white/10 border border-white/25 text-white placeholder:text-white/65 focus:border-white/50 focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
              }`}
            />
          </div>

          {/* Phone — optional */}
          <div className="flex gap-0">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              aria-label="Country dialling code"
              className={`rounded-l-full pl-3 pr-1 py-3.5 text-sm outline-none border-r-0 cursor-pointer ${
                isHero
                  ? "bg-white border border-border text-foreground shadow-sm"
                  : "bg-white/10 border border-white/25 text-white backdrop-blur-sm"
              }`}
            >
              {COUNTRY_CODES.map((c) => (
                <option key={`${c.code}-${c.name}`} value={c.code} className="text-foreground bg-white">
                  {c.flag} {c.name} ({c.code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Phone number (optional)"
              aria-label="Phone number (optional)"
              autoComplete="tel-national"
              className={`flex-1 min-w-0 rounded-r-full px-4 py-3.5 text-sm outline-none transition-all ${
                isHero
                  ? "bg-white border border-border border-l-0 text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 shadow-sm"
                  : "bg-white/10 border border-white/25 border-l-0 text-white placeholder:text-white/65 focus:border-white/50 focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
              }`}
            />
          </div>

          {/* Feature excitement — optional, validates real waitlist voices */}
          <div className="mt-3">
            <textarea
              value={excitedAbout}
              onChange={(e) => setExcitedAbout(e.target.value)}
              placeholder="What feature are you most excited about? (optional)"
              aria-label="What feature are you most excited about?"
              rows={2}
              maxLength={280}
              className={`w-full rounded-2xl px-5 py-3 text-sm outline-none transition-all resize-none ${
                isHero
                  ? "bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 shadow-sm"
                  : "bg-white/10 border border-white/25 text-white placeholder:text-white/65 focus:border-white/50 focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
              }`}
            />
            <div
              aria-live="polite"
              className={`mt-1 text-right text-[11px] tabular-nums ${
                isHero ? "text-text-tertiary" : "text-white/55"
              }`}
            >
              {excitedAbout.length}/280
            </div>
            <AnimatePresence>
              {excitedAbout.trim().length > 0 && (
                <motion.label
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`flex items-start gap-2 mt-1 cursor-pointer text-xs leading-snug ${
                    isHero ? "text-text-secondary" : "text-white/70"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={featureConsent}
                    onChange={(e) => setFeatureConsent(e.target.checked)}
                    className="mt-0.5 accent-[#6354B8]"
                  />
                  You can feature my answer on the Vendoh site (first name and
                  area only).
                </motion.label>
              )}
            </AnimatePresence>
          </div>

          {/* Single primary CTA */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={`btn-shine mt-3 w-full inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 disabled:opacity-60 hover:-translate-y-px ${
              role === "vendor"
                ? "bg-vendoh-orange hover:bg-vendoh-orange-dark shadow-[0_2px_8px_rgba(240,125,74,0.3)]"
                : "bg-vendoh-blue hover:bg-vendoh-blue-dark shadow-[0_2px_8px_rgba(107,74,138,0.25)]"
            }`}
          >
            {status === "loading" ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              "Join the waitlist"
            )}
          </button>

          {/* Error */}
          <AnimatePresence>
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-2.5 text-sm text-error"
              >
                {errorMsg}
              </motion.p>
            )}
          </AnimatePresence>

          <p
            className={`mt-3 text-xs ${
              isHero ? "text-text-tertiary" : "text-white/65"
            }`}
          >
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
