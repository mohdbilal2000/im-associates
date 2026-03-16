import Reveal from "./Reveal";

const terms = [
  {
    term: "Habeas Corpus",
    def: "A writ requiring a detained person to be brought before a court. The primary constitutional safeguard against unlawful detention, enforceable under Articles 32 and 226.",
    ref: "Constitutional Law · Writ Jurisdiction",
  },
  {
    term: "Locus Standi",
    def: "The legal standing to bring a matter before a court. In PILs, the Supreme Court has relaxed traditional locus standi requirements, allowing any citizen to seek constitutional remedies.",
    ref: "Civil Procedure · Constitutional Law",
  },
  {
    term: "Non Obstante Clause",
    def: 'A provision prefixed with "Notwithstanding anything contained in..." which gives the section overriding effect over other provisions within the same or other statutes.',
    ref: "Statutory Interpretation · Legislative Drafting",
  },
  {
    term: "Mens Rea",
    def: "Latin for 'guilty mind.' The intention or knowledge of wrongdoing required as an element of most criminal offences. Without mens rea, criminal liability generally cannot be established.",
    ref: "Criminal Law · Elements of Offence",
  },
  {
    term: "Doctrine of Pith & Substance",
    def: "A constitutional doctrine for determining whether a law falls within the legislative competence of Parliament or State Legislature under the Seventh Schedule.",
    ref: "Constitutional Law · Federalism",
  },
  {
    term: "Caveat Emptor",
    def: "Latin for 'Let the buyer beware.' Places due diligence obligation on the purchaser. Its application has been significantly curtailed by the Consumer Protection Act 2019.",
    ref: "Contract Law · Consumer Law",
  },
  {
    term: "Res Judicata",
    def: "A doctrine under Section 11 CPC that prevents re-litigation of matters already decided by a competent court between the same parties on the same cause of action.",
    ref: "Civil Procedure · Evidence Law",
  },
  {
    term: "Promissory Estoppel",
    def: "An equitable doctrine preventing a party from reneging on a promise where the other party has acted upon it to their detriment. Recognized in Indian administrative and contract law.",
    ref: "Contract Law · Equity",
  },
  {
    term: "Actus Reus",
    def: "Latin for 'guilty act.' The physical act or conduct constituting the prohibited behaviour in a criminal offence. Must coincide with mens rea for most crimes.",
    ref: "Criminal Law · Elements of Offence",
  },
];

export default function Glossary() {
  return (
    <section
      id="glossary"
      style={{
        background: "var(--slate)",
        color: "#fff",
        padding: "96px 0",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <Reveal>
          <div
            className="section-label"
            style={{ color: "var(--gold-light)" }}
          >
            Legal Terminology
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.8vw, 44px)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#fff",
              marginBottom: 14,
            }}
          >
            Legal Glossary
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 19,
              color: "rgba(255,255,255,0.52)",
              maxWidth: 560,
              fontWeight: 300,
              lineHeight: 1.65,
              marginBottom: 52,
            }}
          >
            Plain-language explanations of legal terms, Latin maxims, and
            procedural concepts for educational clarity.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(184,150,46,0.14)",
          }}
          className="glossary-grid"
        >
          {terms.map((t, i) => (
            <Reveal key={t.term} delay={i * 40}>
              <div
                style={{
                  background: "rgba(255,255,255,0.025)",
                  padding: "28px 26px",
                  transition: "background 0.2s",
                  height: "100%",
                }}
                className="glossary-item"
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "var(--gold-light)",
                    marginBottom: 10,
                  }}
                >
                  {t.term}
                </div>
                <p
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: 15,
                    color: "rgba(255,255,255,0.58)",
                    lineHeight: 1.65,
                    marginBottom: 12,
                  }}
                >
                  {t.def}
                </p>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                  }}
                >
                  {t.ref}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} style={{ textAlign: "center", marginTop: 36 }}>
          <a
            href="/glossary"
            style={{
              display: "inline-block",
              padding: "13px 32px",
              border: "1px solid rgba(184,150,46,0.4)",
              color: "var(--gold-light)",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 2,
              fontWeight: 600,
              transition: "background 0.2s, border-color 0.2s",
            }}
          >
            View Complete Legal Glossary (A–Z)
          </a>
        </Reveal>
      </div>

      <style>{`
        .glossary-item:hover { background: rgba(184,150,46,0.07) !important; }
        .section-label::before { background: var(--gold-light) !important; }
        @media (max-width: 860px) {
          .glossary-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .glossary-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
