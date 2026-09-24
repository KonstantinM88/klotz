import type { Metadata } from "next";
import { getSiteUrl } from "./site-url";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/images/lamelle-detail-1.webp",
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: new URL(path, getSiteUrl()),
      type: "website",
      locale: "de_DE",
      siteName: "KLOTZ",
      images: [{ url: new URL(image, getSiteUrl()).href }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL(image, getSiteUrl()).href],
    },
  };
}
