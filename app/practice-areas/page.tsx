import type { Metadata } from "next";
import Link from "next/link";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/shared/PageHeader";
import { practiceAreas } from "../data/practiceAreasData";

export const metadata: Metadata = {
  title: "Practice Areas — IM & Associates Legal Services",
  description: "Legal practice areas covered by IM & Associates: Criminal Law, Civil Litigation, Property Law, Family Law, Corporate Law, Constitutional Law, Consumer Protection, Startup Law and more.",
  alternates: { canonical: "/practice-areas" },
};

export default function PracticeAreasPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <PageHeader
          overline="Legal Services"
          title="Practice Areas"
          titleEm="Covered by IM & Associates"
          subtitle="Educational resources and legal services across 8 major areas of Indian law, with reference to current statutes and court procedures."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Practice Areas" }]}
        />

        <section style={{ background: "var(--cream)", padding: "72px 0 96px" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="pa-grid">
              {practiceAreas.map((area) => (
                <Link key={area.slug} href={`/practice-areas/${area.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <article style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "36px 30px", height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", transition: "border-color 0.2s, box-shadow 0.2s" }} className="pa-card">
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "var(--gold)", transform: "scaleX(0)", transition: "transform 0.3s", transformOrigin: "left" }} className="pa-bar" />
                    <div style={{ fontSize: 28, marginBottom: 16 }}>{area.icon}</div>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, marginBottom: 10, color: "var(--ink)", lineHeight: 1.3 }}>{area.title}</h2>
                    <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, color: "var(--slate-mid)", lineHeight: 1.65, marginBottom: 20, flex: 1 }}>{area.overview.slice(0, 180)}...</p>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>
                      {area.heroLaw}
                    </div>
                    <div style={{ marginTop: 16, fontFamily: "'Cormorant Garamond',serif", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", display: "flex", alignItems: "center", gap: 6 }}>
                      Learn More →
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 56, background: "var(--parchment)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", padding: "20px 24px", fontFamily: "'Crimson Pro',serif", fontSize: 14, color: "var(--slate-mid)", lineHeight: 1.7, fontStyle: "italic" }}>
              <strong style={{ fontStyle: "normal", color: "var(--ink)" }}>Disclaimer:</strong> The information on these practice area pages is for general educational purposes only. It does not constitute legal advice and does not create an advocate-client relationship. Please consult a qualified advocate for advice specific to your matter.
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .pa-card:hover { border-color: var(--gold) !important; box-shadow: 0 6px 28px rgba(14,14,14,0.08); }
        .pa-card:hover .pa-bar { transform: scaleX(1) !important; }
        @media (max-width: 900px) { .pa-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .pa-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
