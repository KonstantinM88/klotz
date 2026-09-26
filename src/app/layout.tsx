import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { localContentRepository } from "@/repositories/local-content-repository";
import { getSiteUrl, isIndexingAllowed } from "@/lib/site-url";
import "./globals.css";
import "@/styles/editorial.css";
import { RevealMotion } from "@/components/layout/reveal-motion";
import { ProjectGuide } from "@/components/assistant/project-guide";
import "@/styles/project-guide.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "KLOTZ | Bauelemente & Outdoor Living aus Merseburg",
    template: "%s | KLOTZ",
  },
  description:
    "Terrassenüberdachungen, Lamellendächer, Fenster, Türen, Zäune und Tore – Beratung, Planung und Montage aus Merseburg.",
  applicationName: "KLOTZ",
  icons: { icon: { url: "/images/logo.webp", type: "image/webp" } },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "KLOTZ",
    title: "KLOTZ | Bauelemente & Outdoor Living",
    description:
      "Hochwertige Lösungen für Haus, Terrasse und Grundstück – regional geplant und fachgerecht montiert.",
    images: [
      {
        url: "/images/lamelle-detail-1.webp",
        width: 768,
        height: 1024,
        alt: "Lamellendach von KLOTZ",
      },
    ],
  },
  robots: isIndexingAllowed()
    ? { index: true, follow: true }
    : { index: false, follow: true, noarchive: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12367a",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [site, primaryItems, secondaryItems] = await Promise.all([
    localContentRepository.getSiteSettings(),
    localContentRepository.getPrimaryNavigation(),
    localContentRepository.getSecondaryNavigation(),
  ]);

  return (
    <html lang="de" className={manrope.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Zum Inhalt springen
        </a>
        <Header items={primaryItems} site={site} />
        {children}
        <RevealMotion />
        <Footer
          primaryItems={primaryItems}
          secondaryItems={secondaryItems}
          site={site}
        />
        <MobileActionBar site={site} />
        <ProjectGuide />
      </body>
    </html>
  );
}
