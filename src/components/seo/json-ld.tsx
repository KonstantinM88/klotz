import { serializeJsonLd } from "@/lib/structured-data";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
      type="application/ld+json"
    />
  );
}
