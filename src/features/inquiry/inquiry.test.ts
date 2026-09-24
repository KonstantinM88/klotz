// @vitest-environment node
import { describe, it, expect } from "vitest";
import { inquirySchema } from "./schema";
import { POST } from "@/app/api/inquiries/route";
const valid = {
  firstName: "Demo",
  lastName: "Test",
  email: "demo@example.com",
  phone: "",
  postalCode: "06217",
  topic: "Terrasse & Garten",
  timeframe: "Noch offen",
  message: "Eine Testanfrage für die Terrasse.",
  consent: true,
  website: "",
  startedAt: Date.now() - 5000,
  attachments: [],
};
describe("demo inquiry", () => {
  it("rejects invalid email, postal code and missing consent", () => {
    expect(
      inquirySchema.safeParse({
        ...valid,
        email: "not-email",
        postalCode: "xyz",
        consent: false,
      }).success,
    ).toBe(false);
  });
  it("rejects executable, oversized and mismatched attachments", () => {
    for (const f of [
      { name: "photo.exe", type: "image/jpeg", size: 100 },
      { name: "photo.jpg", type: "image/jpeg", size: 6 * 1024 * 1024 },
      { name: "photo.pdf", type: "image/png", size: 100 },
    ])
      expect(
        inquirySchema.safeParse({ ...valid, attachments: [f] }).success,
      ).toBe(false);
  });
  it("accepts safe file metadata", () =>
    expect(
      inquirySchema.safeParse({
        ...valid,
        attachments: [{ name: "terrasse.jpg", type: "image/jpeg", size: 100 }],
      }).success,
    ).toBe(true));
  it("rejects a filled honeypot", () =>
    expect(inquirySchema.safeParse({ ...valid, website: "spam" }).success).toBe(
      false,
    ));
  it("rejects foreign origins", async () => {
    const response = await POST(
      new Request("http://localhost:3000/api/inquiries", {
        method: "POST",
        headers: {
          origin: "https://untrusted.example",
          "content-type": "application/json",
        },
        body: JSON.stringify(valid),
      }),
    );
    expect(response.status).toBe(403);
  });
  it("only validates without returning personal data", async () => {
    const response = await POST(
      new Request("http://localhost:3000/api/inquiries", {
        method: "POST",
        headers: {
          origin: "http://localhost:3000",
          "content-type": "application/json",
        },
        body: JSON.stringify(valid),
      }),
    );
    expect(response.status).toBe(200);
    const body = await response.text();
    expect(body).toContain("nicht versendet");
    expect(body).not.toContain(valid.email);
  });
  it("rejects oversized request bodies", async () => {
    const response = await POST(
      new Request("http://localhost:3000/api/inquiries", {
        method: "POST",
        headers: {
          origin: "http://localhost:3000",
          "content-type": "application/json",
        },
        body: "x".repeat(16001),
      }),
    );
    expect(response.status).toBe(413);
  });
  it("validates the browser origin against Host when Next normalizes the URL", async () => {
    for (const [origin, expected] of [
      ["http://127.0.0.1:3100", 200],
      ["https://untrusted.example", 403],
    ] as const) {
      const response = await POST(
        new Request("http://localhost:3100/api/inquiries", {
          method: "POST",
          headers: {
            host: "127.0.0.1:3100",
            origin,
            "content-type": "application/json",
          },
          body: JSON.stringify(valid),
        }),
      );
      expect(response.status).toBe(expected);
    }
  });
});
