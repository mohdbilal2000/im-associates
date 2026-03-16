import Reveal from "./Reveal";

const cases = [
  {
    citation: "AIR 2020 SC 98 | Supreme Court — Constitution Bench",
    title: "Sushila Aggarwal v. State (NCT of Delhi)",
    summary:
      "A five-judge constitutional bench settled the scope and duration of anticipatory bail under Section 438 CrPC, holding that anticipatory bail need not be time-limited and can operate beyond arrest.",
    tags: ["Criminal Law", "Section 438 CrPC", "Bail Jurisprudence"],
    verdict:
      "Held: Anticipatory bail need not be time-limited; it can continue until conclusion of trial unless specific conditions warrant cancellation.",
    impact: "High",
  },
  {
    citation: "AIR 1978 SC 597 | Supreme Court",
    title: "Maneka Gandhi v. Union of India",
    summary:
      "Landmark judgment that expanded the scope of Article 21, holding that any procedure affecting personal liberty must be fair, just, and reasonable — effectively incorporating due process into Indian constitutional law.",
    tags: ["Constitutional Law", "Article 21", "Fundamental Rights"],
    verdict:
      "Held: Article 21 incorporates the concept of due process; laws affecting personal liberty must be just, fair, and reasonable.",
    impact: "Landmark",
  },
  {
    citation: "AIR 2017 SC 4904 | Supreme Court — 9-Judge Bench",
    title: "Justice K.S. Puttaswamy v. Union of India",
    summary:
      "The nine-judge bench unanimously held that the Right to Privacy is a fundamental right under the Indian Constitution, protected under Articles 14, 19, and 21, forming the core of human dignity.",
    tags: ["Constitutional Law", "Right to Privacy", "Digital Rights"],
    verdict:
      "Held: Privacy is a constitutionally protected fundamental right rooted in human dignity and autonomy.",
    impact: "Landmark",
  },
  {
    citation: "AIR 1980 SC 898 | Supreme Court — Constitution Bench",
    title: "Bachan Singh v. State of Punjab",
    summary:
      "Established the 'rarest of rare' doctrine as the guiding principle for imposition of capital punishment in India, requiring courts to balance aggravating and mitigating circumstances.",
    tags: ["Criminal Law", "Capital Punishment", "Sentencing"],
    verdict:
      "Held: Death penalty should only be imposed in the 'rarest of rare' cases where the alternative of life imprisonment is unquestionably foreclosed.",
    impact: "Landmark",
  },
];

const impactColors: Record<string, string> = {
  Landmark: "#b8962e",
  High: "#059669",
  Medium: "#0369a1",
};

export default function CaseLaw() {
  return (
    <section
      id="case-law"
      style={{ background: "var(--cream)", padding: "96px 0" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <Reveal>
          <div className="section-label">Jurisprudence</div>
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
            Case Law Analysis
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
            Structured analysis of landmark judgments from the Supreme Court and
            High Courts of India, presented for educational purposes.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 22,
          }}
          className="caselaw-grid"
        >
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  padding: "32px 30px",
                  transition: "box-shadow 0.25s, transform 0.25s",
                  height: "100%",
                }}
                className="case-card"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--slate-light)",
                      lineHeight: 1.5,
                    }}
                  >
                    {c.citation}
                  </div>
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: impactColors[c.impact] ?? "var(--gold)",
                      background: `${impactColors[c.impact] ?? "var(--gold)"}18`,
                      padding: "3px 10px",
                      borderRadius: 2,
                      fontWeight: 600,
                    }}
                  >
                    {c.impact}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 12,
                    lineHeight: 1.35,
                    color: "var(--ink)",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: 15,
                    color: "var(--slate-mid)",
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}
                >
                  {c.summary}
                </p>

                <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 16 }}>
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 11,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--slate-mid)",
                        border: "1px solid var(--border)",
                        padding: "3px 10px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    padding: "12px 16px",
                    background: "var(--parchment)",
                    borderLeft: "2px solid var(--gold)",
                    fontSize: 14,
                    color: "var(--slate)",
                    fontFamily: "'Crimson Pro', serif",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  {c.verdict}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} style={{ textAlign: "center", marginTop: 36 }}>
          <a
            href="/case-law"
            style={{
              display: "inline-block",
              padding: "13px 32px",
              background: "var(--slate)",
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
            Browse Case Law Database
          </a>
        </Reveal>
      </div>

      <style>{`
        .case-card:hover {
          box-shadow: 0 8px 36px rgba(14,14,14,0.09) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 860px) {
          .caselaw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
