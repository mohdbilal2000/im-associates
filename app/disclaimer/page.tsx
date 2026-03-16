import type { Metadata } from "next";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Legal Disclaimer — IM & Associates",
  description: "Legal disclaimer for IM & Associates website. This website is for informational purposes only and does not constitute legal advice.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <PageHeader
          overline="Legal Notice"
          title="Legal Disclaimer"
          subtitle="Important information about the nature of content on this website and the limitations of the information provided."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
        />
        <section style={{ background: "var(--cream)", padding: "72px 0 96px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px" }}>
            {[
              {
                heading: "No Legal Advice",
                body: "The information published on this website — including all articles, practice area descriptions, case law summaries, glossary entries, FAQs, and other content — is for general informational and educational purposes only. Nothing on this website constitutes legal advice.\n\nLegal advice is advice specific to your individual facts and circumstances, provided by a qualified advocate after a proper consultation and engagement. General legal information, however accurate, is not a substitute for legal advice tailored to your specific situation.",
              },
              {
                heading: "No Advocate-Client Relationship",
                body: "Viewing this website, reading any content on this website, or submitting the consultation request form does not create an advocate-client relationship between you and IM & Associates or any of its advocates.\n\nAn advocate-client relationship is established only when IM & Associates explicitly agrees in writing to represent you and a formal engagement agreement is executed.",
              },
              {
                heading: "Accuracy of Information",
                body: "We make reasonable efforts to ensure that all legal information on this website is accurate and current. However, Indian law changes frequently — through legislation, judicial decisions, and regulatory notifications. IM & Associates does not warrant or represent that any content on this website is accurate, complete, or current at the time you read it.\n\nIn particular, following the enactment of the Bharatiya Nyaya Sanhita (BNS) 2023, Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, and Bharatiya Sakshya Adhiniyam (BSA) 2023 — all effective from 1 July 2024 — references to the IPC, CrPC, and Indian Evidence Act must be understood in their historical context.",
              },
              {
                heading: "Bar Council of India Compliance",
                body: "IM & Associates is a law firm regulated by the Bar Council of India under the Advocates Act 1961. Rule 36 of the BCI Rules on Professional Standards prohibits advocates from advertising or soliciting work.\n\nThis website is not an advertisement. It is a legal knowledge and educational resource. No content on this website is intended as solicitation of legal work in violation of BCI Rules. No comparative claims, outcome guarantees, or superlatives about the firm or its advocates appear on this website.",
              },
              {
                heading: "No Liability",
                body: "IM & Associates and its advocates shall not be liable for any loss, damage, or legal consequences arising from reliance on any information on this website. Users who act on any information found on this website do so at their own risk.\n\nWe strongly recommend consulting a qualified advocate before taking any legal action or decision.",
              },
              {
                heading: "External Links",
                body: "This website may contain links to external websites including government portals, court websites, and legal databases. IM & Associates is not responsible for the accuracy, currency, or content of external websites. Links are provided for informational convenience only.",
              },
              {
                heading: "Jurisdiction",
                body: "This website is governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of courts in Agra, Uttar Pradesh, India.",
              },
            ].map((s) => (
              <div key={s.heading} style={{ marginBottom: 40 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: "var(--ink)", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>{s.heading}</h2>
                {s.body.split("\n\n").map((para, i) => (
                  <p key={i} style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, color: "var(--ink)", lineHeight: 1.8, marginBottom: 14 }}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
