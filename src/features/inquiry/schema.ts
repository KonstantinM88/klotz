import { z } from "zod";
import { inquiryTopics } from "./options";
// Keep schema validation compatible with CSP without enabling unsafe-eval.
z.config({ jitless: true });
export const attachmentSchema = z
  .object({
    name: z
      .string()
      .max(120)
      .regex(
        /^[^/\\\\\u0000-\u001f]+\.(jpe?g|png|webp|pdf)$/i,
        "Erlaubt sind JPG, PNG, WebP und PDF.",
      ),
    type: z.enum(["image/jpeg", "image/png", "image/webp", "application/pdf"]),
    size: z
      .number()
      .int()
      .min(1)
      .max(5 * 1024 * 1024, "Maximal 5 MB pro Datei."),
  })
  .refine(
    (file) =>
      ({
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        webp: "image/webp",
        pdf: "application/pdf",
      })[file.name.split(".").at(-1)!.toLowerCase()] === file.type,
    "Dateityp und Dateiendung müssen übereinstimmen.",
  );
export const inquirySchema = z.object({
  firstName: z.string().trim().min(2, "Bitte Ihren Vornamen eingeben.").max(80),
  lastName: z.string().trim().min(2, "Bitte Ihren Nachnamen eingeben.").max(80),
  email: z.email("Bitte eine gültige E-Mail-Adresse eingeben.").max(254),
  phone: z
    .string()
    .max(40)
    .regex(/^[+\d ()/.-]*$/, "Bitte eine gültige Telefonnummer eingeben."),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, "Bitte eine fünfstellige Postleitzahl eingeben."),
  topic: z.enum(inquiryTopics, {
    error: "Bitte einen Leistungsbereich wählen.",
  }),
  timeframe: z.enum([
    "Noch offen",
    "In den nächsten 3 Monaten",
    "In 3–6 Monaten",
    "Später",
  ]),
  message: z
    .string()
    .trim()
    .min(10, "Bitte beschreiben Sie Ihr Vorhaben mit mindestens 10 Zeichen.")
    .max(4000, "Bitte höchstens 4.000 Zeichen eingeben."),
  consent: z.literal(true, {
    error: "Bitte bestätigen Sie den Datenschutzhinweis.",
  }),
  website: z.string().max(0),
  startedAt: z.number().int().positive(),
  attachments: z
    .array(attachmentSchema)
    .max(3, "Bitte höchstens drei Dateien auswählen."),
});
export type InquiryInput = z.infer<typeof inquirySchema>;
