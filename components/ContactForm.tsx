"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdakpkv";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { lang } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.errors?.[0]?.message || t.contact.form_error[lang]);
        setStatus("error");
      }
    } catch {
      setErrorMsg(t.contact.form_error[lang]);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-10 text-center">
        <div className="text-5xl mb-4" aria-hidden="true">✓</div>
        <h3 className="text-[17px] font-semibold mb-2" style={{ color: "var(--text)" }}>
          {t.contact.form_success_title[lang]}
        </h3>
        <p className="text-[14px]" style={{ color: "var(--text-2)" }}>
          {t.contact.form_success_desc[lang]}
        </p>
        <button type="button" className="btn ghost mt-6" onClick={() => setStatus("idle")}>
          {t.contact.form_send_another[lang]}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="cf-name" className="label block mb-2">{t.contact.form_name[lang]}</label>
        <input id="cf-name" name="name" className="input" placeholder={t.contact.form_ph_name[lang]} required disabled={status === "loading"} />
      </div>
      <div>
        <label htmlFor="cf-email" className="label block mb-2">{t.contact.form_email[lang]}</label>
        <input id="cf-email" name="email" type="email" className="input" placeholder="you@example.com" required disabled={status === "loading"} />
      </div>
      <div>
        <label htmlFor="cf-message" className="label block mb-2">{t.contact.form_message[lang]}</label>
        <textarea id="cf-message" name="message" className="input" rows={6} placeholder={t.contact.form_ph_msg[lang]} required disabled={status === "loading"} />
      </div>
      {status === "error" && (
        <p className="text-[12px] mono px-3 py-2 rounded" style={{ color: "var(--red-text)", background: "var(--red-bg)", border: "1px solid var(--red-bd)" }}>
          {errorMsg}
        </p>
      )}
      <button type="submit" className="btn primary w-full" style={{ justifyContent: "center" }} disabled={status === "loading"}>
        {status === "loading" ? t.contact.form_sending[lang] : t.contact.form_submit[lang]}
      </button>
      <p className="text-[11px] mono" style={{ color: "var(--text-3)" }}>
        {t.contact.form_note[lang]}
      </p>
    </form>
  );
}