"use client";

import { useState, useRef, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, Upload, FileText, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { ReferralShare } from "@/components/ui/ReferralShare";

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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export function LeadCaptureForm({
  source,
  interestOptions,
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+234");
  const [interest, setInterest] = useState("");
  const [firstName, setFirstName] = useState("");
  const [area, setArea] = useState("");
  const [excitedAbout, setExcitedAbout] = useState("");
  const [featureConsent, setFeatureConsent] = useState(false);
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const options = interestOptions || (source === "waitlist" ? WAITLIST_OPTIONS : []);
  const isCareers = source === "careers";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setErrorMsg("Please upload a PDF file only.");
      setStatus("error");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setErrorMsg("File size must be under 5MB (max 2 pages).");
      setStatus("error");
      return;
    }

    setCvFile(file);
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      let cvUrl: string | null = null;

      // Upload CV if provided
      if (cvFile) {
        const timestamp = Date.now();
        const safeName = email.trim().toLowerCase().replace(/[^a-z0-9]/g, "_");
        const filePath = `${safeName}_${timestamp}.pdf`;

        const { error: uploadError } = await supabase.storage
          .from("career-documents")
          .upload(filePath, cvFile, {
            contentType: "application/pdf",
            upsert: false,
          });

        if (uploadError) throw new Error(`CV upload failed: ${uploadError.message}`);
        cvUrl = filePath;
      }

      const phoneClean = phone.trim().replace(/^0+/, "");
      const quote = excitedAbout.trim().slice(0, 280);
      const { error } = await supabase.from("website_leads").insert({
        email: email.trim().toLowerCase(),
        phone: phoneClean || null,
        country_code: countryCode,
        source,
        interest: interest || null,
        metadata: {
          ...(cvUrl ? { cv_path: cvUrl } : {}),
          ...(linkedin.trim() ? { linkedin: linkedin.trim() } : {}),
          ...(portfolio.trim() ? { portfolio: portfolio.trim() } : {}),
          ...(!isCareers
            ? {
                feature_consent: featureConsent,
                ...(firstName.trim() ? { first_name: firstName.trim() } : {}),
                ...(area.trim() ? { area: area.trim() } : {}),
                ...(quote ? { excited_about: quote } : {}),
              }
            : {}),
        },
      });

      if (error) {
        if (error.code === "23505") {
          setStatus("success");
          return;
        }
        throw error;
      }
      track("waitlist_signup", { role: interest || "unspecified", source });
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
          {isCareers ? "Application received!" : "You\u0027re on the list!"}
        </p>
        <p className="text-sm mt-1.5 text-text-secondary">
          {isCareers
            ? "We\u0027ll review your profile and reach out when positions open."
            : "We\u0027ll be in touch when Vendoh launches."}
        </p>
        {!isCareers && <ReferralShare />}
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
        aria-label="Email address"
        autoComplete="email"
        required
        className="w-full rounded-xl px-4 py-3.5 text-sm bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 outline-none transition-all"
      />
      <div className="flex gap-2">
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          aria-label="Country dialling code"
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
          aria-label="Phone number"
          autoComplete="tel-national"
          pattern="[0-9]{7,11}"
          className="flex-1 rounded-xl px-4 py-3.5 text-sm bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 outline-none transition-all"
        />
      </div>
      {options.length > 0 && (
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          aria-label="Your interest"
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

      {/* First name + Area — waitlist only, backs the feature-consent promise */}
      {!isCareers && (
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name (optional)"
            aria-label="First name (optional)"
            autoComplete="given-name"
            maxLength={60}
            className="w-full min-w-0 rounded-xl px-4 py-3.5 text-sm bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 outline-none transition-all"
          />
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Area / City (optional)"
            aria-label="Area or city (optional)"
            autoComplete="address-level2"
            maxLength={60}
            className="w-full min-w-0 rounded-xl px-4 py-3.5 text-sm bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 outline-none transition-all"
          />
        </div>
      )}

      {/* Feature excitement — waitlist only, optional */}
      {!isCareers && (
        <div>
          <textarea
            value={excitedAbout}
            onChange={(e) => setExcitedAbout(e.target.value)}
            placeholder="What feature are you most excited about? (optional)"
            aria-label="What feature are you most excited about?"
            rows={2}
            maxLength={280}
            className="w-full rounded-xl px-4 py-3.5 text-sm bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 outline-none transition-all resize-none"
          />
          <div aria-live="polite" className="mt-1 text-right text-[11px] tabular-nums text-text-tertiary">
            {excitedAbout.length}/280
          </div>
          {excitedAbout.trim().length > 0 && (
            <label className="flex items-start gap-2 mt-1 cursor-pointer text-xs leading-snug text-text-secondary">
              <input
                type="checkbox"
                checked={featureConsent}
                onChange={(e) => setFeatureConsent(e.target.checked)}
                className="mt-0.5 accent-[#6354B8]"
              />
              You can feature my answer on the Vendoh site (first name and
              area only).
            </label>
          )}
        </div>
      )}

      {/* LinkedIn & Portfolio — careers only */}
      {isCareers && (
        <>
          <input
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="LinkedIn profile URL (optional)"
            className="w-full rounded-xl px-4 py-3.5 text-sm bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 outline-none transition-all"
          />
          <input
            type="url"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            placeholder="Portfolio / GitHub / Website URL (optional)"
            className="w-full rounded-xl px-4 py-3.5 text-sm bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 outline-none transition-all"
          />
        </>
      )}

      {/* CV Upload — careers only */}
      {isCareers && (
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          {cvFile ? (
            <div className="flex items-center gap-3 rounded-xl border border-vendoh-blue/20 bg-vendoh-blue-light/30 px-4 py-3">
              <FileText size={18} className="text-vendoh-blue shrink-0" />
              <span className="text-sm text-foreground truncate flex-1">
                {cvFile.name}
              </span>
              <button
                type="button"
                onClick={() => {
                  setCvFile(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="text-text-tertiary hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-dashed border-border hover:border-vendoh-blue/40 bg-white px-4 py-3.5 text-sm text-text-secondary hover:text-vendoh-blue transition-all cursor-pointer"
            >
              <Upload size={16} />
              Upload CV / Resume (PDF, max 2 pages)
            </button>
          )}
          <p className="mt-1.5 text-xs text-text-tertiary">
            Optional. PDF only, 5MB max.
          </p>
        </div>
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
