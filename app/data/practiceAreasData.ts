export interface PracticeArea {
  slug: string;
  icon: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroLaw: string;
  overview: string;
  legislation: string[];
  courts: string[];
  keyAreas: { heading: string; body: string }[];
  commonScenarios: { scenario: string; explanation: string }[];
  faqs: { q: string; a: string }[];
  relatedBlogs: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "criminal-law",
    icon: "⚖️",
    title: "Criminal Law",
    metaTitle: "Criminal Law Services — IM & Associates, Agra",
    metaDescription: "Criminal law services in Agra. FIR, bail, anticipatory bail, trial procedure under BNS & BNSS 2023. Legal knowledge on criminal matters by IM & Associates.",
    heroLaw: "BNS 2023 · BNSS 2023",
    overview: "Criminal law governs offences against the state and society. In India, substantive criminal law is now governed by the Bharatiya Nyaya Sanhita (BNS) 2023, procedural law by the Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, and evidence law by the Bharatiya Sakshya Adhiniyam (BSA) 2023 — all in force since 1 July 2024, replacing the IPC, CrPC, and Indian Evidence Act respectively.",
    legislation: ["Bharatiya Nyaya Sanhita (BNS) 2023", "Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023", "Bharatiya Sakshya Adhiniyam (BSA) 2023", "NDPS Act 1985", "POCSO Act 2012"],
    courts: ["Magistrate Court", "Sessions Court", "Allahabad High Court", "Supreme Court of India"],
    keyAreas: [
      { heading: "Bail & Anticipatory Bail", body: "Bail under BNSS 2023 (Sections 478–483) and anticipatory bail under Section 482 BNSS are critical criminal law remedies protecting personal liberty under Article 21 of the Constitution." },
      { heading: "FIR & Investigation", body: "The FIR under Section 173 BNSS sets the criminal process in motion. Zero FIR (codified under BNSS) allows filing at any police station. Police investigation must be completed within 60–90 days." },
      { heading: "Trial Procedure", body: "Criminal trials under BNSS 2023 follow framing of charges, examination of prosecution witnesses, statement of accused, defence evidence, and final arguments. BNSS mandates trial completion within specified timelines." },
    ],
    commonScenarios: [
      { scenario: "FIR registered against you", explanation: "You have the right to know the grounds of the FIR, consult an advocate immediately, and apply for anticipatory bail before arrest." },
      { scenario: "Arrested by police", explanation: "Constitutional rights under Article 22 apply: right to be informed of grounds, right to consult advocate, right to be produced before Magistrate within 24 hours." },
      { scenario: "Cheque bounce (Section 143 BNS)", explanation: "Dishonour of cheque is a criminal offence under Section 143 BNS (formerly Section 138 NI Act). A 15-day demand notice must be sent before filing the complaint." },
    ],
    faqs: [
      { q: "What replaced the IPC in India?", a: "The Indian Penal Code 1860 was replaced by the Bharatiya Nyaya Sanhita (BNS) 2023, effective from 1 July 2024. The BNS applies to offences committed on or after that date." },
      { q: "Can criminal cases be compounded (settled) in India?", a: "Yes, certain offences under BNS are compoundable — they can be settled between the complainant and accused with court permission. Offences listed in the First and Second Schedule to the BNSS can be compounded. Serious offences like murder, rape, and robbery are non-compoundable." },
    ],
    relatedBlogs: ["anticipatory-bail-india-bnss-2023", "rights-of-arrested-person-bnss-2023", "fir-procedure-india-bnss", "difference-bns-bnss-india"],
  },
  {
    slug: "civil-litigation",
    icon: "🏛️",
    title: "Civil Litigation",
    metaTitle: "Civil Litigation Services — IM & Associates, Agra",
    metaDescription: "Civil litigation services in Agra. Civil suits, injunctions, execution of decrees, appeals under CPC 1908. Legal knowledge on civil procedure by IM & Associates.",
    heroLaw: "CPC 1908 · Limitation Act 1963",
    overview: "Civil litigation involves disputes between private parties seeking civil remedies — money, property, injunctions, or specific performance. In India, civil proceedings are governed by the Code of Civil Procedure 1908 (CPC), the Indian Contract Act 1872, the Transfer of Property Act 1882, and the Specific Relief Act 1963.",
    legislation: ["Code of Civil Procedure 1908", "Limitation Act 1963", "Specific Relief Act 1963", "Indian Contract Act 1872"],
    courts: ["Civil Judge (Junior Division)", "Civil Judge (Senior Division)", "District Judge", "Allahabad High Court"],
    keyAreas: [
      { heading: "Civil Suits", body: "A civil suit is initiated by filing a plaint before the competent court. The court has pecuniary and territorial jurisdiction based on the value and location of the subject matter of the dispute." },
      { heading: "Injunctions", body: "Temporary and permanent injunctions under Order 39 CPC restrain a party from doing an act. Courts grant injunctions on the triple test: prima facie case, balance of convenience, and irreparable harm." },
      { heading: "Execution of Decrees", body: "A decree passed by a civil court must be executed to obtain actual relief. Execution can be against property, by attachment and sale, or by arrest and detention in civil prison in specified cases." },
    ],
    commonScenarios: [
      { scenario: "Money recovery dispute", explanation: "A money recovery suit can be filed under Order 37 CPC (Summary Suit) for liquidated debts or under a regular suit for unliquidated claims." },
      { scenario: "Property encroachment", explanation: "A civil suit for permanent injunction and declaration of title can be filed to establish rights and restrain the encroacher." },
    ],
    faqs: [
      { q: "What is the limitation period for a civil suit in India?", a: "The Limitation Act 1963 prescribes time limits. For most contractual claims: 3 years from breach. For property claims: 12 years. For suits against government: 30 years for mortgage suits. Filing after limitation makes the suit time-barred." },
      { q: "What is a summary suit under Order 37 CPC?", a: "A summary suit is a faster civil remedy for recovery of money on negotiable instruments, written contracts, or enactments where the defendant has no defence. The defendant must seek leave to appear and defend — failing which, a decree is passed immediately." },
    ],
    relatedBlogs: ["fir-procedure-india-bnss", "consumer-protection-act-2019-complaint-guide"],
  },
  {
    slug: "property-law",
    icon: "🏠",
    title: "Property Law",
    metaTitle: "Property Law Services — IM & Associates, Agra",
    metaDescription: "Property law services in Agra. Sale deed, title verification, property disputes, registration, inheritance. Legal knowledge on property matters by IM & Associates.",
    heroLaw: "TPA 1882 · Reg. Act 1908",
    overview: "Property law in India governs the acquisition, transfer, and protection of rights in immovable property. The primary legislation includes the Transfer of Property Act 1882, Registration Act 1908, Indian Stamp Act 1899, and state-specific revenue laws. In Uttar Pradesh, the UP Revenue Code 2006 and the UP Urban Buildings Act 1972 are also significant.",
    legislation: ["Transfer of Property Act 1882", "Registration Act 1908", "UP Revenue Code 2006", "UP Urban Buildings Act 1972", "RFCTLARR Act 2013"],
    courts: ["Revenue Court", "Civil Court", "RERA Authority UP", "Allahabad High Court"],
    keyAreas: [
      { heading: "Sale and Purchase", body: "Transfer of immovable property requires a registered sale deed under Section 17 of the Registration Act 1908. The sale deed must be executed on adequately stamped paper and registered at the Sub-Registrar's office." },
      { heading: "Title Disputes", body: "Property title disputes involve examination of chain of title, encumbrance certificate, revenue records, and court records. Adverse possession claims can extinguish title after 12 years of open, hostile, and continuous possession." },
      { heading: "Inheritance and Succession", body: "Property succession for Hindus is governed by the Hindu Succession Act 1956. The 2005 Amendment gave daughters equal rights as sons in ancestral property — a landmark change confirmed by the Supreme Court in Vineeta Sharma v. Rakesh Sharma (2020)." },
    ],
    commonScenarios: [
      { scenario: "Buying property", explanation: "Always conduct legal due diligence: verify chain of title for 30+ years, obtain encumbrance certificate, check for pending litigation, verify mutation records, and ensure RERA registration for new projects." },
      { scenario: "Property dispute with family member", explanation: "Family property disputes may involve a partition suit under the Partition Act 1893 or under the CPC for determination and division of shares." },
    ],
    faqs: [
      { q: "Do daughters have equal property rights in India?", a: "Yes. Under the Hindu Succession (Amendment) Act 2005, daughters have equal rights as sons in ancestral (coparcenary) property. The Supreme Court in Vineeta Sharma v. Rakesh Sharma (2020) held that this right applies to daughters born before 2005 as well — it is retroactive." },
      { q: "What is adverse possession in Indian property law?", a: "Adverse possession under the Limitation Act 1963 allows a person who has been in open, peaceful, hostile, and continuous possession of land for 12 years to extinguish the original owner's title. The possession must be without the owner's permission." },
    ],
    relatedBlogs: ["property-title-verification-india", "property-registration-process-india", "tenant-rights-india-rent-law"],
  },
  {
    slug: "family-law",
    icon: "👨‍👩‍👧",
    title: "Family Law",
    metaTitle: "Family Law Services — IM & Associates, Agra",
    metaDescription: "Family law services in Agra. Divorce, child custody, maintenance, domestic violence, succession. Legal knowledge on family matters by IM & Associates.",
    heroLaw: "HMA 1955 · PWDVA 2005",
    overview: "Family law in India encompasses matrimonial laws, custody, maintenance, adoption, and succession. The applicable law varies by religion: the Hindu Marriage Act 1955 for Hindus, Buddhists, Jains, and Sikhs; the Muslim Personal Law (Shariat) Application Act 1937 for Muslims; the Indian Christian Marriage Act 1872 for Christians; and the Special Marriage Act 1954 for inter-religion marriages.",
    legislation: ["Hindu Marriage Act 1955", "Special Marriage Act 1954", "Guardianship and Wards Act 1890", "PWDVA 2005", "Section 144 BNSS 2023"],
    courts: ["Family Court", "District Court", "Allahabad High Court"],
    keyAreas: [
      { heading: "Divorce Proceedings", body: "Divorce can be by mutual consent under Section 13B HMA (fastest route) or contested on grounds listed in Section 13 HMA — cruelty, adultery, desertion, conversion, mental disorder, leprosy, venereal disease, or irretrievable breakdown (if judicially recognised)." },
      { heading: "Child Custody", body: "The paramount consideration in all custody matters is the welfare of the child. Courts apply this test above all other considerations including rights of either parent." },
      { heading: "Maintenance and Alimony", body: "Maintenance can be claimed under Section 144 BNSS (all religions) or Section 24-25 HMA (Hindus). Courts assess income, standard of living, and needs of both parties." },
    ],
    commonScenarios: [
      { scenario: "Both spouses want to separate amicably", explanation: "Mutual consent divorce under Section 13B HMA is the appropriate route. It requires 1 year of separation, agreed terms, and 6 months waiting period (which can be waived)." },
      { scenario: "Domestic violence by spouse", explanation: "PWDVA 2005 provides Protection Orders, Residence Orders, and Monetary Relief. Section 498A BNS (cruelty) is a parallel criminal remedy." },
    ],
    faqs: [
      { q: "Can Muslim women seek divorce in India?", a: "Yes. Muslim women have multiple options: Talaq-e-Tafwiz (if delegated by husband), Khula (wife-initiated dissolution returning mahr), Mubarat (mutual consent), or dissolution under the Dissolution of Muslim Marriages Act 1939 on specified grounds including cruelty, desertion, imprisonment, and inability to maintain." },
      { q: "Is Triple Talaq (instant talaq) valid in India?", a: "No. The Supreme Court in Shayara Bano v. Union of India (2017) declared instant triple talaq (talaq-e-biddat) unconstitutional and void. The Muslim Women (Protection of Rights on Marriage) Act 2019 made pronouncing triple talaq a criminal offence punishable with up to 3 years imprisonment." },
    ],
    relatedBlogs: ["mutual-consent-divorce-india-section-13b", "child-custody-law-india", "alimony-maintenance-india-law", "domestic-violence-law-india-pwdva"],
  },
  {
    slug: "corporate-law",
    icon: "🏢",
    title: "Corporate Law",
    metaTitle: "Corporate Law Services — IM & Associates, Agra",
    metaDescription: "Corporate law services in Agra. Company incorporation, compliance, directors duties, NCLT proceedings. Legal knowledge on corporate matters by IM & Associates.",
    heroLaw: "Companies Act 2013",
    overview: "Corporate law in India is primarily governed by the Companies Act 2013 and the regulations of the Ministry of Corporate Affairs (MCA). The Act is supplemented by SEBI regulations for listed companies, FEMA for foreign investment, and the Insolvency and Bankruptcy Code 2016 for insolvency matters.",
    legislation: ["Companies Act 2013", "SEBI (LODR) Regulations 2015", "FEMA 1999", "Insolvency and Bankruptcy Code 2016", "LLP Act 2008"],
    courts: ["NCLT (National Company Law Tribunal)", "NCLAT", "High Court", "SEBI"],
    keyAreas: [
      { heading: "Company Incorporation & Compliance", body: "Incorporating a Private Limited Company involves MCA21 filing, DIN and DSC for directors, MOA/AOA drafting, and PAN/TAN registration. Annual compliance includes AGM, ROC filings (MGT-7, AOC-4), and statutory audit." },
      { heading: "Directors' Duties", body: "Directors owe fiduciary duties under Section 166 Companies Act 2013 — to act in good faith, avoid conflicts of interest, and exercise reasonable care. Breach can lead to personal liability." },
      { heading: "Mergers and Acquisitions", body: "Mergers under Sections 230–232 Companies Act require NCLT approval, shareholder approval, and creditor protection mechanisms." },
    ],
    commonScenarios: [
      { scenario: "Starting a company", explanation: "A Private Limited Company is the most appropriate structure for businesses seeking external investment. Minimum 2 directors, 2 shareholders; can be incorporated online via SPICe+ form on MCA21." },
      { scenario: "Shareholder dispute", explanation: "Oppression and mismanagement petitions can be filed before NCLT under Sections 241-242 of the Companies Act 2013 when majority shareholders act in a manner prejudicial to minority interests." },
    ],
    faqs: [
      { q: "What is the process to close a company in India?", a: "A company can be struck off/closed through voluntary strike-off under Section 248 Companies Act (via Form STK-2) if it has not commenced business or has been inactive. Alternatively, formal winding up through NCLT is available. The company must have no pending liabilities or legal proceedings." },
      { q: "Can a single person start a company in India?", a: "Yes. A One Person Company (OPC) under Section 2(62) Companies Act 2013 allows a single individual to form a company with limited liability. However, OPCs have restrictions on paid-up capital and turnover, and cannot issue shares to the public or raise VC funding." },
    ],
    relatedBlogs: ["startup-legal-structure-india-guide", "intellectual-property-india-trademark-copyright-patent"],
  },
  {
    slug: "constitutional-law",
    icon: "📜",
    title: "Constitutional Law",
    metaTitle: "Constitutional Law Services — IM & Associates, Agra",
    metaDescription: "Constitutional law services in Agra. Writ petitions, fundamental rights, PIL, judicial review. Legal knowledge on constitutional matters by IM & Associates.",
    heroLaw: "Constitution of India",
    overview: "Constitutional law is the supreme law of India. The Constitution of India came into force on 26 January 1950. It guarantees fundamental rights (Articles 12-35), directive principles of state policy (Articles 36-51), and fundamental duties (Article 51A). The Constitution is the source of all legislative and executive power in India.",
    legislation: ["Constitution of India", "Protection of Human Rights Act 1993", "Prevention of Atrocities Act 1989"],
    courts: ["Supreme Court of India (Article 32)", "Allahabad High Court (Article 226)", "National Human Rights Commission"],
    keyAreas: [
      { heading: "Fundamental Rights", body: "Part III of the Constitution (Articles 12-35) guarantees six categories of fundamental rights: equality, freedom, against exploitation, religious freedom, cultural and educational rights, and constitutional remedies." },
      { heading: "Writ Jurisdiction", body: "Article 226 (High Court) and Article 32 (Supreme Court) allow courts to issue writs — Habeas Corpus, Mandamus, Certiorari, Prohibition, and Quo Warranto — to enforce rights and correct administrative errors." },
      { heading: "Public Interest Litigation", body: "PIL allows any citizen to approach the court on behalf of those whose rights are violated but who cannot access courts. India has one of the most active PIL jurisprudences in the world." },
    ],
    commonScenarios: [
      { scenario: "Government action violates your rights", explanation: "A writ petition under Article 226 (High Court) or Article 32 (Supreme Court) can challenge government action violating fundamental rights." },
      { scenario: "Unlawful detention", explanation: "A Habeas Corpus petition is the immediate remedy for unlawful detention. Courts can order production of the detained person and release if detention is unlawful." },
    ],
    faqs: [
      { q: "Can fundamental rights be suspended during emergency?", a: "Yes, with limitations. During a national emergency under Article 352, fundamental rights under Articles 19, 20, and 21 can be suspended. However, Articles 20 and 21 (protection against arbitrary conviction and right to life) cannot be suspended even during emergency — confirmed by the Supreme Court in ADM Jabalpur v. Shivkant Shukla (1976), though that controversial judgment has since been overruled." },
      { q: "What is the basic structure doctrine?", a: "The basic structure doctrine, established in Kesavananda Bharati v. State of Kerala (1973), holds that certain fundamental features of the Constitution — including democracy, federalism, separation of powers, judicial review, and fundamental rights — cannot be amended or abrogated by Parliament even by a constitutional amendment." },
    ],
    relatedBlogs: ["writ-petition-high-court-india-guide", "right-to-information-rti-india-guide", "rights-of-arrested-person-bnss-2023"],
  },
  {
    slug: "consumer-protection",
    icon: "🛡️",
    title: "Consumer Protection Law",
    metaTitle: "Consumer Protection Law Services — IM & Associates, Agra",
    metaDescription: "Consumer protection services in Agra. Consumer complaints, District Commission, NCDRC, deficiency of service. Legal knowledge on consumer matters by IM & Associates.",
    heroLaw: "CPA 2019",
    overview: "The Consumer Protection Act 2019 is among the most consumer-friendly legislation in India. It establishes a three-tier quasi-judicial system for resolving consumer disputes quickly and inexpensively. Consumers can now file complaints online at edaakhil.nic.in without engaging a lawyer.",
    legislation: ["Consumer Protection Act 2019", "Consumer Protection (E-Commerce) Rules 2020", "Consumer Protection (Mediation) Regulations 2020"],
    courts: ["District Consumer Commission (up to ₹50 lakh)", "State Consumer Commission (₹50 lakh–₹2 crore)", "NCDRC (above ₹2 crore)"],
    keyAreas: [
      { heading: "Deficiency of Service", body: "Any shortcoming in quality, nature, or manner of performance of a service is a 'deficiency' under CPA 2019 — covering banking, insurance, medical, telecom, real estate, education, and e-commerce." },
      { heading: "Defective Products", body: "Products that do not conform to safety standards or have manufacturing defects fall under 'defective goods.' Product liability claims can be made against the manufacturer, seller, or service provider." },
      { heading: "Unfair Trade Practices", body: "Misleading advertisements, false representations about quality or standard, and bait-and-switch sales tactics constitute unfair trade practices actionable under CPA 2019." },
    ],
    commonScenarios: [
      { scenario: "E-commerce purchase not delivered or defective", explanation: "File a complaint under CPA 2019 and the E-Commerce Rules 2020 before the District Consumer Commission or on the National Consumer Helpline (1800-11-4000)." },
      { scenario: "Insurance claim wrongly rejected", explanation: "Insurance company's wrongful rejection of a valid claim is deficiency of service. File before District Consumer Commission — insurance companies are among the most common respondents in consumer courts." },
    ],
    faqs: [
      { q: "Is there a filing fee for consumer complaints?", a: "Yes, but it is nominal. For District Commission: ₹200 for claims up to ₹5 lakh; ₹400 for claims from ₹5 lakh to ₹10 lakh; ₹1,000 for claims from ₹10 lakh to ₹20 lakh; ₹2,000 for claims from ₹20 lakh to ₹50 lakh. BPL cardholders are exempt from fees." },
      { q: "Can a group of consumers file a complaint together?", a: "Yes. Class action complaints can be filed where multiple consumers have the same grievance against the same trader or service provider. The District Collector or any registered consumer association can also file a complaint on behalf of consumers." },
    ],
    relatedBlogs: ["consumer-protection-act-2019-complaint-guide"],
  },
  {
    slug: "startup-law",
    icon: "🚀",
    title: "Startup & Business Law",
    metaTitle: "Startup Business Law Services — IM & Associates, Agra",
    metaDescription: "Startup and business law services in Agra. Company incorporation, shareholder agreements, ESOP, DPIIT registration, IP protection. Legal knowledge for startups by IM & Associates.",
    heroLaw: "Companies Act 2013 · DPIIT",
    overview: "Startup law in India spans entity formation, intellectual property protection, employment law, fundraising documentation, regulatory compliance, and exit planning. The DPIIT Startup India initiative provides significant benefits to registered startups including tax exemptions and fast-track IP processing.",
    legislation: ["Companies Act 2013", "LLP Act 2008", "Income Tax Act 1961 (Section 80-IAC)", "FEMA 1999", "SEBI (AIF) Regulations 2012"],
    courts: ["NCLT", "NCLAT", "SEBI", "High Court"],
    keyAreas: [
      { heading: "Entity Formation", body: "Private Limited Company is the preferred structure for funded startups. LLP suits professional services. OPC for solo founders. Each has different compliance requirements, tax treatment, and funding capabilities." },
      { heading: "Fundraising & Investment Documentation", body: "Funding documentation includes: Term Sheet, Shareholders Agreement, Share Subscription Agreement, Employment Agreements, IP Assignment, ESOP scheme. Correct structuring prevents disputes and protects founders." },
      { heading: "DPIIT Startup India Registration", body: "Registration with DPIIT provides: Section 80-IAC income tax holiday, Angel Tax exemption, 80% rebate on patent fees, and self-certification for 9 labour and environmental laws." },
    ],
    commonScenarios: [
      { scenario: "Founding team disagreement", explanation: "A well-drafted Founders Agreement with vesting schedules, IP assignment clauses, and dispute resolution mechanisms is essential before starting operations." },
      { scenario: "Raising angel funding", explanation: "Angel funding typically involves a Compulsorily Convertible Debenture (CCD) or direct equity round. Documentation requires a Term Sheet, SHA, SSA, and due diligence by the investor." },
    ],
    faqs: [
      { q: "What is the Angel Tax exemption for startups?", a: "Angel Tax (Section 56(2)(viib) Income Tax Act) was levied on the premium received by closely-held companies from investors when shares were issued above fair market value. The Union Budget 2024 abolished Angel Tax entirely effective 1 April 2025 (AY 2025-26), providing major relief to startup fundraising." },
      { q: "What is a vesting schedule and why does it matter?", a: "A vesting schedule determines when founders and employees can claim their equity shares. A typical founders vesting is 4 years with a 1-year cliff — meaning no equity vests in the first year, after which it vests monthly. This protects the company and investors from a founder leaving early and retaining full equity." },
    ],
    relatedBlogs: ["startup-legal-structure-india-guide", "intellectual-property-india-trademark-copyright-patent"],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}

export function getAllPracticeAreaSlugs(): string[] {
  return practiceAreas.map((p) => p.slug);
}
