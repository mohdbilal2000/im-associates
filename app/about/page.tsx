import type { Metadata } from "next";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/shared/PageHeader";
import DisclaimerBanner from "../components/DisclaimerBanner";
import { advocates } from "../data/advocatesData";

export const metadata: Metadata = {
  title: "About IM & Associates — Advocates & Legal Consultants, Agra",
  description: "About IM & Associates — a legal knowledge platform and advocacy firm in Agra, Uttar Pradesh. Enrolled with Bar Council of UP. Serving Agra, Delhi, and Lucknow courts.",
  alternates: { canonical: "/about" },
};

const firmJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "IM & Associates",
  description: "Advocates and Legal Consultants in Agra, Uttar Pradesh",
  url: "https://imassociates.in/about",
  foundingDate: "2010",
  address: { "@type": "PostalAddress", addressLocality: "Agra", addressRegion: "Uttar Pradesh", postalCode: "282001", addressCountry: "IN" },
  employee: advocates.map((a) => ({
    "@type": "Person",
    name: a.name,
    jobTitle: a.designation,
    worksFor: { "@type": "LegalService", name: "IM & Associates" },
  })),
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(firmJsonLd) }} />
      <Topbar />
      <Navbar />
      <main>
        <PageHeader
          overline="About the Firm"
          title="IM & Associates"
          titleEm="Advocates & Legal Consultants"
          subtitle="A legal knowledge platform and advocacy firm providing educational resources and legal services across Agra, Delhi, and Lucknow."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        />
        <DisclaimerBanner />

        {/* Mission */}
        <section style={{ background: "var(--white)", padding: "80px 0" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="about-two-col">
              <div>
                <div className="section-label">Our Approach</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, color: "var(--ink)", marginBottom: 20, lineHeight: 1.2 }}>
                  Legal Knowledge as a Public Service
                </h2>
                <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: 17, color: "var(--slate-mid)", lineHeight: 1.8, marginBottom: 18 }}>
                  IM &amp; Associates was founded on the belief that access to accurate legal information is a precondition for access to justice. Our platform combines legal education — articles, case law analysis, and procedural guides — with advocacy services across multiple courts in Uttar Pradesh and Delhi.
                </p>
                <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: 17, color: "var(--slate-mid)", lineHeight: 1.8, marginBottom: 18 }}>
                  All content published on this platform is authored by enrolled advocates grounded in current Indian law. We follow strict compliance with the Advocates Act 1961 and Bar Council of India Professional Conduct Rules — including the prohibition on advertising and solicitation.
                </p>
                <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: 17, color: "var(--slate-mid)", lineHeight: 1.8 }}>
                  Our firm practices before the Agra District Court, Family Courts, Consumer Forums, Revenue Courts, the Allahabad High Court, and Delhi courts.
                </p>
              </div>
              <div>
                {[
                  { icon: "⚖️", title: "BCI Compliant", body: "All activities comply with Bar Council of India Rules on Professional Standards and Conduct. No misleading claims, no result guarantees, no solicitation." },
                  { icon: "📚", title: "Educational Focus", body: "Our legal knowledge platform publishes accurate, current information authored by enrolled advocates for public education and awareness." },
                  { icon: "🏛️", title: "Multiple Courts", body: "The firm practices across District Courts in Agra, Family Courts, Consumer Forums, Revenue Courts, the Allahabad High Court, and Delhi courts." },
                  { icon: "🇮🇳", title: "Current Law", body: "We keep content current — including the BNS, BNSS, and BSA 2023 (in force since 1 July 2024), ensuring readers access accurate legal information." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, background: "var(--parchment)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "var(--ink)", marginBottom: 6 }}>{item.title}</div>
                      <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: 15, color: "var(--slate-mid)", lineHeight: 1.6 }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advocates */}
        <section style={{ background: "var(--cream)", padding: "80px 0" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
            <div className="section-label">The Legal Team</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, color: "var(--ink)", marginBottom: 14, lineHeight: 1.2 }}>Our Advocates</h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, color: "var(--slate-mid)", maxWidth: 580, fontWeight: 300, lineHeight: 1.65, marginBottom: 48 }}>
              All advocates are enrolled with the Bar Council of Uttar Pradesh under the Advocates Act 1961. Enrolment numbers are verifiable with the Bar Council.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }} className="about-advocates-grid">
              {advocates.map((adv) => (
                <div key={adv.id} style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "24px 20px" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--slate)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, border: "2px solid var(--gold-pale)" }}>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: "var(--gold-light)" }}>{adv.initials}</span>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: "var(--ink)", marginBottom: 3 }}>{adv.name}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: "var(--gold)", letterSpacing: "0.05em", marginBottom: 10 }}>{adv.designation}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: "var(--slate-light)" }}>{adv.barCouncil}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance note */}
        <section style={{ background: "var(--slate)", padding: "48px 0" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="about-two-col">
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>Bar Council Compliance</div>
                <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                  IM &amp; Associates is regulated by the Bar Council of India under the Advocates Act 1961. This firm does not advertise or solicit work in contravention of BCI Rule 36 on Professional Conduct. All advocates listed are enrolled and in good standing with the Bar Council of Uttar Pradesh.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>Legal Disclaimer</div>
                <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                  This website and all content published on it is for general informational and educational purposes only. Nothing on this website constitutes legal advice. Viewing this website or contacting the firm through this website does not create an advocate-client relationship.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 860px) {
          .about-two-col { grid-template-columns: 1fr !important; }
          .about-advocates-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .about-advocates-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
