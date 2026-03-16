"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  variant?: "hero" | "footer";
}

export function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"client" | "vendor">("client");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const { error } = await supabase.from("waitlist").insert({
        email: email.trim().toLowerCase(),
        role,
      });

      if (error) {
        if (error.code === "23505") {
          setStatus("success");
          setEmail("");
          return;
        }
        throw error;
      }
      setStatus("success");
      setEmail("");
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
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="w-full max-w-md"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          {/* Role Toggle */}
          <div className={`inline-flex gap-1 p-1 rounded-full mb-4 ${
            isHero ? "bg-surface border border-border-light" : "bg-white/10 border border-white/10"
          }`}>
            {(["client", "vendor"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  role === r
                    ? r === "client"
                      ? "bg-vendoh-blue text-white shadow-sm"
                      : "bg-vendoh-orange text-white shadow-sm"
                    : isHero
                    ? "text-text-secondary hover:text-foreground"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {r === "client" ? "I need services" : "I offer services"}
              </button>
            ))}
          </div>

          {/* Email Input + Submit */}
          <div className="flex gap-2.5">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email"
              required
              className={`flex-1 rounded-full px-5 py-3.5 text-sm outline-none transition-all ${
                isHero
                  ? "bg-white border border-border text-foreground placeholder:text-text-tertiary focus:border-vendoh-blue focus:ring-2 focus:ring-vendoh-blue/15 shadow-sm"
                  : "bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:border-white/40 focus:ring-2 focus:ring-white/15 backdrop-blur-sm"
              }`}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className={`rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 disabled:opacity-60 hover:-translate-y-px ${
                role === "vendor"
                  ? "bg-vendoh-orange hover:bg-vendoh-orange-dark shadow-[0_2px_8px_rgba(240,125,74,0.3)]"
                  : "bg-vendoh-blue hover:bg-vendoh-blue-dark shadow-[0_2px_8px_rgba(107,74,138,0.25)]"
              }`}
            >
              {status === "loading" ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                "Join"
              )}
            </button>
          </div>

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
              isHero ? "text-text-tertiary" : "text-white/40"
            }`}
          >
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
