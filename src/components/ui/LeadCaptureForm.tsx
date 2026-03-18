"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

const COUNTRY_CODES = [
  { code: "+234", label: "\u{1F1F3}\u{1F1EC} Nigeria (+234)" },
  { code: "+233", label: "\u{1F1EC}\u{1F1ED} Ghana (+233)" },
  { code: "+254", label: "\u{1F1F0}\u{1F1EA} Kenya (+254)" },
  { code: "+250", label: "\u{1F1F7}\u{1F1FC} Rwanda (+250)" },
  { code: "+27", label: "\u{1F1FF}\u{1F1E6} South Africa (+27)" },
  { code: "+44", label: "\u{1F1EC}\u{1F1E7} United Kingdom (+44)" },
  { code: "+353", label: "\u{1F1EE}\u{1F1EA} Ireland (+353)" },
  { code: "+1-US", label: "\u{1F1FA}\u{1F1F8} United States (+1)" },
  { code: "+1-CA", label: "\u{1F1E8}\u{1F1E6} Canada (+1)" },
  { code: "+61", label: "\u{1F1E6}\u{1F1FA} Australia (+61)" },
  { code: "+971", label: "\u{1F1E6}\u{1F1EA} UAE (+971)" },
  { code: "+974", label: "\u{1F1F6}\u{1F1E6} Qatar (+974)" },
];

interface LeadCaptureFormProps {
  source: "waitlist" | "careers";
  interestOptions?: { value: string; label: string }[];
}

const WAITLIST_OPTIONS = [
  { value: "client", label: "I want to find & book services" },
  { value: "vendor", label: "I want to offer my services" },
  { value: "both", label: "Both \u2014 I'm a client and a vendor" },
];

export function LeadCaptureForm({
  source,
  interestOptions,
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+234");
  const [interest, setInterest] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const options = interestOptions || (source === "waitlist" ? WAITLIST_OPTIONS : []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const phoneClean = phone.trim().replace(/^0+/, "");
      const { error } = await supabase.from("website_leads").insert({
        email: email.trim().toLowerCase(),
        phone: phoneClean || null,
        country_code: countryCode,
        source,
        interest: interest || null,
        metadata: {},
      });

      if (error) {
        if (error.code === "23505") {
          setStatus("success");
          return;
        }
        throw error;
      }
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-vendoh-blue-light/70 border border-vendoh-blue/10 p-7 text-center"
      >
        <CheckCircle size={36} className="text-vendoh-blue mx-auto mb-3" />
        <p className="font-semibold text-lg text-vendoh-blue">
          You&apos;re on the list!
        </p>
        <p className="text-sm mt-1.5 text-text-secondary">
          We&apos;ll be in touch when Vendoh launches.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-left">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="Email address"
        required
        className="w-full rounded-xl px-4 py-3.5 text-sm bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 outline-none transition-all"
      />
      <div className="flex gap-2">
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="rounded-xl px-3 py-3.5 text-sm bg-white border border-border text-foreground outline-none focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 transition-all cursor-pointer w-[120px]"
        >
          {COUNTRY_CODES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label}
            </option>
          ))}
        </select>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
          pattern="[0-9]{7,11}"
          className="flex-1 rounded-xl px-4 py-3.5 text-sm bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 outline-none transition-all"
        />
      </div>
      {options.length > 0 && (
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-xl px-4 py-3.5 text-sm bg-white border border-border text-foreground outline-none focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 transition-all cursor-pointer"
        >
          <option value="">Select your interest...</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl bg-vendoh-orange px-6 py-3.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(240,125,74,0.3)] hover:shadow-[0_4px_16px_rgba(240,125,74,0.4)] hover:bg-vendoh-orange-dark transition-all duration-200 hover:-translate-y-px disabled:opacity-60"
      >
        {status === "loading" ? (
          <Loader2 size={18} className="animate-spin mx-auto" />
        ) : source === "careers" ? (
          "Join Talent Waitlist"
        ) : (
          "Join the Waitlist"
        )}
      </button>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-error"
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>

      <p className="text-xs text-text-tertiary text-center">
        We&apos;ll never share your information. Unsubscribe anytime.
      </p>
    </form>
  );
}
