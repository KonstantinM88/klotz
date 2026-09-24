import { inquirySchema } from "@/features/inquiry/schema";
export const runtime = "nodejs";
const requestWindow = { started: 0, count: 0 };
function reply(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}
export async function POST(request: Request) {
  // This endpoint is deliberately validation-only. Production delivery is not implemented.
  if (process.env.DEMO_MODE === "false")
    return reply(
      { message: "Die Live-Übermittlung ist noch nicht eingerichtet." },
      503,
    );
  const origin = request.headers.get("origin");
  // Next may reconstruct request.url with a different loopback hostname.
  // Use the actual HTTP Host for browser same-origin validation. Do not trust
  // forwarded host/proto headers; a public reverse proxy needs separate setup.
  const requestUrl = new URL(request.url);
  const expectedOrigin = `${requestUrl.protocol}//${request.headers.get("host") ?? requestUrl.host}`;
  if (!origin || origin !== expectedOrigin)
    return reply({ message: "Diese Anfrage ist nicht zulässig." }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return reply({ message: "Ungültiges Anfrageformat." }, 415);
  const now = Date.now();
  if (now - requestWindow.started > 60000) {
    requestWindow.started = now;
    requestWindow.count = 0;
  }
  if (++requestWindow.count > 60)
    return reply(
      { message: "Bitte warten Sie eine Minute und versuchen Sie es erneut." },
      429,
    );
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply({ message: "Anfrage fehlt." }, 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16000) {
        await reader.cancel();
        return reply({ message: "Die Anfrage ist zu groß." }, 413);
      }
      chunks.push(value);
    }
    const parsed = inquirySchema.safeParse(
      JSON.parse(Buffer.concat(chunks).toString("utf8")),
    );
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        errors[key] ??= issue.message;
      }
      return reply({ message: "Bitte prüfen Sie Ihre Angaben.", errors }, 400);
    }
    if (
      now - parsed.data.startedAt < 1000 ||
      now - parsed.data.startedAt > 24 * 60 * 60 * 1000
    )
      return reply(
        {
          message: "Bitte prüfen Sie Ihre Angaben und versuchen Sie es erneut.",
        },
        400,
      );
    // No email, storage, analytics or logging of form data or filenames.
    return reply({
      message:
        "Demo: Ihre Angaben wurden geprüft. Die Anfrage wurde nicht versendet oder gespeichert.",
    });
  } catch {
    return reply({ message: "Die Anfrage konnte nicht gelesen werden." }, 400);
  }
}
