import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "IM & Associates | Legal Knowledge Platform | Agra, Delhi, Lucknow",
    template: "%s | IM & Associates",
  },
  description: "IM & Associates is a legal knowledge platform and advocacy firm in Agra providing educational resources on Indian law — Criminal, Civil, Property, Corporate, Family, Constitutional Law and more.",
  keywords: ["law firm Agra", "advocate Agra", "criminal lawyer Agra", "property law India", "legal services Uttar Pradesh", "BNS 2023", "BNSS 2023", "family law Agra"],
  metadataBase: new URL("https://imassociates.in"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "IM & Associates | Legal Knowledge Platform",
    description: "Comprehensive legal resources, case law analysis, and educational content covering all major areas of Indian law.",
    type: "website",
    locale: "en_IN",
    siteName: "IM & Associates",
  },
  twitter: { card: "summary_large_image", title: "IM & Associates | Legal Knowledge Platform" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "IM & Associates",
  description: "A legal knowledge platform and advocacy firm providing educational resources on Indian law",
  url: "https://imassociates.in",
  logo: "https://imassociates.in/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Agra",
    addressLocality: "Agra",
    addressRegion: "Uttar Pradesh",
    postalCode: "282001",
    addressCountry: "IN"
  },
  telephone: "+91XXXXXXXXXX",
  email: "contact@imassociates.in",
  areaServed: ["Agra", "Delhi", "Lucknow"],
  knowsAbout: ["Criminal Law", "Civil Litigation", "Property Law", "Corporate Law", "Family Law", "Constitutional Law"],
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Agra, Uttar Pradesh" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
