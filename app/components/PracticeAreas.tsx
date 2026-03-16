import Reveal from "./Reveal";

const areas = [
  {
    icon: "⚖️",
    title: "Criminal Law",
    desc: "IPC, CrPC, bail provisions, FIR procedure, rights of the accused, and criminal trial process under Indian law.",
    acts: "IPC 1860 · CrPC 1973 · BNSS 2023",
    href: "/practice-areas/criminal-law",
  },
  {
    icon: "🏛️",
    title: "Civil Litigation",
    desc: "Civil suits, injunctions, execution of decrees, appeals, and proceedings under the Code of Civil Procedure 1908.",
    acts: "CPC 1908 · Limitation Act 1963",
    href: "/practice-areas/civil-litigation",
  },
  {
    icon: "🏠",
    title: "Property Law",
    desc: "Land disputes, title verification, mutation, registration, inheritance, and property transfer under Indian law.",
    acts: "TPA 1882 · Registration Act 1908",
    href: "/practice-areas/property-law",
  },
  {
    icon: "🏢",
    title: "Corporate Law",
    desc: "Companies Act compliance, governance, incorporation, mergers & acquisitions, board structures and NCLT matters.",
    acts: "Companies Act 2013 · SEBI Regulations",
    href: "/practice-areas/corporate-law",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Law",
    desc: "Marriage, divorce, child custody, maintenance, adoption, and succession under Hindu, Muslim, and other personal laws.",
    acts: "HMA 1955 · HAMA 1956 · SMA 1954",
    href: "/practice-areas/family-law",
  },
  {
    icon: "📜",
    title: "Constitutional Law",
    desc: "Fundamental rights, writ petitions, PIL, judicial review, and constitutional interpretation before High Courts and Supreme Court.",
    acts: "Constitution of India · Writ Jurisdiction",
    href: "/practice-areas/constitutional-law",
  },
  {
    icon: "🚀",
    title: "Startup & Business Law",
    desc: "Incorporation, shareholder agreements, funding documents, ESOP structuring, IP assignment, and regulatory compliance.",
    acts: "Companies Act 2013 · DPIIT Framework",
    href: "/practice-areas/startup-law",
  },
  {
    icon: "💡",
    title: "Intellectual Property",
    desc: "Trademarks, copyrights, patents, trade secrets, and IP enforcement under Indian and international frameworks.",
    acts: "Trade Marks Act 1999 · Patents Act 1970",
    href: "/practice-areas/intellectual-property",
  },
  {
    icon: "🛡️",
    title: "Consumer Protection",
    desc: "Consumer disputes, deficiency of service, product liability, and unfair trade practices under the Consumer Protection Act.",
    acts: "Consumer Protection Act 2019",
    href: "/practice-areas/consumer-protection",
  },
  {
    icon: "📋",
    title: "Contract Law",
    desc: "Contract drafting, review, breach of contract, specific performance, and enforcement of agreements under Indian Contract Act.",
    acts: "Indian Contract Act 1872",
    href: "/practice-areas/contract-law",
  },
  {
    icon: "💰",
    title: "Taxation Law",
    desc: "Income tax disputes, GST matters, assessment proceedings, and tax advisory for individuals and businesses.",
    acts: "Income Tax Act 1961 · GST Act 2017",
    href: "/practice-areas/taxation-law",
  },
  {
    icon: "🔨",
    title: "Divorce Law",
    desc: "Mutual consent divorce, contested divorce, alimony, maintenance, child custody arrangements and matrimonial disputes.",
    acts: "HMA 1955 · DMMA 1869 · SMA 1954",
    href: "/practice-areas/divorce-law",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      style={{ background: "var(--white)", padding: "96px 0" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <Reveal>
          <div className="section-label">Areas of Practice</div>
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
            Legal Practice Areas
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 19,
              color: "var(--slate-mid)",
              maxWidth: 560,
              fontWeight: 300,
              lineHeight: 1.65,
              marginBottom: 56,
            }}
          >
            IM &amp; Associates provides legal knowledge and advisory services
            across a comprehensive range of practice areas under Indian law.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
          className="practice-grid"
        >
          {areas.map((area, i) => (
            <Reveal key={area.title} delay={i * 40}>
              <a
                href={area.href}
                style={{
                  display: "block",
                  background: "var(--white)",
                  padding: "34px 30px",
                  textDecoration: "none",
                  color: "inherit",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                  transition: "background 0.2s",
                }}
                className="practice-card"
              >
                <div style={{ fontSize: 26, marginBottom: 14 }}>{area.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "var(--ink)",
                    lineHeight: 1.3,
                  }}
                >
                  {area.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: 15,
                    color: "var(--slate-mid)",
                    lineHeight: 1.6,
                    marginBottom: 14,
                  }}
                >
                  {area.desc}
                </p>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    color: "var(--gold)",
                    marginBottom: 16,
                  }}
                >
                  {area.acts}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  className="practice-arrow"
                >
                  Explore Area →
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} style={{ textAlign: "center", marginTop: 36 }}>
          <a
            href="/practice-areas"
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
            View All Practice Areas
          </a>
        </Reveal>
      </div>

      <style>{`
        .practice-card:hover { background: var(--parchment) !important; }
        .practice-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform 0.3s;
          transform-origin: left;
        }
        .practice-card:hover::after { transform: scaleX(1); }
        @media (max-width: 900px) {
          .practice-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .practice-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
