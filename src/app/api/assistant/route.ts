import {
  buildAssistantInstructions,
  guidedAnswer,
  localizeGuidedTopic,
} from "@/features/assistant/knowledge";
import {
  assistantError,
  detectQuestionLanguage,
} from "@/features/assistant/language";

export const runtime = "nodejs";
const limits = new Map<string, { started: number; count: number }>();

function reply(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export function GET() {
  return reply({ mode: process.env.OPENAI_API_KEY ? "live" : "guided" });
}

const personalData = /[\w.+-]+@[\w.-]+\.[a-z]{2,}|(?:\+?\d[\s()./-]*){7,}/i;
type ConversationMessage = { role: "visitor" | "guide"; text: string };

function isConversationMessage(value: unknown): value is ConversationMessage {
  if (!value || typeof value !== "object") return false;
  const message = value as { role?: unknown; text?: unknown };
  return (
    (message.role === "visitor" || message.role === "guide") &&
    typeof message.text === "string" &&
    message.text.trim().length >= 2 &&
    message.text.length <= 600
  );
}

export async function POST(request: Request) {
  if (process.env.DEMO_MODE === "false")
    return reply(
      {
        error: "Der Projektlotse ist im Live-Betrieb noch nicht eingerichtet.",
      },
      503,
    );
  const url = new URL(request.url);
  const origin = request.headers.get("origin");
  const expectedOrigin = `${url.protocol}//${request.headers.get("host") ?? url.host}`;
  if (!origin || origin !== expectedOrigin)
    return reply({ error: "Diese Anfrage ist nicht zulässig." }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return reply({ error: "Ungültiges Anfrageformat." }, 415);
  if (Number(request.headers.get("content-length")) > 5000)
    return reply({ error: "Die Nachricht ist zu lang." }, 413);

  // This local demo limiter is intentionally process-local, not public rate limiting.
  const now = Date.now();
  const address = request.headers.get("x-real-ip") ?? "local-demo";
  const current = limits.get(address);
  const window =
    current && now - current.started < 60_000
      ? current
      : { started: now, count: 0 };
  window.count++;
  limits.set(address, window);
  if (window.count > 12)
    return reply(
      { error: "Bitte warten Sie kurz und versuchen Sie es erneut." },
      429,
    );

  let responseLanguage = detectQuestionLanguage("");
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, "utf8") > 5000)
      return reply({ error: "Die Nachricht ist zu lang." }, 413);
    const body: unknown = JSON.parse(raw);
    if (!body || typeof body !== "object" || !("messages" in body))
      return reply({ error: "Ungültige Nachricht." }, 400);
    const messages = (body as { messages: unknown }).messages;
    if (
      !Array.isArray(messages) ||
      messages.length < 1 ||
      messages.length > 7 ||
      !messages.every(isConversationMessage) ||
      messages.at(-1)?.role !== "visitor"
    )
      return reply({ error: "Bitte stellen Sie eine kurze Frage." }, 400);
    const conversation = messages as ConversationMessage[];
    const language = detectQuestionLanguage(conversation.at(-1)!.text);
    responseLanguage = language;
    if (conversation.some((message) => personalData.test(message.text)))
      return reply(
        {
          error: assistantError("personalData", language),
        },
        400,
      );

    const topic = guidedAnswer(conversation.at(-1)!.text);
    if (!process.env.OPENAI_API_KEY) {
      const earlierTopic = conversation
        .slice(0, -1)
        .reverse()
        .filter((message) => message.role === "visitor")
        .map((message) => guidedAnswer(message.text))
        .find((item) => item.label !== "Orientierung");
      const contextualFallback =
        topic.label === "Orientierung" && earlierTopic
          ? {
              ...localizeGuidedTopic(earlierTopic, language),
              answer:
                language === "ru"
                  ? "По этому уточнению у меня нет достоверных сведений в сценарной демоверсии. На странице по предыдущей теме можно посмотреть доступную информацию; для конкретного проекта нужна консультация специалиста."
                  : language === "en"
                    ? "I do not have reliable details about that follow-up in this guided demo. The linked page has information about the previous topic; your specific project needs a discussion with a specialist."
                    : `Zu dieser Rückfrage habe ich in der geführten Demo keine verlässliche Detailauskunft. Wir hatten über ${earlierTopic.label} gesprochen; auf der verlinkten Seite finden Sie den aktuellen Demo-Stand. Für Ihr konkretes Vorhaben ist ein Fachgespräch nötig.`,
            }
          : topic;
      return reply({
        answer: contextualFallback.answer,
        mode: "guided",
        href: contextualFallback.href,
        linkLabel: contextualFallback.linkLabel,
      });
    }

    const upstream = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL?.trim() || "gpt-5.4-mini",
        reasoning: { effort: "none" },
        instructions: await buildAssistantInstructions(),
        // Browser-supplied history is context only, never a trusted assistant
        // or developer message. The server instructions retain priority.
        input: JSON.stringify({
          previous_turns: conversation.slice(0, -1),
          current_question: conversation.at(-1)!.text,
        }),
        max_output_tokens: 320,
        store: false,
      }),
      signal: AbortSignal.timeout(15_000),
    });
    if (!upstream.ok)
      return reply(
        {
          error: assistantError("upstream", language),
        },
        503,
      );
    const result: unknown = await upstream.json();
    if (!result || typeof result !== "object" || !("output" in result))
      return reply({ error: assistantError("upstream", language) }, 503);
    const output = (result as { output: unknown }).output;
    const answer = Array.isArray(output)
      ? output
          .flatMap((item) =>
            item?.type === "message" && Array.isArray(item.content)
              ? item.content
                  .filter(
                    (part: { type?: string; text?: string }) =>
                      part.type === "output_text",
                  )
                  .map((part: { text?: string }) => part.text ?? "")
              : [],
          )
          .join("\n")
          .trim()
      : "";
    if (!answer)
      return reply({ error: assistantError("upstream", language) }, 503);
    return reply({
      answer: answer.slice(0, 1600),
      mode: "live",
      href: topic.href,
      linkLabel: topic.linkLabel,
    });
  } catch {
    return reply(
      { error: assistantError("connection", responseLanguage) },
      503,
    );
  }
}
