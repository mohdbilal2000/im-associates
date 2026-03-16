import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPracticeArea, getAllPracticeAreaSlugs, practiceAreas } from "../../data/practiceAreasData";
import { blogPosts } from "../../data/blogData";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/shared/PageHeader";

export async function generateStaticParams() {
  return getAllPracticeAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return { title: "Not Found" };
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/practice-areas/${area.slug}` },
  };
}

const categoryColors: Record<string, string> = {
  "Criminal Law": "#dc2626", "Family Law": "#7c3aed", "Property Law": "#059669",
  "Startup & Business Law": "#0369a1", "Consumer Law": "#b45309", "Constitutional Law": "#1d4ed8",
  "Corporate Law": "#0369a1",
};

export default async function PracticeAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const relatedPosts = area.relatedBlogs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean);

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.title} — IM & Associates`,
    description: area.metaDescription,
    url: `https://imassociates.in/practice-areas/${area.slug}`,
    areaServed: ["Agra", "Delhi", "Lucknow"],
    knowsAbout: area.legislation,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
      <Topbar />
      <Navbar />
      <main>
        <PageHeader
          overline={area.heroLaw}
          title={area.title}
          titleEm="Practice Area"
          subtitle={area.overview.slice(0, 200) + "..."}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Practice Areas", href: "/practice-areas" }, { label: area.title }]}
        />

        <section style={{ background: "var(--cream)", padding: "72px 0 96px" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 52, alignItems: "start" }} className="pa-detail-grid">
              {/* Main */}
              <div>
                {/* Overview */}
                <div style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "36px 32px", marginBottom: 28 }}>
                  <div className="section-label">Overview</div>
                  <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 17, color: "var(--ink)", lineHeight: 1.8 }}>{area.overview}</p>
                </div>

                {/* Key areas */}
                <div style={{ marginBottom: 28 }}>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(22px,2.8vw,30px)", fontWeight: 700, color: "var(--ink)", marginBottom: 24 }}>Key Areas</h2>
                  {area.keyAreas.map((ka) => (
                    <div key={ka.heading} style={{ background: "var(--white)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", padding: "24px 28px", marginBottom: 14 }}>
                      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: "var(--ink)", marginBottom: 10 }}>{ka.heading}</h3>
                      <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, color: "var(--slate-mid)", lineHeight: 1.7 }}>{ka.body}</p>
                    </div>
                  ))}
                </div>

                {/* Common scenarios */}
                <div style={{ marginBottom: 28 }}>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(22px,2.8vw,30px)", fontWeight: 700, color: "var(--ink)", marginBottom: 24 }}>Common Legal Scenarios</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="scenarios-grid">
                    {area.commonScenarios.map((s) => (
                      <div key={s.scenario} style={{ background: "var(--parchment)", border: "1px solid var(--border)", padding: "22px 20px" }}>
                        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>{s.scenario}</div>
                        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, color: "var(--slate-mid)", lineHeight: 1.65 }}>{s.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(22px,2.8vw,30px)", fontWeight: 700, color: "var(--ink)", marginBottom: 24 }}>FAQs</h2>
                  {area.faqs.map((faq) => (
                    <div key={faq.q} style={{ borderBottom: "1px solid var(--border)", paddingBottom: 0 }}>
                      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: "var(--ink)", padding: "18px 0 10px" }}>{faq.q}</h3>
                      <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, color: "var(--slate-mid)", lineHeight: 1.75, paddingBottom: 18 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 44, padding: "18px 22px", background: "var(--parchment)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", fontFamily: "'Crimson Pro',serif", fontSize: 14, color: "var(--slate-mid)", lineHeight: 1.7, fontStyle: "italic" }}>
                  <strong style={{ fontStyle: "normal", color: "var(--ink)" }}>Disclaimer:</strong> This page is for general informational purposes only and does not constitute legal advice. For advice on your specific matter, please consult a qualified advocate.
                </div>
              </div>

              {/* Sidebar */}
              <aside style={{ position: "sticky", top: 88 }} className="pa-sidebar">
                {/* Legislation */}
                <div style={{ background: "var(--slate)", padding: "26px 22px", marginBottom: 18 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>Applicable Legislation</div>
                  {area.legislation.map((l) => (
                    <div key={l} style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, color: "rgba(255,255,255,0.65)", paddingLeft: 12, borderLeft: "2px solid rgba(184,150,46,0.4)", marginBottom: 10, lineHeight: 1.5 }}>{l}</div>
                  ))}
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(184,150,46,0.2)" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>Courts</div>
                    {area.courts.map((c) => (
                      <div key={c} style={{ fontFamily: "'Crimson Pro',serif", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>⚖ {c}</div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ background: "var(--parchment)", border: "1px solid var(--border)", padding: "24px 22px", marginBottom: 18 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>Need Legal Guidance?</div>
                  <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, color: "var(--slate-mid)", marginBottom: 18, lineHeight: 1.6 }}>Consult an advocate at IM &amp; Associates for advice specific to your matter.</p>
                  <Link href="/#contact" style={{ display: "block", padding: "12px 20px", background: "var(--gold)", color: "#fff", fontFamily: "'Cormorant Garamond',serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", fontWeight: 600, borderRadius: 2, textAlign: "center" }}>
                    Request Consultation
                  </Link>
                </div>

                {/* Related articles */}
                {relatedPosts.length > 0 && (
                  <div style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "22px 22px" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14, borderBottom: "1px solid var(--border)", paddingBottom: 10 }}>Related Articles</div>
                    {relatedPosts.map((rp) => rp ? (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <div style={{ padding: "11px 0", borderBottom: "1px solid var(--border)" }}>
                          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 600, color: "var(--ink)", lineHeight: 1.35, marginBottom: 4 }}>{rp.title}</div>
                          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: "var(--gold)" }}>{rp.readTime}</div>
                        </div>
                      </Link>
                    ) : null)}
                  </div>
                )}

                {/* Other practice areas */}
                <div style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "22px 22px", marginTop: 18 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>Other Practice Areas</div>
                  {practiceAreas.filter((p) => p.slug !== area.slug).slice(0, 5).map((p) => (
                    <Link key={p.slug} href={`/practice-areas/${p.slug}`} style={{ display: "flex", gap: 10, alignItems: "center", padding: "9px 0", borderBottom: "1px solid var(--border)", textDecoration: "none" }}>
                      <span style={{ fontSize: 16 }}>{p.icon}</span>
                      <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, color: "var(--slate)" }}>{p.title}</span>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 960px) {
          .pa-detail-grid { grid-template-columns: 1fr !important; }
          .pa-sidebar { position: static !important; }
          .scenarios-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
