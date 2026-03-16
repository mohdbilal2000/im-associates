import type { Metadata } from "next";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Legal Glossary A–Z — Indian Law Terms Explained",
  description: "Comprehensive A–Z glossary of Indian legal terms, Latin maxims, and procedural concepts. Plain-language explanations by advocates at IM & Associates.",
  alternates: { canonical: "/glossary" },
};

const glossaryTerms = [
  { term: "Actus Reus", area: "Criminal Law", def: "Latin for 'guilty act.' The physical conduct constituting the criminal offence. Must coincide with mens rea for most crimes under BNS 2023." },
  { term: "Adverse Possession", area: "Property Law", def: "The right to claim title to land after open, continuous, hostile, and peaceful possession for 12 years (Limitation Act 1963, Article 65). Does not apply against government land." },
  { term: "Anticipatory Bail", area: "Criminal Law", def: "Pre-arrest bail under Section 482 BNSS 2023 granted by Sessions Court or High Court to a person apprehending arrest for a non-bailable offence." },
  { term: "Article 21", area: "Constitutional Law", def: "The right to life and personal liberty under the Constitution of India. Interpreted broadly by the Supreme Court to include privacy, dignity, livelihood, health, and a clean environment." },
  { term: "Bail", area: "Criminal Law", def: "Temporary release of an arrested person on security. Section 478 BNSS 2023 governs bail in bailable offences; Section 479 governs bail in non-bailable offences at the discretion of the court." },
  { term: "Caveat Emptor", area: "Contract Law", def: "Latin for 'let the buyer beware.' Places due diligence on the buyer. Significantly curtailed in India by the Consumer Protection Act 2019." },
  { term: "Certiorari", area: "Constitutional Law", def: "A writ under Article 226/32 used to quash the order of an inferior court, tribunal, or quasi-judicial body that acted without jurisdiction or in violation of natural justice." },
  { term: "Chargesheet", area: "Criminal Law", def: "The final report submitted by police under Section 193 BNSS 2023 (formerly Section 173 CrPC) to the Magistrate after completion of investigation, listing the offences and accused." },
  { term: "Cognizable Offence", area: "Criminal Law", def: "An offence for which police can arrest without a warrant and investigate without Magistrate's order. Classified in Schedule I of BNSS 2023. Examples: murder, robbery, rape." },
  { term: "Decree", area: "Civil Law", def: "The formal expression of adjudication by a civil court that conclusively determines the rights of the parties regarding the matter in controversy. Defined in Section 2(2) CPC 1908." },
  { term: "Domicile", area: "Personal Law", def: "The country or jurisdiction that is a person's permanent home or to which they intend to return. Determines applicable personal law in India for matters like succession and marriage." },
  { term: "Due Process", area: "Constitutional Law", def: "The principle that the law must be applied fairly and in accordance with established procedures. In India, Article 21 has been interpreted to require that any procedure affecting personal liberty must be just, fair, and reasonable (Maneka Gandhi, 1978)." },
  { term: "Encumbrance Certificate", area: "Property Law", def: "A certificate obtained from the Sub-Registrar's office showing all registered transactions affecting a property during a specified period. Essential for property due diligence." },
  { term: "Ex Parte", area: "Civil Law", def: "An order or proceeding done on the application of or in favour of one party only, without notice to the other. An ex parte injunction can be granted in urgent cases under Order 39 CPC." },
  { term: "FIR", area: "Criminal Law", def: "First Information Report. Registered under Section 173 BNSS 2023 for cognizable offences. Mandatory upon receipt of information — police have no discretion to refuse registration (Lalita Kumari, 2014)." },
  { term: "Fundamental Rights", area: "Constitutional Law", def: "Rights guaranteed under Part III of the Constitution (Articles 12–35) enforceable against the State. Include equality, freedom, against exploitation, religious freedom, and the right to constitutional remedies." },
  { term: "Habeas Corpus", area: "Constitutional Law", def: "Writ meaning 'you shall have the body.' Filed to secure the release of a person unlawfully detained. Available under Articles 32 and 226 of the Constitution." },
  { term: "Injunction", area: "Civil Law", def: "A court order requiring a party to do or refrain from doing a specific act. Temporary injunction under Order 39 CPC; permanent injunction under Section 38 Specific Relief Act 1963." },
  { term: "IPC / BNS", area: "Criminal Law", def: "The Indian Penal Code 1860 was the principal criminal code until 30 June 2024. It was replaced by the Bharatiya Nyaya Sanhita (BNS) 2023, effective from 1 July 2024, for offences committed on or after that date." },
  { term: "Locus Standi", area: "Civil Law", def: "The legal right to bring a matter before a court. The Supreme Court has relaxed locus standi in PIL matters — any citizen can petition on behalf of those unable to approach courts themselves." },
  { term: "Maintenance", area: "Family Law", def: "Court-ordered financial support for a spouse, child, or parent. Governed by Section 144 BNSS 2023 (secular law applicable to all) and Section 24-25 HMA 1955 (for Hindus)." },
  { term: "Mandamus", area: "Constitutional Law", def: "Writ meaning 'we command.' Issued to compel a public authority to perform a public legal duty that it has failed or refused to perform." },
  { term: "Mens Rea", area: "Criminal Law", def: "Latin for 'guilty mind.' The mental element of a crime — the intention, knowledge, or recklessness required as an element of the offence. Without mens rea, most criminal charges cannot be established." },
  { term: "Mutation", area: "Property Law", def: "The process of recording a change in ownership in revenue records maintained by the state Revenue Department. Mutation does not confer or prove title — it is only an administrative record." },
  { term: "Natural Justice", area: "Administrative Law", def: "The two core principles of fairness in administrative action: (1) Audi alteram partem — hear the other side; (2) Nemo judex in causa sua — no person shall be a judge in their own cause." },
  { term: "Non Obstante Clause", area: "Statutory Law", def: "A provision beginning with 'Notwithstanding anything contained in...' which gives the section overriding effect over conflicting provisions in the same or other legislation." },
  { term: "PIL (Public Interest Litigation)", area: "Constitutional Law", def: "A petition filed in the public interest by any citizen or organisation under Articles 32 (Supreme Court) or 226 (High Court). Courts can take cognizance on the basis of a letter or newspaper report." },
  { term: "Prima Facie", area: "General Law", def: "Latin for 'at first sight.' Evidence sufficient to establish a case until contradicted or rebutted. Used in courts when deciding whether a case merits full hearing." },
  { term: "Quo Warranto", area: "Constitutional Law", def: "A writ challenging the legal authority by which a person holds a public office. Used to remove a person who is occupying a public office without legal authority." },
  { term: "Res Judicata", area: "Civil Law", def: "A matter already judged. Under Section 11 CPC, a matter that has been finally decided by a competent court cannot be re-litigated between the same parties on the same cause of action." },
  { term: "RTI", area: "Constitutional Law", def: "Right to Information. Under the RTI Act 2005, any citizen can request information from a public authority within 30 days. Flows from Article 19(1)(a) of the Constitution." },
  { term: "Specific Performance", area: "Contract Law", def: "A court order under the Specific Relief Act 1963 compelling a party to perform a specific contractual obligation. Generally available for contracts for immovable property where damages are inadequate remedy." },
  { term: "Stridhan", area: "Family Law", def: "Property belonging absolutely to a Hindu wife — gifts received before, during, and after marriage. The husband has no right over stridhan even during financial distress. Recognised under Hindu personal law and Section 27 HMA." },
  { term: "Sub Judice", area: "Civil Law", def: "A matter under judicial consideration and not yet decided. Under Section 10 CPC, a civil court must stay proceedings in a suit if the matter is already sub judice before another court." },
  { term: "Transfer of Property", area: "Property Law", def: "Under the Transfer of Property Act 1882, 'transfer of property' means an act by which a living person conveys property to one or more other living persons. Sale, mortgage, lease, exchange, gift, and actionable claims are all transfers." },
  { term: "Writ", area: "Constitutional Law", def: "A formal written order issued by a court exercising its constitutional jurisdiction under Articles 32 or 226. Five types: Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto." },
  { term: "Zero FIR", area: "Criminal Law", def: "An FIR registered at any police station regardless of territorial jurisdiction. Codified under Section 173(1) BNSS 2023. Must be transferred to the jurisdictionally competent station within 15 days." },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPage() {
  const grouped = alphabet.reduce((acc, letter) => {
    const terms = glossaryTerms.filter((t) => t.term.toUpperCase().startsWith(letter));
    if (terms.length) acc[letter] = terms;
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Indian Legal Glossary",
    description: "A–Z glossary of Indian legal terms by IM & Associates",
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.def,
      inDefinedTermSet: "https://imassociates.in/glossary",
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Topbar />
      <Navbar />
      <main>
        <PageHeader
          overline="Legal Terminology"
          title="Legal Glossary"
          titleEm="A–Z"
          subtitle="Plain-language explanations of Indian legal terms, Latin maxims, and procedural concepts for educational clarity."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Legal Glossary" }]}
        />

        <section style={{ background: "var(--cream)", padding: "72px 0 96px" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
            {/* Alphabet nav */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 52 }}>
              {alphabet.map((letter) => (
                <a
                  key={letter}
                  href={grouped[letter] ? `#letter-${letter}` : undefined}
                  style={{
                    width: 34,
                    height: 34,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textDecoration: "none",
                    background: grouped[letter] ? "var(--slate)" : "var(--parchment)",
                    color: grouped[letter] ? "var(--gold-light)" : "var(--slate-light)",
                    border: "1px solid var(--border)",
                    cursor: grouped[letter] ? "pointer" : "default",
                    borderRadius: 2,
                    transition: "background 0.2s",
                  }}
                >
                  {letter}
                </a>
              ))}
            </div>

            {/* Terms by letter */}
            {Object.entries(grouped).map(([letter, terms]) => (
              <div key={letter} id={`letter-${letter}`} style={{ marginBottom: 48 }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: "var(--gold)", marginBottom: 20, borderBottom: "2px solid var(--border)", paddingBottom: 10 }}>{letter}</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }} className="glossary-terms-grid">
                  {terms.map((t) => (
                    <div key={t.term} style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "22px 22px" }}>
                      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: "var(--ink)", marginBottom: 6 }}>{t.term}</div>
                      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>{t.area}</div>
                      <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, color: "var(--slate-mid)", lineHeight: 1.65 }}>{t.def}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ marginTop: 44, padding: "18px 22px", background: "var(--parchment)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", fontFamily: "'Crimson Pro',serif", fontSize: 14, color: "var(--slate-mid)", lineHeight: 1.7, fontStyle: "italic" }}>
              <strong style={{ fontStyle: "normal", color: "var(--ink)" }}>Editorial Note:</strong> All definitions are provided for general educational purposes only and reflect the law as at January 2025. Definitions may be simplified for accessibility. For precise legal meanings, consult the relevant statutes and a qualified advocate.
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 720px) { .glossary-terms-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
