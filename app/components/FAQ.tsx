"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is the difference between IPC and CrPC?",
    a: "The Indian Penal Code (IPC), 1860 defines criminal offences and prescribes punishments. The Code of Criminal Procedure (CrPC), 1973 lays down the procedural mechanism for enforcement — covering investigation, trial, and sentencing. In essence: IPC defines what is a crime; CrPC defines how it is tried. Note: The CrPC has been replaced by the Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, effective from July 1, 2024.",
  },
  {
    q: "What are the rights of an arrested person in India?",
    a: "Under Article 22 of the Constitution and Sections 50–56 of CrPC (now BNSS), an arrested person has: (1) the right to be informed of the grounds of arrest, (2) the right to consult an advocate of their choice, (3) the right to be produced before a magistrate within 24 hours, and (4) the right to bail in bailable offences. The Supreme Court in D.K. Basu v. State of West Bengal further elaborated procedural safeguards.",
  },
  {
    q: "How long does a civil suit typically take in India?",
    a: "Duration varies significantly based on the court, complexity, and party cooperation. Commercial courts under the Commercial Courts Act 2015 aim for 12-month resolution. Regular civil suits in district courts may take 3–10+ years. Summary suits under Order XXXVII CPC are faster. Mediation and arbitration offer alternative timelines of 3–18 months.",
  },
  {
    q: "What is a Legal Notice and when must it be sent?",
    a: "A legal notice is a formal communication sent before initiating litigation, informing the recipient of one's legal intent. Under Section 80 CPC, 2 months' notice is mandatory before filing a suit against the government. For bounced cheques under Section 138 NI Act, a 15-day notice is mandatory. In other civil matters, notice helps establish good-faith dispute resolution efforts.",
  },
  {
    q: "What documents are needed for property registration in India?",
    a: "Key documents include: the sale deed (drafted and stamped), title chain documents, encumbrance certificate (EC), property tax receipts, identity proof (Aadhaar/PAN) of all parties, NOC from relevant authorities if applicable, and Form 60/61 if PAN is not available. Registration is done at the Sub-Registrar's office under the Registration Act 1908.",
  },
  {
    q: "What is the limitation period for filing a civil suit in India?",
    a: "The Limitation Act 1963 prescribes time limits: 3 years for most contractual disputes from the date of breach; 12 years for suits related to immovable property; 30 years for suits by the government on mortgages. Filing after the limitation period makes the suit time-barred. The period may be extended if fraud or mistake is discovered later, under Section 17–19.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      style={{ background: "var(--white)", padding: "96px 0" }}
    >
      {/* AEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="faq-layout"
        >
          {/* FAQ list */}
          <div>
            <Reveal>
              <div className="section-label">Frequently Asked Questions</div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(26px, 3.5vw, 40px)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: "var(--ink)",
                  marginBottom: 36,
                }}
              >
                Legal Questions
                <br />
                Answered Clearly
              </h2>
            </Reveal>

            <div>
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 50}>
                  <div
                    style={{
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === i ? null : i)
                      }
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "20px 0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 16,
                        textAlign: "left",
                      }}
                      aria-expanded={openIndex === i}
                    >
                      <span
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 16,
                          fontWeight: 600,
                          color: "var(--ink)",
                          lineHeight: 1.4,
                        }}
                      >
                        {faq.q}
                      </span>
                      <span
                        style={{
                          flexShrink: 0,
                          color: "var(--gold)",
                          marginTop: 2,
                          transition: "transform 0.3s",
                          transform:
                            openIndex === i ? "rotate(0deg)" : "rotate(0deg)",
                        }}
                      >
                        {openIndex === i ? (
                          <Minus size={18} />
                        ) : (
                          <Plus size={18} />
                        )}
                      </span>
                    </button>
                    <div
                      style={{
                        overflow: "hidden",
                        maxHeight: openIndex === i ? 400 : 0,
                        transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontSize: 16,
                          color: "var(--slate-mid)",
                          lineHeight: 1.75,
                          paddingBottom: 20,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Aside */}
          <div style={{ position: "sticky", top: 88 }}>
            <Reveal delay={100}>
              <div
                style={{
                  background: "var(--slate)",
                  padding: "44px 40px",
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: 20,
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: -24,
                    right: 16,
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 160,
                    color: "rgba(184,150,46,0.07)",
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                    fontWeight: 700,
                  }}
                >
                  §
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 24,
                    color: "#fff",
                    marginBottom: 12,
                  }}
                >
                  Need Legal Guidance?
                </h3>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 17,
                    color: "rgba(255,255,255,0.58)",
                    marginBottom: 28,
                    fontWeight: 300,
                    lineHeight: 1.65,
                  }}
                >
                  Consult with an advocate at IM &amp; Associates for advice
                  specific to your legal matter.
                </p>
                <a
                  href="#contact"
                  style={{
                    display: "block",
                    padding: "14px 28px",
                    background: "var(--gold)",
                    color: "#fff",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 13,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    fontWeight: 600,
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                >
                  Request a Consultation
                </a>
              </div>

              <div
                style={{
                  background: "var(--parchment)",
                  border: "1px solid var(--border)",
                  padding: "28px 28px",
                }}
              >
                <div className="section-label" style={{ marginBottom: 16 }}>
                  Legal Resources
                </div>
                {[
                  { icon: "📄", text: "Bare Acts & Statutes Library" },
                  { icon: "🔎", text: "Supreme Court Case Search" },
                  { icon: "📚", text: "Legal Glossary A–Z" },
                  { icon: "📋", text: "Legal Document Checklists" },
                  { icon: "⚖️", text: "Court Fee Calculator" },
                ].map((r) => (
                  <a
                    key={r.text}
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: 15,
                      color: "var(--slate)",
                      textDecoration: "none",
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(184,150,46,0.12)",
                      transition: "color 0.2s",
                    }}
                  >
                    <span>{r.icon}</span>
                    {r.text}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .faq-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
