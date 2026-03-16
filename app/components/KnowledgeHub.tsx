import Reveal from "./Reveal";

const featured = {
  tag: "Criminal Law",
  tagColor: "#dc2626",
  title: "What is Anticipatory Bail Under Section 438 CrPC?",
  excerpt:
    "Anticipatory bail under Section 438 of the Code of Criminal Procedure provides a statutory right to seek pre-arrest bail. This article explains eligibility, procedure, conditions imposed, and landmark Supreme Court rulings that define its scope in India.",
  meta: "Published by IM & Associates · Legal Education Series · Updated 2024",
  toc: [
    "Definition & Legal Basis",
    "Who Can Apply?",
    "Procedure Before Sessions Court",
    "Conditions Attached to Anticipatory Bail",
    "Key Supreme Court Judgments",
    "FAQs on Anticipatory Bail",
  ],
};

const articles = [
  {
    tag: "Divorce Law",
    tagColor: "#7c3aed",
    title: "Mutual Consent Divorce: Complete Procedure Under Section 13B HMA",
    excerpt:
      "Step-by-step explanation of the mutual consent divorce process, mandatory 6-month waiting period, joint petition requirements, and documentation needed.",
  },
  {
    tag: "Property Law",
    tagColor: "#059669",
    title: "How to Verify Land Title in India: A Legal Due Diligence Guide",
    excerpt:
      "Encumbrance certificate, title search, mutation records, and a practical due diligence checklist for buyers and sellers in property transactions.",
  },
  {
    tag: "Corporate Law",
    tagColor: "#0369a1",
    title: "Director's Duties Under the Companies Act 2013",
    excerpt:
      "Understanding fiduciary obligations, disclosure requirements, and potential liabilities of company directors under Indian corporate law.",
  },
  {
    tag: "Constitutional Law",
    tagColor: "#b45309",
    title: "How to File a Writ Petition in High Court: Complete Guide",
    excerpt:
      "Types of writs — Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto — and the procedural steps to invoke writ jurisdiction.",
  },
];

export default function KnowledgeHub() {
  return (
    <section
      id="knowledge"
      style={{ background: "var(--parchment)", padding: "96px 0" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <Reveal>
          <div className="section-label">Legal Knowledge Hub</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.8vw, 44px)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "var(--ink)",
              marginBottom: 14,
            }}
          >
            Legal Insights &amp; Analysis
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 19,
              color: "var(--slate-mid)",
              maxWidth: 560,
              fontWeight: 300,
              lineHeight: 1.65,
              marginBottom: 52,
            }}
          >
            In-depth articles, procedural guides, and legislative analysis
            authored for legal education and public awareness.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.9fr 1fr",
            gap: 28,
          }}
          className="articles-grid"
        >
          {/* Featured article */}
          <Reveal>
            <div
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                padding: "40px 38px",
                position: "relative",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 3,
                  height: "100%",
                  background:
                    "linear-gradient(180deg, var(--gold) 0%, transparent 80%)",
                }}
              />
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: featured.tagColor,
                  background: `${featured.tagColor}18`,
                  padding: "4px 12px",
                  borderRadius: 2,
                  marginBottom: 16,
                  fontWeight: 600,
                }}
              >
                {featured.tag}
              </span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 24,
                  fontWeight: 600,
                  marginBottom: 14,
                  lineHeight: 1.3,
                  color: "var(--ink)",
                }}
              >
                {featured.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Crimson Pro', serif",
                  color: "var(--slate-mid)",
                  marginBottom: 24,
                  fontSize: 16,
                  lineHeight: 1.7,
                }}
              >
                {featured.excerpt}
              </p>
              {/* Table of Contents */}
              <div
                style={{
                  background: "var(--parchment)",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--gold)",
                  padding: "20px 24px",
                  marginBottom: 24,
                  borderRadius: "0 2px 2px 0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 12,
                  }}
                >
                  Table of Contents
                </div>
                <ol
                  style={{
                    paddingLeft: 18,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {featured.toc.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontSize: 15,
                          color: "var(--slate)",
                          textDecoration: "none",
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 13,
                  color: "var(--slate-light)",
                  letterSpacing: "0.04em",
                  marginBottom: 20,
                }}
              >
                {featured.meta}
              </div>
              <a
                href="/blog/anticipatory-bail-india-bnss-2023"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Read Full Article →
              </a>
            </div>
          </Reveal>

          {/* Article list */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <a
                  href="#"
                  style={{
                    display: "block",
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    padding: "22px 24px",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  className="article-item"
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: a.tagColor,
                      background: `${a.tagColor}15`,
                      padding: "3px 10px",
                      borderRadius: 2,
                      marginBottom: 10,
                      fontWeight: 600,
                    }}
                  >
                    {a.tag}
                  </span>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 15,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginBottom: 8,
                      color: "var(--ink)",
                    }}
                  >
                    {a.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: 14,
                      color: "var(--slate-mid)",
                      lineHeight: 1.55,
                    }}
                  >
                    {a.excerpt}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={80} style={{ textAlign: "center", marginTop: 44 }}>
          <a
            href="/blog"
            style={{
              display: "inline-block",
              padding: "13px 32px",
              background: "var(--gold)",
              color: "#fff",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 2,
              fontWeight: 600,
            }}
          >
            Browse Legal Insights Library
          </a>
        </Reveal>
      </div>

      <style>{`
        .article-item:hover {
          border-color: var(--gold) !important;
          transform: translateX(4px);
        }
        @media (max-width: 860px) {
          .articles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
