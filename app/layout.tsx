import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "IM & Associates | Legal Knowledge Platform | Agra, Delhi, Lucknow",
    template: "%s | IM & Associates",
  },
  description: "IM & Associates is a legal knowledge platform and advocacy firm providing educational resources on Indian law — Criminal, Civil, Property, Corporate, Family, Constitutional Law and more.",
  keywords: ["law firm Agra", "advocate Agra", "criminal lawyer India", "property law India", "legal services Uttar Pradesh"],
  metadataBase: new URL("https://imassociates.in"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "IM & Associates | Legal Knowledge Platform",
    description: "Comprehensive legal resources, case law analysis, and educational content covering all major areas of Indian law.",
    type: "website",
    locale: "en_IN",
    siteName: "IM & Associates",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "IM & Associates",
  description: "A legal knowledge platform and law firm providing educational resources on Indian law",
  url: "https://imassociates.in",
  address: { "@type": "PostalAddress", addressLocality: "Agra", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  areaServed: ["Agra", "Delhi", "Lucknow"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
