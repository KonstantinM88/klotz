"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  assistantError,
  detectQuestionLanguage,
} from "@/features/assistant/language";

type Message = {
  role: "visitor" | "guide";
  text: string;
  href?: string;
  linkLabel?: string;
  successful?: boolean;
};
const starter: Message = {
  role: "guide",
  text: "Guten Tag! Ich helfe Ihnen, die passende Richtung für Ihr Vorhaben zu finden. Worum geht es bei Ihnen?",
};
const suggestions = [
  "Terrasse planen",
  "Fenster & Türen",
  "Zaun & Tor",
  "Ablauf & Angebot",
];

export function ProjectGuide() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);
  const conversation = useRef<HTMLDivElement>(null);
  const latestMessage = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([starter]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState<"unknown" | "guided" | "live">("unknown");

  useEffect(() => {
    dialog.current?.close();
  }, [pathname]);
  useLayoutEffect(() => {
    const scroller = conversation.current;
    const latest = latestMessage.current;
    if (!dialog.current?.open || !scroller || !latest) return;
    // Keep the beginning of a new answer visible, even when it is taller
    // than the conversation viewport. Do not scroll the page or dialog.
    const offset =
      latest.getBoundingClientRect().top -
      scroller.getBoundingClientRect().top +
      scroller.scrollTop -
      12;
    scroller.scrollTop = Math.max(0, offset);
  }, [messages]);

  function close() {
    dialog.current?.close();
  }
  async function open() {
    dialog.current?.showModal();
    input.current?.focus({ preventScroll: true });
    try {
      const response = await fetch("/api/assistant", { cache: "no-store" });
      const data: { mode?: "guided" | "live" } = await response.json();
      if (data.mode) setMode(data.mode);
    } catch {
      setMode("guided");
    }
  }
  async function send(question = draft) {
    const text = question.trim();
    if (busy || text.length < 2 || text.length > 600) return;
    const language = detectQuestionLanguage(text);
    if (/[\w.+-]+@[\w.-]+\.[a-z]{2,}|(?:\+?\d[\s()./-]*){7,}/i.test(text)) {
      setMessages((current) => [
        ...current,
        {
          role: "guide",
          text: assistantError("personalData", language),
        },
      ]);
      return;
    }
    const next = [...messages, { role: "visitor" as const, text }];
    setMessages(next);
    setDraft("");
    setBusy(true);
    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next
            .filter((item) => item.role === "visitor" || item.successful)
            .slice(-7)
            .map((item) => ({
              role: item.role,
              text: item.text.slice(0, 600),
            })),
        }),
      });
      const data: {
        answer?: string;
        error?: string;
        mode?: "guided" | "live";
        href?: string;
        linkLabel?: string;
      } = await response.json();
      if (data.mode) setMode(data.mode);
      setMessages((current) => [
        ...current,
        {
          role: "guide",
          text:
            response.ok && data.answer
              ? data.answer
              : (data.error ?? assistantError("retry", language)),
          href: response.ok ? data.href : undefined,
          linkLabel: response.ok ? data.linkLabel : undefined,
          successful: Boolean(response.ok && data.answer),
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "guide",
          text: assistantError("connection", language),
        },
      ]);
    } finally {
      setBusy(false);
      input.current?.focus({ preventScroll: true });
    }
  }

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="project-guide-trigger"
        aria-haspopup="dialog"
        aria-controls="project-guide-dialog"
        onClick={open}
      >
        <span className="project-guide-trigger__mark" aria-hidden="true">
          ✳
        </span>
        <span>Projektlotse</span>
        <span className="project-guide-trigger__arrow" aria-hidden="true">
          ↗
        </span>
      </button>
      <dialog
        ref={dialog}
        id="project-guide-dialog"
        className="project-guide"
        aria-labelledby="project-guide-title"
        onClose={() => trigger.current?.focus()}
      >
        <div className="project-guide__header">
          <div>
            <p className="project-guide__eyebrow">KLOTZ / Orientierung</p>
            <h2 id="project-guide-title">
              Ihr Projekt beginnt mit einer Frage.
            </h2>
          </div>
          <button
            type="button"
            className="project-guide__close"
            onClick={close}
            aria-label="Projektlotsen schließen"
          >
            ×
          </button>
        </div>
        <div className="project-guide__status">
          <span className="project-guide__status-label">
            <span className="project-guide__status-dot" aria-hidden="true" />
            {mode === "live"
              ? "KI-Beratung · Präsentationsdemo"
              : mode === "guided"
                ? "Geführte Demoantworten · keine Live-KI"
                : "Präsentationsdemo"}
          </span>
          {messages.length > 1 && (
            <button
              type="button"
              disabled={busy}
              onClick={() => {
                setMessages([starter]);
                setDraft("");
                input.current?.focus({ preventScroll: true });
              }}
            >
              Neu starten
            </button>
          )}
        </div>
        <div
          ref={conversation}
          className="project-guide__conversation"
          role="log"
          aria-label="Gespräch mit dem Projektlotsen"
          aria-live="polite"
          aria-relevant="additions text"
        >
          {messages.map((message, index) => (
            <div
              ref={index === messages.length - 1 ? latestMessage : undefined}
              className={`project-guide__message project-guide__message--${message.role}`}
              key={index}
            >
              <span className="project-guide__speaker">
                {message.role === "guide" ? "KLOTZ Projektlotse" : "Sie"}
              </span>
              <p>{message.text}</p>
              {message.href && message.linkLabel && (
                <Link
                  href={message.href}
                  onClick={close}
                  className="project-guide__link"
                >
                  {message.linkLabel} <span aria-hidden="true">↗</span>
                </Link>
              )}
            </div>
          ))}
          {busy && <p className="project-guide__thinking">Einen Moment …</p>}
        </div>
        {messages.length === 1 && (
          <div
            className="project-guide__suggestions"
            aria-label="Themenvorschläge"
          >
            {suggestions.map((item) => (
              <button
                type="button"
                key={item}
                disabled={busy}
                onClick={() => send(item)}
              >
                {item} <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        )}
        <form
          className="project-guide__form"
          onSubmit={(event) => {
            event.preventDefault();
            void send();
          }}
        >
          <label htmlFor="project-guide-input">Ihre Frage</label>
          <div className="project-guide__input-row">
            <textarea
              ref={input}
              id="project-guide-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void send();
                }
              }}
              maxLength={600}
              rows={2}
              placeholder="Zum Beispiel: Glasdach oder Lamellendach?"
            />
            <button
              type="submit"
              disabled={busy || draft.trim().length < 2}
              aria-label="Frage senden"
            >
              ↗
            </button>
          </div>
          <p>
            Bitte keine persönlichen Daten eingeben. Bei aktiver KI werden
            Fragen an OpenAI übertragen. Keine Anfrage wird hier versendet.
          </p>
        </form>
      </dialog>
    </>
  );
}
