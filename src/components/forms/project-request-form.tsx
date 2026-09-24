"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { inquiryTopics } from "@/features/inquiry/options";
const labels = {
  firstName: "Vorname",
  lastName: "Nachname",
  email: "E-Mail",
  phone: "Telefon (optional)",
  postalCode: "Projektort / PLZ",
};
export function ProjectRequestForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const startedAt = useRef(0);
  const summary = useRef<HTMLDivElement>(null);
  const completed = useRef<HTMLDivElement>(null);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  useEffect(() => {
    if (Object.keys(errors).length || message) summary.current?.focus();
  }, [errors, message]);
  useEffect(() => {
    if (success) completed.current?.focus();
  }, [success]);
  if (success)
    return (
      <div className="form-success" ref={completed} tabIndex={-1}>
        <p className="eyebrow">
          <span />
          Demo erfolgreich geprüft
        </p>
        <h2>Ihr Test ist abgeschlossen.</h2>
        <p>
          Ihre Angaben wurden geprüft. Die Anfrage wurde{" "}
          <strong>nicht versendet oder gespeichert</strong>. Ausgewählte Dateien
          blieben auf Ihrem Gerät.
        </p>
        <button
          type="button"
          className="button button--primary"
          onClick={() => {
            setSuccess(false);
            setErrors({});
            setMessage("");
            startedAt.current = Date.now();
          }}
        >
          Weitere Anfrage testen
        </button>
      </div>
    );
  return (
    <form
      className="request-form"
      noValidate
      onSubmit={async (event) => {
        event.preventDefault();
        if (pending) return;
        setErrors({});
        setMessage("");
        const form = event.currentTarget;
        const values = new FormData(form);
        const files = (values.getAll("files") as File[]).filter(
          (f) => f.size > 0,
        );
        const input = {
          ...Object.fromEntries(values),
          consent: values.get("consent") === "on",
          startedAt: startedAt.current,
          attachments: files.map((f) => ({
            name: f.name,
            size: f.size,
            type: f.type,
          })),
        };
        setPending(true);
        try {
          const { inquirySchema } = await import("@/features/inquiry/schema");
          const parsed = inquirySchema.safeParse(input);
          if (!parsed.success) {
            const next: Record<string, string> = {};
            parsed.error.issues.forEach((i) => {
              const k = String(i.path[0]);
              next[k] ??= i.message;
            });
            setErrors(next);
            return;
          }
          const response = await fetch("/api/inquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(parsed.data),
          });
          const data = await response.json();
          if (!response.ok) {
            setErrors(data.errors ?? {});
            setMessage(data.message ?? "Bitte versuchen Sie es erneut.");
            return;
          }
          form.reset();
          setSuccess(true);
        } catch {
          setMessage(
            "Die Verbindung wurde unterbrochen. Ihre Angaben bleiben erhalten. Bitte versuchen Sie es erneut.",
          );
        } finally {
          setPending(false);
        }
      }}
    >
      <div className="demo-notice">
        <strong>Präsentationsdemo</strong>
        <br />
        Bitte nur Testdaten verwenden. Angaben werden zur Prüfung an den lokalen
        Demo-Server übertragen, aber nicht gespeichert oder versendet. Dateien
        bleiben auf Ihrem Gerät.
      </div>
      {Object.keys(errors).length > 0 || message ? (
        <div className="error-summary" ref={summary} tabIndex={-1} role="alert">
          <h3>Bitte prüfen Sie Ihre Angaben.</h3>
          {message ? <p>{message}</p> : null}
          <ul>
            {Object.entries(errors).map(([key, value]) => (
              <li key={key}>
                <a href={"#request-" + key}>{value}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="form-field">
        <label htmlFor="request-topic">Leistungsbereich *</label>
        <select
          id="request-topic"
          name="topic"
          defaultValue=""
          aria-invalid={!!errors.topic}
          aria-describedby={errors.topic ? "error-topic" : undefined}
        >
          <option value="" disabled>
            Bitte auswählen
          </option>
          {inquiryTopics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {errors.topic ? (
          <span className="field-error" id="error-topic">
            {errors.topic}
          </span>
        ) : null}
      </div>
      <div className="form-field">
        <label htmlFor="request-timeframe">Gewünschter Zeitraum</label>
        <select id="request-timeframe" name="timeframe">
          {[
            "Noch offen",
            "In den nächsten 3 Monaten",
            "In 3–6 Monaten",
            "Später",
          ].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      {Object.entries(labels).map(([name, label]) => (
        <div className="form-field" key={name}>
          <label htmlFor={"request-" + name}>
            {label}
            {name !== "phone" ? " *" : ""}
          </label>
          <input
            id={"request-" + name}
            name={name}
            type={
              name === "email" ? "email" : name === "phone" ? "tel" : "text"
            }
            autoComplete={
              name === "firstName"
                ? "given-name"
                : name === "lastName"
                  ? "family-name"
                  : name === "postalCode"
                    ? "postal-code"
                    : name === "phone"
                      ? "tel"
                      : "email"
            }
            inputMode={name === "postalCode" ? "numeric" : undefined}
            maxLength={name === "postalCode" ? 5 : name === "email" ? 254 : 80}
            required={name !== "phone"}
            aria-invalid={!!errors[name]}
            aria-describedby={errors[name] ? "error-" + name : undefined}
          />
          {errors[name] ? (
            <span className="field-error" id={"error-" + name}>
              {errors[name]}
            </span>
          ) : null}
        </div>
      ))}
      <div className="form-field form-field--full">
        <label htmlFor="request-message">Ihr Vorhaben *</label>
        <textarea
          id="request-message"
          name="message"
          required
          maxLength={4000}
          placeholder="Was möchten Sie verändern? Beschreiben Sie Ihre Idee und die Situation vor Ort."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : undefined}
        />
        {errors.message ? (
          <span className="field-error" id="error-message">
            {errors.message}
          </span>
        ) : null}
      </div>
      <div className="form-field form-field--full">
        <label htmlFor="request-attachments">
          Fotos / Unterlagen (optional)
        </label>
        <input
          id="request-attachments"
          name="files"
          type="file"
          multiple
          accept=".jpg,.jpeg,.png,.webp,.pdf"
          aria-invalid={!!errors.attachments}
          aria-describedby="file-help error-attachments"
        />
        <span id="file-help">
          Bis zu 3 Dateien, je maximal 5 MB. JPG, PNG, WebP oder PDF. Im Demo
          werden nur Dateiangaben geprüft, keine Dateien hochgeladen.
        </span>
        <span className="field-error" id="error-attachments">
          {errors.attachments}
        </span>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="request-website">Website</label>
        <input
          id="request-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="form-field form-field--full">
        <label className="checkbox-label" htmlFor="request-consent">
          <input
            id="request-consent"
            name="consent"
            type="checkbox"
            required
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "error-consent" : undefined}
          />
          <span>
            Ich habe den <Link href="/datenschutz">Datenschutzhinweis</Link>{" "}
            gelesen und stimme der Verarbeitung meiner Testangaben für diese
            Demo-Prüfung zu. *
          </span>
        </label>
        {errors.consent ? (
          <span className="field-error" id="error-consent">
            {errors.consent}
          </span>
        ) : null}
      </div>
      <button
        className="button button--primary"
        type="submit"
        disabled={pending}
      >
        {pending ? "Wird geprüft …" : "Demo-Anfrage prüfen"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        * Pflichtfelder · Keine echte Übermittlung an KLOTZ.
      </p>
    </form>
  );
}
