"use client";

import { useState } from "react";

// ─────────────────────────────────────────────────────────────
// SETUP FORMSPREE (lakukan sekali):
// 1. Buka https://formspree.io → Sign up gratis
// 2. Klik "New Form" → beri nama (misal: "portfolio-contact")
// 3. Copy endpoint yang dikasih, bentuknya: https://formspree.io/f/xxxxxxxx
// 4. Ganti nilai FORMSPREE_ENDPOINT di bawah ini dengan endpoint kamu
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdavgjy";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(
          json?.errors?.[0]?.message ||
          "Something went wrong. Please try again or email me directly."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  // ── Success state ──
  if (status === "success") {
    return (
      <div className="py-10 text-center">
        <div
          className="text-4xl mb-4"
          aria-hidden="true"
        >
          ✓
        </div>
        <h3
          className="text-[16px] font-semibold mb-2"
          style={{ color: "var(--text)" }}
        >
          Message sent
        </h3>
        <p className="text-[13px]" style={{ color: "var(--text-2)" }}>
          I'll get back to you as soon as I can.
        </p>
        <button
          type="button"
          className="btn ghost mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  // ── Form ──
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="cf-name" className="label block mb-2">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          className="input"
          placeholder="Your name"
          required
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="label block mb-2">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          className="input"
          placeholder="you@example.com"
          required
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="label block mb-2">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          className="input"
          rows={6}
          placeholder="Tell me what you want to build..."
          required
          disabled={status === "loading"}
        />
      </div>

      {/* Error message */}
      {status === "error" && (
        <p
          className="text-[12px] mono px-3 py-2 rounded"
          style={{
            color: "var(--red-text)",
            background: "var(--red-bg)",
            border: "1px solid var(--red-bd)",
          }}
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="btn primary w-full"
        style={{ justifyContent: "center" }}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message →"}
      </button>

      <p className="text-[11px] mono" style={{ color: "var(--text-3)" }}>
        Powered by Formspree. Your message goes straight to my inbox.
      </p>
    </form>
  );
}