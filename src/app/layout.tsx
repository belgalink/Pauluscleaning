import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import JsonLd from "@/components/JsonLd";
import { localBusiness } from "@/lib/jsonld";
import { site } from "@/lib/site";

/**
 * Fonts worden zelf gehost in /public/fonts in plaats van via next/font/google.
 * Zo heeft de build geen netwerkverbinding met Google Fonts nodig en valt er
 * bij het laden van de pagina niets terug te halen bij derden.
 * Het zijn variabele fonts met de latin-subset, ruim voldoende voor Nederlands.
 */
const inter = localFont({
  src: [{ path: "../../public/fonts/inter-latin.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: "Arial",
});

const archivo = localFont({
  src: [{ path: "../../public/fonts/archivo-latin.woff2", weight: "500 700", style: "normal" }],
  variable: "--font-archivo",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Paulus Cleaning | Gevel-, dak- en opritreiniging in Brecht",
    template: "%s | Paulus Cleaning",
  },
  description:
    "Gevelreiniging, dakreiniging, oprit- en terrasreiniging, zonnepanelen en ramen wassen in Brecht en de Noorderkempen. Stuur foto's door en krijg een vaste prijs.",
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: site.name,
    url: site.url,
    title: "Paulus Cleaning | Gevel-, dak- en opritreiniging in Brecht",
    description:
      "Gevel, dak, oprit, terras, zonnepanelen en ramen vakkundig gereinigd in Brecht en de Noorderkempen.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Paulus Cleaning uit Brecht" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulus Cleaning | Gevel-, dak- en opritreiniging in Brecht",
    description:
      "Gevel, dak, oprit, terras, zonnepanelen en ramen vakkundig gereinigd in Brecht en de Noorderkempen.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#01134d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE" className={`${inter.variable} ${archivo.variable}`}>
      <body className="pb-[4.5rem] md:pb-0">
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Naar de inhoud
        </a>
        <Header />
        <main id="inhoud">{children}</main>
        <Footer />
        <StickyCta />
        <JsonLd data={localBusiness} />
      </body>
    </html>
  );
}
