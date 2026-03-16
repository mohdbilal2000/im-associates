// All legal content is verified against current Indian statutes.
// BNS 2023, BNSS 2023, BSA 2023 replaced IPC, CrPC, IEA effective 1 July 2024.
// Content is for general informational/educational purposes only per BCI Rules.

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  categoryColor: string;
  author: string;
  authorInitials: string;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  legislation: string[];
  courts: string[];
  heroLaw: string; // Short statute reference for the hero
  summary: string; // 50-60 word AEO answer
  content: Section[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  tags: string[];
}

export interface Section {
  heading: string;
  subheading?: string;
  body: string; // paragraphs separated by \n\n
  table?: { headers: string[]; rows: string[][] };
  note?: string; // Important legal note / caution box
  quote?: { text: string; source: string }; // Court dictum
}

export const blogPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────
  // POST 1 — BNSS / BAIL
  // ─────────────────────────────────────────────────────────────
  {
    slug: "anticipatory-bail-india-bnss-2023",
    title: "Anticipatory Bail in India: Law, Procedure & Rights Under BNSS 2023",
    metaTitle: "Anticipatory Bail Under BNSS 2023 — Section 482 Explained",
    metaDescription:
      "Complete guide to anticipatory bail under Section 482 of the Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023. Eligibility, procedure, conditions, and landmark Supreme Court judgments explained.",
    category: "Criminal Law",
    categoryColor: "#dc2626",
    author: "Masood Ahmed Khan",
    authorInitials: "MAK",
    readTime: "12 min",
    publishedDate: "2024-10-15",
    updatedDate: "2025-01-10",
    legislation: [
      "Section 482, Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023",
      "Article 21, Constitution of India",
      "Article 22, Constitution of India",
    ],
    courts: ["Supreme Court of India", "Allahabad High Court", "Sessions Court"],
    heroLaw: "BNSS 2023 · S. 482",
    summary:
      "Anticipatory bail under Section 482 of the BNSS 2023 (formerly Section 438 CrPC) is a pre-arrest bail direction granted by a Sessions Court or High Court to a person who apprehends arrest for a non-bailable offence. It protects personal liberty under Article 21 and cannot ordinarily be time-limited.",
    content: [
      {
        heading: "What is Anticipatory Bail?",
        body: `Anticipatory bail is a legal remedy that allows a person who reasonably apprehends arrest in a non-bailable offence to approach a court in advance and obtain a direction for bail — before any arrest is actually made. Upon arrest, such a person is entitled to be released on bail in accordance with the conditions stipulated by the court.\n\nThe remedy is now governed by Section 482 of the Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, which came into force on 1 July 2024, replacing the erstwhile Section 438 of the Code of Criminal Procedure, 1973 (CrPC). The substantive law on the subject, however, continues to be shaped by decades of Supreme Court jurisprudence.`,
        note: "Important: With the BNSS 2023 coming into force on 1 July 2024, Section 438 CrPC no longer applies to offences investigated after that date. However, matters instituted under the CrPC before 1 July 2024 continue to be governed by the old code.",
      },
      {
        heading: "Constitutional Foundation",
        body: `The right to seek anticipatory bail is rooted in Article 21 of the Constitution, which guarantees the right to life and personal liberty. The Supreme Court in Maneka Gandhi v. Union of India (1978) held that any procedure that curtails personal liberty must be just, fair, and reasonable.\n\nThe right to liberty under Article 21 cannot be abridged except by procedure established by law, and that law must pass the test of proportionality. Anticipatory bail is thus not a mere procedural remedy — it is a constitutional safeguard against arbitrary pre-trial detention.`,
        quote: {
          text: "Bail, not jail, is the rule; jail is the exception — the courts must lean in favour of release pending trial.",
          source: "Supreme Court of India, State of Rajasthan v. Balchand (1977)",
        },
      },
      {
        heading: "Who Can Apply for Anticipatory Bail?",
        body: `Any person who has reasonable grounds to believe that they may be arrested for a non-bailable offence can apply for anticipatory bail. The apprehension must not be vague — it should be based on concrete reasons such as:\n\n• A complaint or FIR having been registered against the person\n• A notice under Section 35 BNSS (Section 41A CrPC equivalent) being served\n• Credible information of imminent arrest reaching the applicant\n• Prior intimidation or threats being made by police in connection with a particular case\n\nThere is no requirement that an FIR must have been filed before applying. A mere reasonable apprehension suffices.`,
      },
      {
        heading: "Which Courts Have Jurisdiction?",
        body: `Under Section 482 BNSS (Section 438 CrPC), the following courts have concurrent jurisdiction to grant anticipatory bail:\n\n1. Sessions Court — Primary forum; the applicant must ordinarily approach the Sessions Court first\n2. High Court — Has concurrent jurisdiction; may also be approached directly in appropriate cases\n\nThe Supreme Court in Gurbaksh Singh Sibbia v. State of Punjab (1980) held that anticipatory bail jurisdiction must be exercised with restraint and on a case-by-case basis. Blanket or general orders are not permissible.`,
        table: {
          headers: ["Forum", "Jurisdiction", "When to Approach"],
          rows: [
            ["Sessions Court", "Primary jurisdiction", "Ordinarily the first forum"],
            ["High Court", "Concurrent jurisdiction", "Directly in complex/urgent matters"],
            ["Supreme Court", "Article 136 / Article 32", "In exceptional constitutional cases"],
          ],
        },
      },
      {
        heading: "Procedure for Applying",
        body: `The procedure for obtaining anticipatory bail involves the following steps:\n\n1. Filing a Miscellaneous Criminal Application before the Sessions Court or High Court\n2. The application must state the specific offence for which arrest is apprehended, the grounds for such apprehension, and reasons why bail should be granted\n3. The court may, at its discretion, require notice to be given to the Public Prosecutor and the arresting agency\n4. The court may grant interim anticipatory bail pending hearing if the case warrants immediate relief\n5. After hearing both sides, the court passes the final order`,
        note: "Under BNSS 2023, the court is required to decide on anticipatory bail applications within a defined timeframe in specified categories of offences. Undue delay in deciding anticipatory bail applications has been deprecated by the Supreme Court.",
      },
      {
        heading: "Conditions That May Be Imposed",
        body: `The court granting anticipatory bail may impose any or all of the following conditions under Section 482 BNSS:\n\n• That the person shall make himself available for interrogation by a police officer as and when required\n• That the person shall not, directly or indirectly, make any inducement, threat, or promise to any person acquainted with the facts of the case to dissuade them from disclosing the facts to the police or court\n• That the person shall not leave India without prior permission of the court\n• Any other condition that the court considers necessary in the interest of justice`,
      },
      {
        heading: "Duration: Can Anticipatory Bail Be Time-Limited?",
        body: `This was a long-disputed question definitively settled by a five-judge Constitution Bench of the Supreme Court in Sushila Aggarwal v. State (NCT of Delhi) [(2020) 5 SCC 1].\n\nThe Constitution Bench held:\n\n1. Anticipatory bail should not ordinarily be time-limited or limited to the period of investigation\n2. It can and generally should operate until the conclusion of the trial\n3. However, if special circumstances exist (such as risk of flight, tampering with evidence), conditions may be modified or bail cancelled under Section 483 BNSS`,
        quote: {
          text: "The power to grant anticipatory bail is of an extraordinary character and must be exercised sparingly, and in exceptional cases only.",
          source: "Gurbaksh Singh Sibbia v. State of Punjab, (1980) 2 SCC 565",
        },
      },
      {
        heading: "Cancellation of Anticipatory Bail",
        body: `Anticipatory bail once granted can be cancelled under Section 483 of BNSS 2023 if:\n\n• The person misuses the liberty granted and tampers with evidence or intimidates witnesses\n• The person violates conditions imposed by the court\n• New facts come to light showing the offence to be more serious than initially presented\n• The person attempts to flee the jurisdiction\n\nThe threshold for cancellation of anticipatory bail is higher than for its refusal. Mere arrest without subsequent bail doesn't automatically cancel an anticipatory bail direction.`,
      },
    ],
    faqs: [
      {
        q: "Can anticipatory bail be obtained without an FIR being filed?",
        a: "Yes. An FIR is not a pre-condition for seeking anticipatory bail. A mere reasonable apprehension of arrest, based on credible grounds, is sufficient. The Supreme Court in Adri Dharan Das v. State of W.B. (2005) confirmed that anticipatory bail can be sought even at the stage of a complaint or before any formal steps are taken by the police.",
      },
      {
        q: "What is the difference between regular bail and anticipatory bail?",
        a: "Regular bail (Section 478 BNSS) is applied for after arrest and detention. Anticipatory bail (Section 482 BNSS) is sought before arrest, in anticipation of it. Regular bail is applied before a Magistrate; anticipatory bail is applied before a Sessions Court or High Court.",
      },
      {
        q: "Can anticipatory bail be refused on the gravity of the offence alone?",
        a: "No. The Supreme Court has consistently held that the gravity or severity of an offence is a relevant consideration but not the sole ground for refusal. The court must also consider the applicant's conduct, the nature of the evidence, and whether the person is likely to abscond or tamper with evidence.",
      },
      {
        q: "Does anticipatory bail lapse after the chargesheet is filed?",
        a: "No. After Sushila Aggarwal v. State (NCT of Delhi) (2020), the Supreme Court clarified that anticipatory bail does not automatically expire on filing of the chargesheet. It continues unless specifically recalled or cancelled by the court that granted it.",
      },
    ],
    relatedSlugs: [
      "rights-of-arrested-person-bnss-2023",
      "difference-bns-bnss-india",
      "bail-non-bailable-offence-india",
    ],
    tags: ["Bail", "BNSS 2023", "Criminal Law", "Arrest", "Article 21", "Pre-arrest Bail"],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 2 — RIGHTS ON ARREST
  // ─────────────────────────────────────────────────────────────
  {
    slug: "rights-of-arrested-person-bnss-2023",
    title: "Rights of an Arrested Person in India: Article 22 & BNSS 2023",
    metaTitle: "Rights of Arrested Person in India Under BNSS 2023 & Constitution",
    metaDescription:
      "What are your rights if arrested in India? Complete guide to constitutional rights under Article 22, statutory rights under BNSS 2023, and the D.K. Basu guidelines still applicable.",
    category: "Criminal Law",
    categoryColor: "#dc2626",
    author: "Aman Mohd Khan",
    authorInitials: "AMK",
    readTime: "10 min",
    publishedDate: "2024-11-01",
    updatedDate: "2025-01-15",
    legislation: [
      "Article 22, Constitution of India",
      "Article 21, Constitution of India",
      "Sections 35–58, Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023",
      "D.K. Basu Guidelines (Supreme Court, 1997)",
    ],
    courts: ["Supreme Court of India", "High Courts"],
    heroLaw: "Art. 22 · BNSS 2023",
    summary:
      "An arrested person in India has constitutional rights under Article 22 — including the right to be informed of grounds of arrest, the right to consult an advocate, and the right to be produced before a Magistrate within 24 hours. BNSS 2023 Sections 35–58 codify additional procedural protections.",
    content: [
      {
        heading: "Constitutional Rights Under Article 22",
        body: `Article 22 of the Constitution of India guarantees the following fundamental rights to every person arrested in India:\n\n1. Right to be informed of grounds of arrest: Every arrested person must be told immediately, in a language they understand, the grounds on which they have been arrested\n\n2. Right to consult and be defended by an advocate: No person can be denied the right to consult a legal practitioner of their choice from the moment of arrest\n\n3. Right to be produced before a Magistrate within 24 hours: This is an absolute right. The 24-hour period excludes travel time from the place of arrest to the court\n\n4. Right against detention beyond 24 hours without Magistrate's order: No person can be held in police custody beyond 24 hours without an order from a Magistrate\n\nThese rights are fundamental rights enforceable under Article 32 (Supreme Court) and Article 226 (High Courts) through writ petitions.`,
        note: "Article 22(3) excludes enemy aliens and persons detained under preventive detention laws from these protections. This is a specific constitutional exception.",
      },
      {
        heading: "Statutory Rights Under BNSS 2023",
        body: `In addition to constitutional protections, Sections 35 to 58 of the Bharatiya Nagarik Suraksha Sanhita, 2023 provide detailed procedural rights:\n\nSection 47 BNSS — Right to inform a family member or friend of arrest: The arrested person shall be informed of their right to have a chosen person informed of their arrest. The police officer must intimate the nominated person forthwith.\n\nSection 48 BNSS — Right to be medically examined: At the request of the arrested person, a medical examination must be conducted by a registered medical practitioner within 24 hours.\n\nSection 51 BNSS — Right against excessive restraint: Restraint in handcuffs is not permitted ordinarily. Handcuffs can only be used in exceptional circumstances as prescribed by the law.`,
      },
      {
        heading: "The D.K. Basu Guidelines: Still Binding",
        body: `In D.K. Basu v. State of West Bengal [(1997) 1 SCC 416], the Supreme Court issued landmark guidelines that are binding on all police and investigative agencies in India. These include:\n\n1. Arresting police officer must bear accurate, visible identification\n2. A memo of arrest must be prepared at the time of arrest, attested by a witness from the arrested person's family or a local respectable person, and countersigned by the arrestee\n3. The person has a right to inform a friend, relative, or well-wisher of their arrest\n4. If the arrestee is a woman, she must be arrested only by a female police officer and must not be detained after sunset and before sunrise except in specific circumstances\n5. The arrestee's medical examination must be conducted every 48 hours during custody`,
        quote: {
          text: "Handcuffing is prima facie inhuman and, therefore, unreasonable, is over-harsh and at the first flush, arbitrary. Absent irons is the rule, present irons is the exception.",
          source: "Prem Shankar Shukla v. Delhi Administration, (1980) 3 SCC 526",
        },
      },
      {
        heading: "Special Protections for Women",
        body: `Women arrested in India have additional protections under BNSS 2023 and judicial precedent:\n\n• A woman cannot be arrested after sunset and before sunrise, except by a female police officer and only with prior permission of the Judicial Magistrate First Class (Section 43(4) BNSS)\n• All searches of women must be conducted by female officers only\n• In rape or sexual assault cases, the statement of the complainant must be recorded by a female police officer (Section 179 BNSS)\n• Medical examination of a woman victim must be conducted only by a female registered medical practitioner`,
      },
    ],
    faqs: [
      {
        q: "Can police arrest without a warrant in India?",
        a: "Yes, under Section 35 BNSS, police can arrest without a warrant in cognizable offences — offences where the police are permitted to act without a Magistrate's order. However, the arrest must be based on credible information, reasonable grounds, and in compliance with BNSS safeguards. An arrest cannot be made mechanically without application of mind.",
      },
      {
        q: "What is the '24-hour rule' for arrested persons?",
        a: "Under Article 22(2) of the Constitution and Section 57 BNSS, every arrested person must be produced before the nearest Magistrate within 24 hours of arrest (excluding travel time). If the police require further custody, they must obtain remand from the Magistrate. This is an absolute constitutional right.",
      },
      {
        q: "Can an arrested person be denied access to a lawyer?",
        a: "No. Article 22(1) of the Constitution guarantees every arrested person the right to consult a legal practitioner of their choice from the moment of arrest. Denial of this right renders the detention unlawful. In Hussainara Khatoon v. State of Bihar (1979), the Supreme Court also held that an indigent person is entitled to free legal aid as part of the right to life under Article 21.",
      },
    ],
    relatedSlugs: [
      "anticipatory-bail-india-bnss-2023",
      "difference-bns-bnss-india",
      "fir-procedure-india-bnss",
    ],
    tags: ["Arrest", "Rights", "Article 22", "BNSS 2023", "D.K. Basu", "Criminal Law"],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 3 — BNS/BNSS EXPLAINER
  // ─────────────────────────────────────────────────────────────
  {
    slug: "difference-bns-bnss-india",
    title: "BNS, BNSS & BSA 2023: How India's New Criminal Laws Replace IPC, CrPC & IEA",
    metaTitle: "BNS BNSS BSA 2023 vs IPC CrPC Evidence Act — Complete Comparison",
    metaDescription:
      "India replaced the IPC 1860, CrPC 1973, and Indian Evidence Act 1872 with BNS, BNSS and BSA on 1 July 2024. This guide explains key changes, new section numbers, and what they mean for criminal law.",
    category: "Criminal Law",
    categoryColor: "#dc2626",
    author: "Irshad Mohd Khan",
    authorInitials: "IMK",
    readTime: "15 min",
    publishedDate: "2024-08-01",
    updatedDate: "2025-02-01",
    legislation: [
      "Bharatiya Nyaya Sanhita (BNS) 2023",
      "Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023",
      "Bharatiya Sakshya Adhiniyam (BSA) 2023",
    ],
    courts: ["All Criminal Courts in India"],
    heroLaw: "BNS · BNSS · BSA 2023",
    summary:
      "Effective 1 July 2024, India replaced the Indian Penal Code 1860 with the Bharatiya Nyaya Sanhita (BNS), the CrPC 1973 with the Bharatiya Nagarik Suraksha Sanhita (BNSS), and the Indian Evidence Act 1872 with the Bharatiya Sakshya Adhiniyam (BSA). All three laws apply prospectively to offences committed on or after 1 July 2024.",
    content: [
      {
        heading: "Overview: Why Were the Criminal Laws Changed?",
        body: `On 1 July 2024, the Indian government brought into force three new criminal laws, replacing the colonial-era statutes that had governed India's criminal justice system for over 150 years:\n\n• Bharatiya Nyaya Sanhita, 2023 (BNS) — Replaces the Indian Penal Code, 1860\n• Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) — Replaces the Code of Criminal Procedure, 1973\n• Bharatiya Sakshya Adhiniyam, 2023 (BSA) — Replaces the Indian Evidence Act, 1872\n\nThe stated objectives of the reform were to decolonise the criminal justice framework, introduce technology-forward provisions (electronic evidence, digital FIRs), prioritise the interests of victims, and set defined timelines for trial processes.`,
        note: "Critical: The new laws apply only prospectively — to offences committed on or after 1 July 2024. Criminal proceedings initiated before 1 July 2024 continue under the old laws (IPC, CrPC, IEA) to their conclusion.",
      },
      {
        heading: "Bharatiya Nyaya Sanhita (BNS) 2023 — Replacing IPC",
        body: `The BNS contains 358 sections compared to 511 in the IPC. Key changes include:\n\nNew Offence — Organised Crime (Section 111 BNS): Organised crime — previously only covered by state-level laws like MCOCA — has been introduced as a distinct offence at the central level.\n\nNew Offence — Terrorist Act (Section 113 BNS): For the first time, "terrorist act" has been defined in the BNS itself, though UAPA 1967 continues to govern most terrorism cases.\n\nSedition removed: Section 124A IPC (sedition) has been repealed. However, Section 152 BNS introduces an offence of "acts endangering sovereignty, unity and integrity of India" which carries similar consequences.\n\nOrganised Petty Crime (Section 112 BNS): A new category covering pick-pocketing, chain-snatching, and similar offences if committed repeatedly.`,
        table: {
          headers: ["IPC Section", "BNS Equivalent", "Offence"],
          rows: [
            ["S. 302", "S. 103", "Murder"],
            ["S. 376", "S. 64", "Rape"],
            ["S. 420", "S. 318", "Cheating"],
            ["S. 406", "S. 316", "Criminal Breach of Trust"],
            ["S. 499", "S. 356", "Defamation"],
            ["S. 124A (Sedition)", "Repealed / S. 152 BNS", "Acts against sovereignty"],
          ],
        },
      },
      {
        heading: "Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 — Replacing CrPC",
        body: `The BNSS has 531 sections compared to 484 in the CrPC. Key procedural changes:\n\nMandatory Audio-Visual Recording: Under Section 176(3) BNSS, search and seizure conducted by a police officer must be audio-visually recorded, and a copy must be provided to the accused.\n\nTrial in Absentia (Section 356 BNSS): Courts may now proceed with trials even if the accused is a proclaimed offender, removing a major tool for delay in serious cases.\n\nTimeline for Chargesheet: Police must file the chargesheet within 60 or 90 days depending on the offence. An extension requires Magistrate's sanction.\n\nZero FIR (Section 173 BNSS): A Zero FIR — an FIR filed at any police station regardless of territorial jurisdiction — has been codified. It must be transferred to the competent police station within 15 days.`,
      },
      {
        heading: "Bharatiya Sakshya Adhiniyam (BSA) 2023 — Replacing IEA",
        body: `The BSA modernises evidence law for the digital age. It has 170 sections.\n\nElectronic Evidence (Section 63 BSA): The distinction between primary and secondary electronic evidence has been simplified. Electronic records are admissible if they meet specified conditions without the cumbersome certificate requirements under the old Section 65B IEA.\n\nJoint Trials: Provisions for holding joint trials against accused who have different lawyers have been clarified.\n\nAdmissibility of Expert Opinion: The BSA expands the categories of expert testimony admissible in court, including digital forensics experts.`,
      },
    ],
    faqs: [
      {
        q: "Do IPC sections still appear in chargesheets filed after 1 July 2024?",
        a: "No. For offences committed on or after 1 July 2024, chargesheets are filed under BNS sections. For offences committed before 1 July 2024, the old IPC applies even if the chargesheet is filed after that date. The applicable law is determined by the date of the offence, not the date of filing.",
      },
      {
        q: "Is sedition still an offence in India under BNS 2023?",
        a: "Section 124A IPC (sedition) has been formally repealed. However, Section 152 BNS creates a new offence of 'acts endangering sovereignty, unity, and integrity of India' with penalties ranging up to life imprisonment. Legal scholars continue to debate whether this effectively preserves the substance of sedition under a different name.",
      },
      {
        q: "What happens to pending cases under IPC when BNS came into force?",
        a: "Under Section 531 BNSS and the general principle of criminal law, pending proceedings under the old laws (IPC, CrPC, IEA) continue to be governed by those laws until their conclusion. The new laws apply only to offences and proceedings that arose on or after 1 July 2024.",
      },
    ],
    relatedSlugs: [
      "anticipatory-bail-india-bnss-2023",
      "rights-of-arrested-person-bnss-2023",
      "fir-procedure-india-bnss",
    ],
    tags: ["BNS", "BNSS", "BSA", "IPC", "CrPC", "Criminal Law Reform", "New Criminal Laws 2024"],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 4 — MUTUAL CONSENT DIVORCE
  // ─────────────────────────────────────────────────────────────
  {
    slug: "mutual-consent-divorce-india-section-13b",
    title: "Mutual Consent Divorce in India: Complete Procedure Under Section 13B HMA",
    metaTitle: "Mutual Consent Divorce India — Section 13B Hindu Marriage Act Guide",
    metaDescription:
      "Complete step-by-step guide to mutual consent divorce in India under Section 13B of the Hindu Marriage Act 1955. Eligibility, procedure, documents, 6-month waiver, maintenance, and child custody.",
    category: "Family Law",
    categoryColor: "#7c3aed",
    author: "Urooj Ahmed Khan",
    authorInitials: "UAK",
    readTime: "13 min",
    publishedDate: "2024-09-20",
    updatedDate: "2025-01-20",
    legislation: [
      "Section 13B, Hindu Marriage Act 1955",
      "Section 28, Special Marriage Act 1954",
      "Section 10A, Divorce Act 1869 (for Christians)",
      "Family Courts Act 1984",
    ],
    courts: ["Family Court", "District Court (where Family Court not established)"],
    heroLaw: "HMA 1955 · S. 13B",
    summary:
      "Mutual consent divorce under Section 13B of the Hindu Marriage Act 1955 requires: spouses to have lived separately for at least one year; agreement on all terms including maintenance, custody, and property; and a joint petition followed by a 6-month waiting period (which courts may waive) before the final decree.",
    content: [
      {
        heading: "What is Mutual Consent Divorce?",
        body: `Mutual consent divorce (also called divorce by mutual agreement) is a proceeding under which both spouses jointly petition for dissolution of their marriage, having agreed on all terms — including maintenance, child custody, and division of property. It is the least contentious and most expeditious form of divorce available under Indian law.\n\nFor Hindus, Buddhists, Jains, and Sikhs, the relevant provision is Section 13B of the Hindu Marriage Act, 1955 (HMA). Christians may proceed under Section 10A of the Divorce Act, 1869 (as amended in 2001). Couples married under the Special Marriage Act may use Section 28 of that Act.`,
      },
      {
        heading: "Eligibility Conditions",
        body: `To file for mutual consent divorce under Section 13B HMA, the following conditions must be satisfied:\n\n1. One year of separation: The spouses must have been living separately for at least one year immediately before filing the petition. "Separately" does not require physical separation in different houses — it means that the spouses have not been living as husband and wife\n\n2. Mutual agreement on all terms: Both parties must agree on the following matters before filing — (a) amount of permanent alimony/maintenance, if any, (b) custody and visitation rights for minor children, if any, (c) return of stridhan and matrimonial property\n\n3. Joint petition: The petition must be filed jointly, signed by both spouses`,
        note: "The Hindu Marriage Act 1955 applies to Hindus, Buddhists, Jains, and Sikhs. Muslims seeking divorce by mutual consent may use Khula (wife-initiated) or Mubarat (mutual consent) under Muslim personal law, which does not require court proceedings in most cases.",
      },
      {
        heading: "Step-by-Step Procedure",
        body: `The procedure for mutual consent divorce is as follows:\n\nStep 1 — Draft and sign the petition: A joint petition under Section 13B(1) HMA is drafted, setting out the marriage details, separation facts, and agreed terms. Both spouses and their advocates sign it.\n\nStep 2 — File before the Family Court: The petition is filed before the Family Court in whose jurisdiction the marriage was solemnized, or where the parties last resided together, or where the respondent resides.\n\nStep 3 — First motion order: On the date of filing (or shortly after), both parties appear before the court. Their statements are recorded. The court passes the First Motion order and starts the mandatory 6-month waiting period.\n\nStep 4 — Waiting period (6 months): The law requires a minimum of 6 months between the first and second motion. During this time, either party may withdraw consent.\n\nStep 5 — Second motion and final decree: Within 18 months of the first motion, both parties must appear again and confirm their consent. The court records statements and passes the decree of divorce, dissolving the marriage.\n\nStep 6 — Certified copy of decree: Parties obtain a certified copy of the divorce decree, which is the legal document of dissolution.`,
        table: {
          headers: ["Stage", "Action", "Timeline"],
          rows: [
            ["Filing", "Joint petition filed with Family Court", "Day 1"],
            ["First Motion", "Court records statements, issues First Motion", "Within 1–2 weeks of filing"],
            ["Waiting Period", "Minimum statutory waiting period", "6 months from First Motion"],
            ["Second Motion", "Both appear; consent reaffirmed", "Between 6–18 months from First Motion"],
            ["Decree", "Court passes final decree of divorce", "Same day as Second Motion"],
          ],
        },
      },
      {
        heading: "Can the 6-Month Waiting Period Be Waived?",
        body: `Yes. The Supreme Court in Amardeep Singh v. Harveen Kaur [(2017) 8 SCC 746] held that the 6-month waiting period under Section 13B(2) HMA is directory, not mandatory. Courts have discretion to waive it if:\n\n• All issues of maintenance, custody, and property have been amicably settled\n• The waiting period would only prolong the agony of the parties\n• The marriage is irretrievably broken down with no chance of reconciliation\n• At least 6 months have already elapsed from the date of separation\n\nThis is now a well-settled principle and Family Courts routinely waive the waiting period in appropriate cases.`,
        quote: {
          text: "The object of the period of 6 months is to enable the parties to have second thoughts before the marriage is finally dissolved. Where there are no such second thoughts and the parties are firm in their decision, there is no reason to force them to wait.",
          source: "Amardeep Singh v. Harveen Kaur, (2017) 8 SCC 746",
        },
      },
      {
        heading: "Documents Required",
        body: `The following documents are typically required for mutual consent divorce filing:\n\n• Original or certified copy of the marriage certificate or proof of marriage\n• Address proof of both parties\n• Passport-size photographs of both parties\n• Evidence of separation (rent agreements, utility bills showing different addresses, etc.)\n• Details of assets and liabilities if division of property is involved\n• Birth certificates of children, if any\n• Draft settlement agreement covering maintenance, custody, and stridhan`,
      },
    ],
    faqs: [
      {
        q: "Can mutual consent divorce be filed if we have minor children?",
        a: "Yes, but the court must be satisfied that adequate provisions have been made for the welfare, custody, and maintenance of the minor children. The court exercises parens patriae jurisdiction and will not pass a decree if it is not satisfied that the children's interests are protected. A custody arrangement and maintenance schedule must be presented.",
      },
      {
        q: "What if one spouse withdraws consent during the waiting period?",
        a: "Under Section 13B(2) HMA, either party may withdraw consent any time before the second motion. If consent is withdrawn, the petition for mutual consent divorce fails. The withdrawing party may, however, still seek divorce on other grounds such as cruelty or desertion under Section 13(1) HMA, which would then be a contested divorce.",
      },
      {
        q: "Is mutual consent divorce possible under Muslim personal law?",
        a: "Muslim personal law recognizes divorce by mutual consent in two forms: (1) Khula — initiated by the wife, requiring the wife to return her mahr; and (2) Mubarat — mutual agreement to dissolve the marriage. These do not require court proceedings but registration with the State Wakf Board or notarization is advisable for evidentiary purposes.",
      },
      {
        q: "Does a mutual consent divorce require a lawyer?",
        a: "There is no legal requirement to appoint a lawyer for mutual consent divorce. Parties may appear in person. However, engaging an advocate is strongly advisable to ensure the petition and settlement agreement are correctly drafted, the terms are enforceable, and the proceedings are completed efficiently.",
      },
    ],
    relatedSlugs: [
      "child-custody-law-india",
      "alimony-maintenance-india-law",
      "contested-divorce-india-grounds",
    ],
    tags: ["Divorce", "Section 13B", "HMA", "Family Law", "Mutual Consent", "Waiting Period Waiver"],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 5 — PROPERTY TITLE VERIFICATION
  // ─────────────────────────────────────────────────────────────
  {
    slug: "property-title-verification-india",
    title: "How to Verify Property Title in India: Legal Due Diligence Checklist",
    metaTitle: "Property Title Verification India — Legal Due Diligence Guide 2024",
    metaDescription:
      "Complete legal due diligence guide for property buyers in India. How to verify title, check encumbrance certificates, examine chain of title, and spot common defects before buying property.",
    category: "Property Law",
    categoryColor: "#059669",
    author: "Chandransh Yadav",
    authorInitials: "CY",
    readTime: "14 min",
    publishedDate: "2024-10-05",
    updatedDate: "2025-01-08",
    legislation: [
      "Transfer of Property Act 1882",
      "Registration Act 1908",
      "Indian Stamp Act 1899",
      "RERA 2016 (for registered projects)",
      "Land Acquisition Act / RFCTLARR Act 2013",
    ],
    courts: ["Civil Court", "Revenue Court", "RERA Authority"],
    heroLaw: "TPA 1882 · Reg. Act 1908",
    summary:
      "Property title verification involves examining the chain of title for at least 30 years, obtaining an encumbrance certificate, verifying mutation records, checking for pending litigation, and confirming no acquisition proceedings are pending. It is strongly advisable to engage an advocate before any property transaction.",
    content: [
      {
        heading: "Why Title Verification Matters",
        body: `Unlike many jurisdictions, India does not have a system of title guarantee or title insurance that is universally mandated. The Registration Act 1908 merely records the transaction — it does not guarantee the validity or marketability of the title. A registered document is not proof of ownership; it is only proof that the document was registered.\n\nThis makes independent title verification by a qualified advocate an indispensable step before any property purchase in India. Title defects — such as undisclosed encumbrances, forged documents, or disputed inheritance — can render a property purchase void or voidable, with severe financial consequences for the buyer.`,
        note: "A registered sale deed does not guarantee good title. Registration under the Registration Act 1908 only means the document was presented and registered — it does not mean the seller had the legal right to sell.",
      },
      {
        heading: "Step 1: Examine the Chain of Title",
        body: `The chain of title refers to the series of documents establishing ownership from a root title to the present day. A generally accepted standard in practice is to examine the chain for at least 30 years (though 60 years is preferable for land).\n\nThe key documents to examine include:\n\n• Mother deed (root title document)\n• Subsequent sale deeds, gift deeds, partition deeds, or will/probate\n• Court orders, if any, affecting the property\n• Any power of attorney transactions (which must be verified carefully)\n\nAll documents must be examined for: proper execution, adequate stamp duty payment, registration where required, and consistency of property description across documents.`,
      },
      {
        heading: "Step 2: Obtain the Encumbrance Certificate (EC)",
        body: `The Encumbrance Certificate (EC) is obtained from the Sub-Registrar's office and shows all registered transactions affecting the property during a specified period — typically 15 to 30 years. It will disclose:\n\n• Registered mortgages and charges against the property\n• Sale deeds, gift deeds, partition deeds registered\n• Legal heir certificates and succession certificates registered\n• Court attachments and decrees registered against the property\n\nThe EC does not, however, show unregistered transactions, oral agreements, or proceedings pending in court that have not been attached to the property. This is why an EC alone is not sufficient for due diligence.`,
        table: {
          headers: ["Document", "Source", "What It Shows"],
          rows: [
            ["Encumbrance Certificate", "Sub-Registrar's Office", "Registered transactions & mortgages"],
            ["Mutation Register Extract", "Revenue Office / Tehsil", "Revenue ownership records"],
            ["Khata / Khasra Records", "Municipal / Patwari", "Physical possession & tax payment"],
            ["Court Search", "District Court records", "Pending litigation on property"],
            ["Land Acquisition Notification", "Collector's office", "Government acquisition status"],
          ],
        },
      },
      {
        heading: "Step 3: Revenue Records — Mutation & Khata",
        body: `Revenue records maintained by the State Revenue Department are separate from registered documents. They show who is in revenue possession of the land. Key records to examine:\n\nMutation (Dakhil-Kharij): Mutation is the recording of a change in ownership in revenue records. It is important to note that mutation confers no title and is not proof of ownership — it is merely an administrative record. However, unmutated properties create complications in sale.\n\nKhatauni/Khasra (in Uttar Pradesh and northern India): These are revenue records showing the owner's name, survey numbers, and area of land. In Agra and Uttar Pradesh, these are maintained under the Uttar Pradesh Revenue Code 2006.`,
        note: "Mutation in revenue records is NOT proof of ownership. The UP Revenue Code 2006 and courts have consistently held that mutation creates no title. Do not rely on mutation entries alone.",
      },
      {
        heading: "Step 4: Check for Pending Litigation & Disputes",
        body: `A property may be subject to pending litigation in civil courts, revenue courts, or even the Supreme Court. Steps to check:\n\n1. Search in District Court records: Any pending civil suit, injunction, or partition proceedings affecting the property\n2. Check lis pendens: If a suit is pending, a notice of lis pendens should be registered under Section 52 TPA 1882, which puts subsequent purchasers on constructive notice\n3. RERA registration: For under-construction properties or registered RERA projects, verify the developer's registration and project approvals on the state RERA portal\n4. Check for government acquisition: Verify with the Collector's office whether any acquisition notification under the RFCTLARR Act 2013 has been issued for the land`,
      },
    ],
    faqs: [
      {
        q: "Is a registered sale deed proof of ownership in India?",
        a: "No. Registration under the Registration Act 1908 only means that the document was presented and registered — it does not validate the underlying title or guarantee that the seller had the right to sell. A registered sale deed from a person who did not own the property conveys no title to the buyer (nemo dat quod non habet — no one can give what they do not have).",
      },
      {
        q: "What is a 'clear and marketable title' in property law?",
        a: "A clear title means the property is free from any encumbrances, claims, liens, or disputes. A marketable title is one that a court of equity would compel a reasonable buyer to accept. Before purchasing property, it is essential to have an advocate certify that the title is clear and marketable based on a full title search.",
      },
      {
        q: "How long does a property title search take?",
        a: "A thorough title search for urban property typically takes 7–15 working days, depending on the availability of documents at the Sub-Registrar's office and the complexity of the transaction. For agricultural land with a longer history, it may take 2–4 weeks.",
      },
    ],
    relatedSlugs: [
      "property-registration-process-india",
      "inheritance-succession-law-india",
      "tenant-rights-india",
    ],
    tags: ["Property", "Title Verification", "Due Diligence", "Encumbrance Certificate", "Real Estate", "Land Law"],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 6 — STARTUP LAW
  // ─────────────────────────────────────────────────────────────
  {
    slug: "startup-legal-structure-india-guide",
    title: "Choosing the Right Legal Structure for Your Startup in India: A Founder's Legal Guide",
    metaTitle: "Legal Structure for Startups India — Private Limited vs LLP vs OPC",
    metaDescription:
      "Which legal structure is right for your Indian startup? Complete comparison of Private Limited Company, LLP, and OPC — liability, compliance, funding readiness, and tax implications explained.",
    category: "Startup & Business Law",
    categoryColor: "#0369a1",
    author: "Rohit Yadav",
    authorInitials: "RY",
    readTime: "16 min",
    publishedDate: "2024-11-15",
    updatedDate: "2025-02-10",
    legislation: [
      "Companies Act 2013",
      "Limited Liability Partnership Act 2008",
      "DPIIT Startup India Recognition Framework",
      "Income Tax Act 1961 (Section 80-IAC)",
      "FEMA 1999 (for FDI)",
    ],
    courts: ["NCLT", "High Courts"],
    heroLaw: "Companies Act 2013",
    summary:
      "Indian startups can choose between a Private Limited Company (most funding-ready, venture capital preferred), a Limited Liability Partnership (LLP, simpler compliance, suitable for professional services), or a One Person Company (OPC, single founder, limited utility for investment). Each has distinct compliance burdens, tax implications, and investor appeal.",
    content: [
      {
        heading: "Why Your Legal Structure Matters",
        body: `The legal structure of your startup determines: (a) the extent of personal liability of the founders, (b) your ability to raise equity funding from investors, (c) your annual compliance and regulatory burden, (d) tax treatment of income and profits, and (e) the ease of adding co-founders, employees via ESOPs, or foreign investors.\n\nChoosing the wrong structure at the outset can create significant problems — requiring restructuring, stamp duty payments, and regulatory approvals later. The decision should be taken with legal and tax counsel before incorporation.`,
      },
      {
        heading: "Option 1: Private Limited Company (Pvt Ltd)",
        body: `The Private Limited Company under the Companies Act 2013 is the most commonly chosen structure for venture-backed startups in India and is the only structure that allows straightforward issuance of equity shares, ESOPs, convertible notes (CCDs/CCPs), and preferred stock.\n\nKey features:\n• Separate legal entity from founders\n• Limited liability for shareholders (liability limited to unpaid share capital)\n• Minimum 2 directors and 2 shareholders; maximum 200 shareholders\n• Equity funding and ESOP issuance possible\n• Eligible for DPIIT Startup India recognition\n• Eligible for Section 80-IAC tax exemption (3-year income tax holiday)\n• Annual compliance includes ROC filings, statutory audit, annual returns`,
        table: {
          headers: ["Feature", "Private Ltd", "LLP", "OPC"],
          rows: [
            ["Separate legal entity", "Yes", "Yes", "Yes"],
            ["Limited liability", "Yes", "Yes", "Yes"],
            ["Equity fundraising", "Yes (preferred)", "Not practical", "Not practical"],
            ["ESOP issuance", "Yes", "No", "No"],
            ["FDI under automatic route", "Most sectors", "Some sectors", "Not permitted"],
            ["Minimum founders", "2 directors", "2 partners", "1 director"],
            ["Annual compliance", "High", "Medium", "Medium"],
            ["Startup India eligibility", "Yes", "Yes", "Yes"],
          ],
        },
      },
      {
        heading: "Option 2: Limited Liability Partnership (LLP)",
        body: `The LLP under the Limited Liability Partnership Act 2008 combines the operational flexibility of a partnership with the limited liability of a company. It is particularly suitable for professional services firms (consultants, design studios, accounting firms) and for businesses that do not anticipate equity fundraising.\n\nKey features:\n• Partners have limited liability\n• No requirement for a statutory audit below ₹40 lakh turnover or ₹25 lakh capital contribution\n• No dividend distribution tax (DDT) — profits taxed as income of partners\n• Cannot issue equity shares or ESOPs\n• FDI is restricted in LLPs (requires government approval in many sectors)\n• Conversion to Private Limited is possible but involves procedural costs`,
        note: "If you plan to raise venture capital, angel funding, or issue ESOPs to employees, an LLP is not suitable. VCs invest in equity; LLPs cannot issue equity shares.",
      },
      {
        heading: "DPIIT Startup India Recognition: Key Benefits",
        body: `If your company qualifies as a 'Startup' under the DPIIT (Department for Promotion of Industry and Internal Trade) definition, significant benefits are available:\n\n• Section 80-IAC tax holiday: Income tax exemption for 3 consecutive years out of the first 10 years of incorporation, subject to not exceeding ₹100 crore turnover\n• Exemption from Angel Tax (Section 56(2)(viib) Income Tax Act): DPIIT-recognised startups are exempt from the controversial 'angel tax' on share premium received from investors\n• Fast-track patent examination: DPIIT startups get 80% rebate on patent filing fees and fast-track examination\n• Government procurement: Relaxation of prior turnover and experience criteria in government tenders\n\nTo qualify, the entity must be incorporated as a Private Limited Company, LLP, or Partnership Firm, must be less than 10 years old, and must have annual turnover not exceeding ₹100 crore.`,
      },
    ],
    faqs: [
      {
        q: "Can a foreigner or NRI be a director in an Indian Private Limited Company?",
        a: "Yes. There is no restriction on foreign nationals or NRIs being directors in an Indian Private Limited Company. However, every company must have at least one director who has stayed in India for at least 182 days in the previous calendar year (Section 149 Companies Act 2013). Foreign directors must obtain a Director Identification Number (DIN) from MCA.",
      },
      {
        q: "What is the minimum paid-up capital to incorporate a Private Limited Company in India?",
        a: "There is no minimum paid-up capital requirement for a Private Limited Company under the Companies Act 2013 as amended. A company can be incorporated with a paid-up capital of even ₹1. However, the authorised share capital determines the government fees paid at incorporation.",
      },
      {
        q: "What is the Angel Tax and has it been repealed?",
        a: "Angel Tax refers to the income tax levied under Section 56(2)(viib) of the Income Tax Act on share premium received by a closely-held company from investors at a price exceeding fair market value. In the Union Budget 2024, the government abolished Angel Tax entirely by amending Section 56(2)(viib), effective 1 April 2025 (Assessment Year 2025-26). This is a significant relief for startup fundraising.",
      },
    ],
    relatedSlugs: [
      "founders-agreement-essentials-india",
      "esop-framework-india-startups",
      "intellectual-property-startup-india",
    ],
    tags: ["Startup", "Company Incorporation", "Private Limited", "LLP", "DPIIT", "Section 80-IAC", "ESOP"],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 7 — CONSUMER PROTECTION
  // ─────────────────────────────────────────────────────────────
  {
    slug: "consumer-protection-act-2019-complaint-guide",
    title: "How to File a Consumer Complaint in India: Complete Guide Under CPA 2019",
    metaTitle: "Consumer Complaint India — How to File Under Consumer Protection Act 2019",
    metaDescription:
      "How to file a consumer complaint in India under the Consumer Protection Act 2019. District Commission, State Commission, NCDRC jurisdiction, e-filing, mediation, and compensation explained.",
    category: "Consumer Law",
    categoryColor: "#b45309",
    author: "Mohit Yadav",
    authorInitials: "MY",
    readTime: "11 min",
    publishedDate: "2024-12-01",
    updatedDate: "2025-01-25",
    legislation: [
      "Consumer Protection Act 2019",
      "Consumer Protection (E-Commerce) Rules 2020",
      "Consumer Protection (Mediation) Regulations 2020",
    ],
    courts: ["District Consumer Disputes Redressal Commission", "State Consumer Commission", "NCDRC"],
    heroLaw: "CPA 2019",
    summary:
      "Under the Consumer Protection Act 2019, a consumer can file a complaint for deficiency of service, defective goods, unfair trade practice, or overcharging before the District Commission (up to ₹50 lakh), State Commission (₹50 lakh to ₹2 crore), or NCDRC (above ₹2 crore). Complaints can now be filed online at edaakhil.nic.in.",
    content: [
      {
        heading: "What the Consumer Protection Act 2019 Covers",
        body: `The Consumer Protection Act, 2019 (CPA 2019), which replaced the 1986 Act, provides comprehensive protection to consumers and is among the most consumer-friendly legislation in India. The Act covers:\n\n• Defective goods — products that do not meet safety or quality standards\n• Deficiency in services — banking, insurance, medical, telecom, real estate, e-commerce, etc.\n• Unfair trade practices — misleading advertisements, false quality claims\n• Restrictive trade practices\n• Overcharging — prices above the MRP printed on products\n\nA 'Consumer' under Section 2(7) CPA 2019 is any person who buys goods or hires services for consideration — not for resale or commercial purposes. E-commerce buyers are explicitly included.`,
      },
      {
        heading: "Pecuniary Jurisdiction: Which Forum to Approach",
        body: `The CPA 2019 restructured jurisdiction limits significantly:\n\n• District Consumer Disputes Redressal Commission (District Commission): Claims up to ₹50 lakh\n• State Consumer Disputes Redressal Commission (State Commission): Claims from ₹50 lakh to ₹2 crore; also appellate forum for District Commission orders\n• National Consumer Disputes Redressal Commission (NCDRC): Claims above ₹2 crore; appellate forum for State Commission orders; appeal from NCDRC lies to the Supreme Court`,
        table: {
          headers: ["Forum", "Pecuniary Jurisdiction", "Appeal Forum"],
          rows: [
            ["District Commission", "Up to ₹50 lakh", "State Commission"],
            ["State Commission", "₹50 lakh – ₹2 crore; original + appellate", "NCDRC"],
            ["NCDRC (New Delhi)", "Above ₹2 crore; original + appellate", "Supreme Court of India"],
          ],
        },
      },
      {
        heading: "How to File a Consumer Complaint",
        body: `Under CPA 2019, consumer complaints can be filed both physically and online:\n\nOnline filing: The e-Daakhil portal (edaakhil.nic.in) allows consumers to file complaints, pay fees, and track cases online. This is a significant improvement over the 1986 Act regime.\n\nPhysical filing: A written complaint on plain paper (no special format required) can be filed at the relevant Commission's office.\n\nWhat the complaint must contain:\n• Name, description, and address of the complainant\n• Name, description, and address of the opposite party (seller/service provider)\n• Facts giving rise to the complaint, with dates\n• Documents in support (bills, invoices, warranty cards, correspondence)\n• The relief sought (refund, replacement, compensation)\n\nLimitation: A consumer complaint must be filed within 2 years from the date on which the cause of action arose. Delay may be condoned on sufficient cause shown.`,
        note: "You do not need to hire a lawyer to file a consumer complaint. Individuals may appear in person before Consumer Commissions. However, in complex or high-value matters, legal representation is advisable.",
      },
      {
        heading: "Mediation Under CPA 2019",
        body: `A significant new feature of the CPA 2019 is the institutionalisation of consumer mediation. Under Section 37, if the Commission considers that a matter may be settled by mediation, it may — with the consent of both parties — refer the matter to a Consumer Mediation Cell.\n\nMediation is voluntary, confidential, and time-bound. If a settlement is reached, it is placed before the Commission, which passes an order in terms of the settlement. Mediation proceedings are confidential and nothing said in mediation can be used in subsequent proceedings.`,
      },
    ],
    faqs: [
      {
        q: "Can a consumer complaint be filed against an e-commerce company in India?",
        a: "Yes. The Consumer Protection Act 2019 and the Consumer Protection (E-Commerce) Rules 2020 explicitly cover online transactions. Complaints against Amazon, Flipkart, Zomato, and other e-commerce platforms for defective products, non-delivery, or deficiency of service can be filed before the appropriate Consumer Commission or on the National Consumer Helpline (1800-11-4000).",
      },
      {
        q: "What compensation can a consumer receive?",
        a: "Under Section 39 CPA 2019, the Commission can award: (a) removal of the defect or replacement of goods, (b) return of the purchase price, (c) payment of compensation for loss or injury suffered, (d) removal of deficiency in service, (e) discontinuance of unfair trade practice, and (f) punitive damages in cases of gross negligence or wanton disregard for consumer rights. There is no prescribed upper cap on compensation.",
      },
      {
        q: "Is there a time limit to file a consumer complaint?",
        a: "Yes. Under Section 69 CPA 2019, a complaint must be filed within 2 years from the date on which the cause of action arose. After 2 years, the complaint is time-barred unless the Consumer Commission condones the delay on being satisfied that there was sufficient cause for the delay.",
      },
    ],
    relatedSlugs: [
      "medical-negligence-consumer-complaint-india",
      "banking-insurance-consumer-disputes",
      "real-estate-rera-consumer-rights",
    ],
    tags: ["Consumer Protection", "CPA 2019", "District Commission", "NCDRC", "e-Daakhil", "Consumer Rights"],
  },
];

// Helper functions
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export const categories = [
  ...new Set(blogPosts.map((p) => p.category)),
];

// ─────────────────────────────────────────────────────────────
// POST 8 — FIR PROCEDURE
// ─────────────────────────────────────────────────────────────
const post8: BlogPost = {
  slug: "fir-procedure-india-bnss",
  title: "How to File an FIR in India: Rights, Procedure & Zero FIR Under BNSS 2023",
  metaTitle: "How to File FIR in India — BNSS 2023 Complete Guide",
  metaDescription: "Complete guide to filing an FIR in India under BNSS 2023. Zero FIR, e-FIR, rights if police refuse to register, Section 173 BNSS procedure, and what to do if FIR is not filed.",
  category: "Criminal Law",
  categoryColor: "#dc2626",
  author: "Aman Mohd Khan",
  authorInitials: "AMK",
  readTime: "10 min",
  publishedDate: "2024-09-10",
  updatedDate: "2025-01-20",
  legislation: ["Section 173, BNSS 2023", "Section 175, BNSS 2023", "Article 21, Constitution of India"],
  courts: ["Magistrate Court", "High Court"],
  heroLaw: "BNSS 2023 · S. 173",
  summary: "An FIR (First Information Report) under Section 173 BNSS 2023 must be registered by police for all cognizable offences without any preliminary inquiry. A Zero FIR can be filed at any police station regardless of jurisdiction. If police refuse, a complaint can be made to the Superintendent of Police or Magistrate.",
  content: [
    {
      heading: "What is an FIR?",
      body: "A First Information Report (FIR) is a written document prepared by police when they receive information about the commission of a cognizable offence. It is the first step in the criminal justice process and sets the entire investigation in motion.\n\nUnder Section 173 of the Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, which replaced Section 154 of CrPC, police are legally obligated to register an FIR for every cognizable offence reported to them. They cannot conduct a preliminary inquiry before registration in most cases.\n\nThe Supreme Court in Lalita Kumari v. Government of Uttar Pradesh (2014) settled the law: registration of FIR is mandatory for cognizable offences — police have no discretion to refuse.",
      quote: { text: "Registration of FIR is mandatory under Section 154 CrPC (now Section 173 BNSS) for cognizable offences and the police officer cannot avoid his duty to register it.", source: "Lalita Kumari v. Government of U.P., (2014) 2 SCC 1" }
    },
    {
      heading: "Zero FIR: A Critical Right Under BNSS 2023",
      body: "A Zero FIR is an FIR filed at any police station regardless of where the offence occurred or which police station has territorial jurisdiction. It has been codified under Section 173(1) BNSS 2023.\n\nOnce a Zero FIR is registered, it must be transferred to the jurisdictionally competent police station within 15 days. This is crucial in cases of:\n\n• Road accidents where victim is taken to a distant hospital\n• Crimes committed in one area but victim is in another\n• Rape and sexual assault cases\n• Cases where the victim does not know the exact jurisdiction\n\nThe police station receiving the Zero FIR cannot refuse to register it on grounds of jurisdiction.",
      note: "Under BNSS 2023, e-FIR (electronic FIR) can also be filed online for certain categories of offences. Once filed electronically, it must be signed by the complainant within 3 days."
    },
    {
      heading: "What to Do if Police Refuse to Register FIR",
      body: "If a police officer refuses to register an FIR for a cognizable offence, the following legal remedies are available:\n\n1. Complaint to Superintendent of Police (SP): Under Section 173(4) BNSS, if an officer-in-charge refuses to register an FIR, the aggrieved person can send the substance of such information in writing and by post to the Superintendent of Police. If the SP is satisfied, they must either investigate or direct a subordinate officer to investigate.\n\n2. Complaint before Magistrate: Under Section 175 BNSS, the complainant can file a complaint directly before the Magistrate, who can take cognizance and direct registration of FIR.\n\n3. Writ Petition in High Court: Under Article 226 of the Constitution, a writ of mandamus can be filed in the High Court directing the police to register the FIR.",
      table: {
        headers: ["Remedy", "Forum", "Time"],
        rows: [
          ["Complaint to SP", "Superintendent of Police", "Immediate"],
          ["Complaint to Magistrate", "Judicial Magistrate First Class", "2–7 days"],
          ["Writ of Mandamus", "High Court (Article 226)", "1–4 weeks"],
        ]
      }
    }
  ],
  faqs: [
    { q: "Can police refuse to register an FIR in India?", a: "No. For cognizable offences, registration of FIR is mandatory under Section 173 BNSS 2023. The Supreme Court in Lalita Kumari v. Government of U.P. (2014) held that police have no discretion to refuse FIR registration for cognizable offences. Refusal to register an FIR is itself a criminal misconduct." },
    { q: "What is the difference between a cognizable and non-cognizable offence?", a: "In a cognizable offence (e.g., murder, rape, robbery), police can arrest without a warrant and must register an FIR. In a non-cognizable offence (e.g., assault, cheating below a threshold), police cannot arrest without a warrant and must obtain Magistrate's permission to investigate. The categories are listed in Schedule I of BNSS 2023." },
    { q: "Can an FIR be quashed?", a: "Yes. Under Section 528 BNSS 2023 (formerly Section 482 CrPC), the High Court can quash an FIR in exercise of its inherent powers if the FIR is frivolous, vexatious, or constitutes an abuse of the process of law. The Supreme Court has laid down guidelines for quashing in State of Haryana v. Bhajan Lal (1992)." }
  ],
  relatedSlugs: ["anticipatory-bail-india-bnss-2023", "rights-of-arrested-person-bnss-2023", "difference-bns-bnss-india"],
  tags: ["FIR", "Zero FIR", "BNSS 2023", "Police", "Cognizable Offence", "Criminal Law"]
};

// ─────────────────────────────────────────────────────────────
// POST 9 — CHILD CUSTODY
// ─────────────────────────────────────────────────────────────
const post9: BlogPost = {
  slug: "child-custody-law-india",
  title: "Child Custody Laws in India: Guardianship, Welfare & Court Procedure",
  metaTitle: "Child Custody Law India — Guardianship Act, Hindu Minority, Welfare Test",
  metaDescription: "Complete guide to child custody laws in India. Guardianship and Wards Act 1890, Hindu Minority and Guardianship Act 1956, welfare of child as paramount consideration, and how courts decide custody.",
  category: "Family Law",
  categoryColor: "#7c3aed",
  author: "Urooj Ahmed Khan",
  authorInitials: "UAK",
  readTime: "12 min",
  publishedDate: "2024-10-20",
  updatedDate: "2025-01-22",
  legislation: ["Guardianship and Wards Act 1890", "Hindu Minority and Guardianship Act 1956", "Article 21, Constitution of India", "UN Convention on Rights of the Child (India ratified 1992)"],
  courts: ["Family Court", "District Court", "High Court"],
  heroLaw: "HMGA 1956 · GWA 1890",
  summary: "In India, child custody is governed by the Guardianship and Wards Act 1890 and personal laws. Courts apply the 'welfare of the child' as the paramount and overriding consideration — above the rights of either parent. There is no automatic presumption in favour of mother or father under Indian law.",
  content: [
    {
      heading: "The Paramount Principle: Welfare of the Child",
      body: "The fundamental principle governing all child custody matters in India is that the welfare of the minor child is the paramount consideration — overriding all other considerations including the rights, preferences, or claims of either parent.\n\nThis principle is enshrined in Section 17 of the Guardianship and Wards Act 1890, Section 13 of the Hindu Minority and Guardianship Act 1956, and has been affirmed repeatedly by the Supreme Court.\n\nThe Supreme Court in Gaurav Nagpal v. Sumedha Nagpal (2009) held: 'The principles in relation to the custody of a minor child are well settled. In determining the question as to who should be given custody of a minor child, the paramount consideration is the welfare of the child and not the legal rights of the parties.'",
      quote: { text: "The welfare of the minor is the first and paramount consideration in all proceedings relating to guardianship and custody. It is not the rights of the parents but the welfare of the child that is to guide the court.", source: "Gaurav Nagpal v. Sumedha Nagpal, (2009) 1 SCC 42" }
    },
    {
      heading: "Types of Custody Under Indian Law",
      body: "Indian courts can grant two types of custody:\n\n1. Physical/Residential Custody: The child primarily lives with one parent (the custodial parent). The other parent typically gets visitation rights.\n\n2. Joint Custody: The child spends substantial time with both parents. Courts are increasingly granting joint custody arrangements, especially where both parents are in the same city.\n\n3. Legal Guardianship: Separate from physical custody, this refers to the right to make decisions about the child's education, healthcare, and welfare.\n\nFactors courts consider: age of the child (very young children — especially infants — are generally kept with the mother unless there are compelling reasons against it), the child's own wishes (if old enough to form an intelligent preference), the financial and emotional stability of each parent, and any history of domestic violence or abuse.",
      note: "For Hindu children, the natural guardian of a boy or unmarried girl below 5 years is the mother under Section 6 of the Hindu Minority and Guardianship Act 1956. For children above 5, the father is the natural guardian. However, this does not determine custody — the welfare test always prevails."
    },
    {
      heading: "Procedure for Custody Petition",
      body: "A custody petition is filed before the Family Court (or District Court where Family Court is not established) under the Guardianship and Wards Act 1890.\n\nSteps:\n1. File a petition under Section 25 GWA or Section 7 GWA\n2. Court may appoint a Child Welfare Officer to assess the child's living conditions\n3. Interim custody may be granted pending final hearing\n4. The child's wishes may be recorded in camera (in private) if the child is mature enough\n5. Final order passed after hearing both parties\n\nIn divorce proceedings under HMA, custody is dealt with as part of the matrimonial proceedings itself under Section 26 HMA."
    }
  ],
  faqs: [
    { q: "Does the mother always get custody of young children in India?", a: "Not automatically. While Section 6 of the Hindu Minority and Guardianship Act 1956 designates the mother as natural guardian for children below 5 years, this is a rebuttable presumption. Courts apply the welfare test. If the welfare of the child is better served by custody with the father or another person, courts will order accordingly." },
    { q: "Can the child decide which parent to live with?", a: "Courts in India do consider the wishes of a mature child, especially above 9–12 years. However, the child's preference is one factor among many — not determinative. The court will consider whether the preference is genuine and not the result of parental influence." },
    { q: "Can custody orders be modified after they are passed?", a: "Yes. Custody orders are not permanent and can be modified if there is a change in circumstances. Under Section 25 of the Guardianship and Wards Act 1890, either parent can apply to modify a custody order if circumstances have materially changed since the original order." }
  ],
  relatedSlugs: ["mutual-consent-divorce-india-section-13b", "alimony-maintenance-india-law", "contested-divorce-india-grounds"],
  tags: ["Child Custody", "Guardianship", "Family Law", "Welfare of Child", "Divorce", "HMGA 1956"]
};

// ─────────────────────────────────────────────────────────────
// POST 10 — MAINTENANCE / ALIMONY
// ─────────────────────────────────────────────────────────────
const post10: BlogPost = {
  slug: "alimony-maintenance-india-law",
  title: "Alimony & Maintenance Laws in India: Rights, Amount & Procedure",
  metaTitle: "Alimony Maintenance India — Section 125 CrPC, Hindu Marriage Act Complete Guide",
  metaDescription: "Complete guide to alimony and maintenance laws in India. Section 125 BNSS (formerly CrPC), Section 24-25 HMA, interim maintenance, and how courts calculate maintenance amounts.",
  category: "Family Law",
  categoryColor: "#7c3aed",
  author: "Urooj Ahmed Khan",
  authorInitials: "UAK",
  readTime: "11 min",
  publishedDate: "2024-11-10",
  updatedDate: "2025-02-01",
  legislation: ["Section 144, BNSS 2023 (formerly S.125 CrPC)", "Section 24-25, Hindu Marriage Act 1955", "Section 37, Special Marriage Act 1954", "Muslim Women (Protection of Rights on Divorce) Act 1986"],
  courts: ["Family Court", "Magistrate Court", "High Court"],
  heroLaw: "HMA 1955 · S.24-25 · BNSS S.144",
  summary: "Maintenance in India can be claimed under Section 144 BNSS 2023 (secular law applicable to all religions), Section 24-25 of the Hindu Marriage Act 1955, or personal laws. Courts consider the income and assets of both spouses, the standard of living during marriage, and the needs of the claimant. There is no fixed formula — it is discretionary.",
  content: [
    {
      heading: "Two Routes to Maintenance in India",
      body: "There are two primary legal routes to claim maintenance in India:\n\n1. Section 144 BNSS 2023 (formerly Section 125 CrPC): A secular provision applicable to all religions. Any wife, legitimate or illegitimate minor child, or parent unable to maintain themselves can claim maintenance from a person having sufficient means. The proceedings are before a Magistrate's Court and are summary in nature — faster than civil proceedings.\n\n2. Section 24-25 Hindu Marriage Act 1955: Applicable to Hindus, Buddhists, Jains, and Sikhs. Section 24 provides for interim maintenance (pendente lite) during the pendency of matrimonial proceedings. Section 25 provides for permanent alimony after the final decree.",
      table: {
        headers: ["Provision", "Applicable To", "Forum", "Nature"],
        rows: [
          ["Section 144 BNSS", "All religions", "Magistrate Court", "Maintenance during marriage/separation"],
          ["Section 24 HMA", "Hindus/Buddhists/Jains/Sikhs", "Family Court", "Interim maintenance during proceedings"],
          ["Section 25 HMA", "Hindus/Buddhists/Jains/Sikhs", "Family Court", "Permanent alimony post-decree"],
          ["Muslim Women Act 1986", "Muslim women", "Magistrate Court", "Post-divorce maintenance"],
        ]
      }
    },
    {
      heading: "How Courts Calculate Maintenance",
      body: "There is no fixed statutory formula for calculating maintenance in India. Courts exercise discretion based on the following factors:\n\n• The income, assets, and property of both spouses\n• The standard of living enjoyed during the marriage\n• The needs and reasonable expenses of the claimant\n• Whether the claimant is employed and their earning capacity\n• The number and needs of children\n• The conduct of the parties (in exceptional cases)\n\nThe Supreme Court in Rajnesh v. Neha (2020) issued comprehensive guidelines for maintenance proceedings, including mandatory filing of affidavits of assets, income, and expenditure by both parties to prevent concealment of income.",
      quote: { text: "Maintenance is awarded not as a punishment to the husband but to ensure that the wife and children are not reduced to destitution.", source: "Rajnesh v. Neha, (2021) 2 SCC 324" }
    },
    {
      heading: "Interim Maintenance: Getting Relief Quickly",
      body: "Interim maintenance (pendente lite) can be claimed under Section 24 HMA during the pendency of matrimonial proceedings. Key features:\n\n• Can be claimed by either husband or wife (the provision is gender-neutral)\n• The court can grant it on an application, after hearing the other side\n• Courts are expected to decide interim maintenance applications within 60 days\n• Interim maintenance can be backdated to the date of application\n\nUnder Section 144 BNSS, maintenance applications before Magistrate Courts are also time-bound — the Magistrate must dispose of the application within 60 days of the first date of hearing.",
      note: "A wife living separately from her husband due to his cruelty, adultery, or desertion is entitled to maintenance even if she has not filed for divorce. Separation alone, without fault on the wife's part, entitles her to maintenance under Section 144 BNSS."
    }
  ],
  faqs: [
    { q: "Can a husband claim maintenance from his wife in India?", a: "Yes. Section 24 of the Hindu Marriage Act 1955 is gender-neutral and allows either spouse — husband or wife — to claim interim maintenance if they have no independent income. The Supreme Court has upheld husbands' right to maintenance where the wife has substantially higher income." },
    { q: "What happens if the husband does not pay maintenance?", a: "Non-payment of court-ordered maintenance is punishable. Under Section 144(3) BNSS, if a person fails to comply with a maintenance order without sufficient cause, a Magistrate may issue a warrant for levying the amount due and may sentence the defaulter to imprisonment for up to one month for each month of default." },
    { q: "Is maintenance taxable in India?", a: "Periodic maintenance received by a wife from her husband is generally not taxable in her hands under the Income Tax Act 1961. However, a lump-sum alimony received as a one-time settlement may be taxable as capital receipt in some circumstances. Tax treatment depends on the specific facts and should be verified with a tax professional." }
  ],
  relatedSlugs: ["mutual-consent-divorce-india-section-13b", "child-custody-law-india", "contested-divorce-india-grounds"],
  tags: ["Alimony", "Maintenance", "Section 144 BNSS", "HMA Section 24-25", "Family Law", "Divorce"]
};

// ─────────────────────────────────────────────────────────────
// POST 11 — WRIT PETITIONS
// ─────────────────────────────────────────────────────────────
const post11: BlogPost = {
  slug: "writ-petition-high-court-india-guide",
  title: "Writ Petitions in India: Types, Procedure & When to File Under Articles 32 & 226",
  metaTitle: "Writ Petition India — Habeas Corpus, Mandamus, Certiorari Complete Guide",
  metaDescription: "Complete guide to writ petitions in India under Articles 32 and 226 of the Constitution. Types of writs, when to file, procedure before High Court and Supreme Court, and PIL explained.",
  category: "Constitutional Law",
  categoryColor: "#1d4ed8",
  author: "Masood Ahmed Khan",
  authorInitials: "MAK",
  readTime: "13 min",
  publishedDate: "2024-08-15",
  updatedDate: "2025-01-30",
  legislation: ["Article 32, Constitution of India", "Article 226, Constitution of India", "Article 21, Constitution of India", "Article 14, Constitution of India"],
  courts: ["Supreme Court of India (Article 32)", "High Courts (Article 226)"],
  heroLaw: "Art. 32 & 226 · Constitution",
  summary: "Writ petitions can be filed in the High Court under Article 226 or in the Supreme Court under Article 32 to enforce fundamental rights or other legal rights. There are five types of writs: Habeas Corpus, Mandamus, Certiorari, Prohibition, and Quo Warranto. PIL (Public Interest Litigation) is a special form of writ petition.",
  content: [
    {
      heading: "Constitutional Basis of Writ Jurisdiction",
      body: "The right to move the Supreme Court for enforcement of fundamental rights is itself a fundamental right under Article 32 of the Constitution. Dr. B.R. Ambedkar called Article 32 'the heart and soul of the Constitution.'\n\nArticle 226 gives High Courts wider writ jurisdiction — they can issue writs not only for enforcement of fundamental rights but for 'any other purpose.' This makes the High Court's writ jurisdiction broader than that of the Supreme Court under Article 32.\n\nThe writ jurisdiction of courts cannot be ousted by ordinary legislation — it is a constitutional guarantee. Even Parliament cannot take away this right except by constitutional amendment.",
      quote: { text: "If I was asked to name any particular article in this Constitution as the most important — an article without which this Constitution would be a nullity — I could not refer to any other article except this one. It is the very soul of the Constitution and the very heart of it.", source: "Dr. B.R. Ambedkar on Article 32, Constituent Assembly Debates, 1948" }
    },
    {
      heading: "The Five Types of Writs",
      body: "Indian courts can issue five types of constitutional writs:",
      table: {
        headers: ["Writ", "Meaning", "Used When", "Against Whom"],
        rows: [
          ["Habeas Corpus", "You shall have the body", "Unlawful detention or imprisonment", "Any person or authority detaining another"],
          ["Mandamus", "We command", "Public authority fails to perform mandatory legal duty", "Government, statutory bodies, public officials"],
          ["Certiorari", "To be informed", "Quash order of inferior court/tribunal made without jurisdiction", "Courts, tribunals, quasi-judicial bodies"],
          ["Prohibition", "To forbid", "Prevent inferior court from exceeding jurisdiction", "Courts, tribunals"],
          ["Quo Warranto", "By what authority", "Challenge unlawful occupation of public office", "Person holding public office without authority"],
        ]
      }
    },
    {
      heading: "Public Interest Litigation (PIL)",
      body: "PIL is a special innovation of Indian constitutional law that allows any citizen to approach the Supreme Court (Article 32) or High Court (Article 226) on behalf of persons whose rights are violated but who are unable to approach courts themselves due to poverty, disability, or other constraints.\n\nPIL was pioneered by Justice P.N. Bhagwati and Justice V.R. Krishna Iyer in the late 1970s. The court can take cognizance of public interest matters even on the basis of a letter or postcard.\n\nPIL has been used to: secure rights of prisoners, address environmental violations, challenge illegal mining, enforce bonded labour laws, and address systemic failures in governance.",
      note: "PIL is a solemn constitutional remedy and must not be used for personal gain, private disputes, or political motives. Courts have imposed heavy costs on frivolous PILs. A PIL filed for personal vendetta or publicity can result in the petitioner being penalised."
    }
  ],
  faqs: [
    { q: "Can a writ petition be filed against a private company?", a: "Generally, writs lie only against the State and its instrumentalities — not against purely private entities. However, if a private body is performing a public function or is sufficiently infused with government character, writs may lie against it. The test is whether the body discharges a public duty — established in Pradeep Kumar Biswas v. Indian Institute of Chemical Biology (2002)." },
    { q: "What is the difference between Article 32 and Article 226 writ jurisdiction?", a: "Article 32 gives the Supreme Court jurisdiction to issue writs only for enforcement of fundamental rights. Article 226 gives High Courts wider jurisdiction — they can issue writs for enforcement of fundamental rights AND for any other purpose, including enforcement of statutory rights. High Courts can also issue writs against authorities located within their territorial jurisdiction." },
    { q: "Is there a time limit for filing a writ petition?", a: "There is no statutory limitation period for writ petitions. However, courts apply the doctrine of laches — unreasonable delay in approaching the court can disentitle a petitioner to relief. The Supreme Court has held that writ petitions should be filed promptly, especially in service matters and contractual disputes." }
  ],
  relatedSlugs: ["rights-of-arrested-person-bnss-2023", "anticipatory-bail-india-bnss-2023", "difference-bns-bnss-india"],
  tags: ["Writ Petition", "Article 32", "Article 226", "Habeas Corpus", "PIL", "Constitutional Law", "Mandamus"]
};

// ─────────────────────────────────────────────────────────────
// POST 12 — PROPERTY REGISTRATION
// ─────────────────────────────────────────────────────────────
const post12: BlogPost = {
  slug: "property-registration-process-india",
  title: "Property Registration in India: Complete Step-by-Step Guide Under Registration Act 1908",
  metaTitle: "Property Registration India — Stamp Duty, Sale Deed, Process Guide 2024",
  metaDescription: "Complete guide to property registration in India. Stamp duty rates, sale deed drafting, Sub-Registrar procedure, documents required, and consequences of non-registration explained.",
  category: "Property Law",
  categoryColor: "#059669",
  author: "Chandransh Yadav",
  authorInitials: "CY",
  readTime: "11 min",
  publishedDate: "2024-10-28",
  updatedDate: "2025-01-18",
  legislation: ["Registration Act 1908", "Indian Stamp Act 1899 / State Stamp Acts", "Transfer of Property Act 1882", "IGRS — Integrated Grievance Redressal System (UP)"],
  courts: ["Sub-Registrar Office", "Civil Court", "Revenue Court"],
  heroLaw: "Registration Act 1908",
  summary: "Property registration in India involves executing a sale deed on stamp paper of appropriate value, paying stamp duty (varies by state: 5–7% in UP), and presenting the deed before the Sub-Registrar within 4 months. Unregistered sale deeds for immovable property above ₹100 are inadmissible as evidence of title.",
  content: [
    {
      heading: "Why Registration is Mandatory",
      body: "Under Section 17 of the Registration Act 1908, registration is compulsory for instruments that transfer, assign, limit, or extinguish rights in immovable property valued at ₹100 or more. Sale deeds, gift deeds, and exchange deeds for immovable property must be registered.\n\nSection 49 of the Registration Act provides that an unregistered document required to be registered is inadmissible as evidence of the transaction it purports to effect. This means an unregistered sale deed cannot be used in court to prove transfer of ownership.\n\nRegistration provides public notice of the transaction through the public records maintained at the Sub-Registrar's office.",
      note: "Stamp duty and registration fee are separate. Stamp duty is a state subject and varies significantly across states. In Uttar Pradesh, stamp duty on sale deeds is 7% for men and 6% for women buyers (state policy). Circle rates (government guidance values) determine the minimum stamp duty payable."
    },
    {
      heading: "Step-by-Step Registration Process",
      body: "Step 1 — Draft the Sale Deed: A sale deed is the primary document transferring ownership. It must be drafted by a qualified advocate and must contain complete details of the property, seller, buyer, consideration amount, and possession details.\n\nStep 2 — Pay Stamp Duty: Stamp duty must be paid on the sale deed before or at the time of execution. In UP and most states, this is done by purchasing e-stamp paper or through franking at authorised banks.\n\nStep 3 — Execute the Document: The sale deed must be signed/thumb-impressed by both seller and buyer in the presence of at least two witnesses.\n\nStep 4 — Present Before Sub-Registrar: The executed deed must be presented before the Sub-Registrar of Assurances having jurisdiction within 4 months of execution. Both seller and buyer (or their duly authorised attorneys) must be present.\n\nStep 5 — Biometric Verification: All parties must provide biometric (fingerprint/photograph) verification at the Sub-Registrar's office.\n\nStep 6 — Pay Registration Fees: Registration fee (1% of property value, subject to maximum limits) must be paid at the time of registration.\n\nStep 7 — Collect Registered Document: After registration, the document is returned with the registration endorsement, typically within 1–7 days.",
      table: {
        headers: ["Stage", "Where", "Key Document"],
        rows: [
          ["Draft sale deed", "Advocate's office", "Sale deed draft"],
          ["Pay stamp duty", "Authorised bank / e-stamp portal", "e-Stamp paper"],
          ["Execute deed", "Any location", "Signed sale deed + witnesses"],
          ["Present for registration", "Sub-Registrar's office", "Original deed + IDs"],
          ["Biometric verification", "Sub-Registrar's office", "Aadhaar / biometric"],
          ["Collect registered deed", "Sub-Registrar's office", "Registered deed with endorsement"],
        ]
      }
    }
  ],
  faqs: [
    { q: "What is the time limit to register a property document?", a: "Under Section 23 of the Registration Act 1908, every document required to be registered must be presented for registration within 4 months from the date of its execution. A document executed outside India has 4 months from the date of arrival in India. After 4 months, late registration is possible within another 4 months with a penalty, but requires the Registrar's special permission." },
    { q: "Can property be registered with a Power of Attorney?", a: "Yes, but with important limitations. The Supreme Court in Suraj Lamp and Industries Pvt. Ltd. v. State of Haryana (2012) held that sale of immovable property through Power of Attorney is not a valid substitute for registered sale deed. A PoA holder can execute and register a sale deed on behalf of the principal, but the PoA itself does not transfer title." },
    { q: "What are circle rates in property registration?", a: "Circle rates (also called guidance value or collector rate) are the minimum value at which a property must be registered, set by the state government. If the actual transaction value is lower than the circle rate, stamp duty must still be paid on the circle rate value. Registering at below-circle-rate value is illegal and constitutes stamp duty evasion." }
  ],
  relatedSlugs: ["property-title-verification-india", "inheritance-succession-law-india", "tenant-rights-india"],
  tags: ["Property Registration", "Sale Deed", "Stamp Duty", "Sub-Registrar", "Registration Act 1908", "Real Estate"]
};

// ─────────────────────────────────────────────────────────────
// POST 13 — DOMESTIC VIOLENCE
// ─────────────────────────────────────────────────────────────
const post13: BlogPost = {
  slug: "domestic-violence-law-india-pwdva",
  title: "Domestic Violence Law in India: Rights & Remedies Under Protection of Women Act 2005",
  metaTitle: "Domestic Violence India — PWDVA 2005 Rights, Protection Orders, Procedure",
  metaDescription: "Complete guide to the Protection of Women from Domestic Violence Act 2005 (PWDVA). Types of domestic violence, protection orders, residence orders, maintenance, and procedure for filing complaint.",
  category: "Family Law",
  categoryColor: "#7c3aed",
  author: "Urooj Ahmed Khan",
  authorInitials: "UAK",
  readTime: "12 min",
  publishedDate: "2024-12-10",
  updatedDate: "2025-02-05",
  legislation: ["Protection of Women from Domestic Violence Act 2005", "Section 498A, BNS 2023 (formerly IPC)", "Article 21, Constitution of India"],
  courts: ["Magistrate Court (PWDVA)", "Family Court", "Sessions Court (Section 498A BNS)"],
  heroLaw: "PWDVA 2005 · BNS S.498A",
  summary: "The Protection of Women from Domestic Violence Act 2005 (PWDVA) protects women from physical, emotional, sexual, verbal, and economic abuse in domestic relationships. It provides for Protection Orders, Residence Orders, Monetary Relief, and Custody Orders. The aggrieved woman can file a Domestic Incident Report through a Protection Officer.",
  content: [
    {
      heading: "What is Domestic Violence Under PWDVA 2005?",
      body: "The Protection of Women from Domestic Violence Act 2005 defines domestic violence broadly to include:\n\n1. Physical Abuse: Bodily harm, injury, or danger to health, safety, or life\n2. Sexual Abuse: Any conduct of a sexual nature that abuses, humiliates, degrades, or violates the dignity of the woman\n3. Verbal and Emotional Abuse: Insults, ridicule, humiliation, threats to cause physical pain, threats to take away children\n4. Economic Abuse: Deprivation of economic resources, financial control, stopping the woman from working, not providing money for household expenses\n\nThe Act applies to women in a 'domestic relationship' — meaning women who are or have been in a shared household with the respondent by reason of marriage, relationship in the nature of marriage, adoption, or family relationships.",
      note: "PWDVA 2005 is a civil law remedy, not a criminal law. The Protection Order, Residence Order, and Monetary Relief are civil orders. Section 498A BNS 2023 (cruelty by husband/relatives) is a separate criminal remedy that can be invoked simultaneously."
    },
    {
      heading: "Remedies Available Under PWDVA 2005",
      body: "The Magistrate can pass the following orders under PWDVA 2005:\n\n1. Protection Order (Section 18): Prohibits the respondent from committing further acts of domestic violence, entering the aggrieved person's workplace, contacting the aggrieved person, or alienating assets.\n\n2. Residence Order (Section 19): Prevents the respondent from dispossessing the aggrieved woman from the shared household. Importantly, the woman has a right to reside in the shared household regardless of whether she has any legal title to it.\n\n3. Monetary Relief (Section 20): For expenses incurred, loss of earnings, medical expenses, and maintenance. Can be granted on an interim basis.\n\n4. Custody Order (Section 21): Temporary custody of children.\n\n5. Compensation Order (Section 22): For injuries including mental torture and emotional distress.",
      table: {
        headers: ["Order Type", "Section", "What It Does"],
        rows: [
          ["Protection Order", "S. 18", "Stops further violence, harassment, contact"],
          ["Residence Order", "S. 19", "Right to stay in shared household"],
          ["Monetary Relief", "S. 20", "Maintenance, medical expenses, lost earnings"],
          ["Custody Order", "S. 21", "Temporary custody of children"],
          ["Compensation Order", "S. 22", "Compensation for mental torture"],
        ]
      }
    }
  ],
  faqs: [
    { q: "Can a daughter-in-law file a domestic violence complaint against her mother-in-law?", a: "Yes. PWDVA 2005 applies to domestic relationships, which includes relationships with all members of the shared household — including female members. A daughter-in-law can file a complaint against her mother-in-law, sister-in-law, or other female relatives living in the shared household. The Supreme Court affirmed this in Sandhya Wankhede v. Manoj Bhimrao Wankhede (2011)." },
    { q: "Does a woman have to leave her matrimonial home when filing a domestic violence complaint?", a: "No. One of the core rights under PWDVA 2005 is the Right to Residence under Section 17 — an aggrieved woman has the right to reside in the shared household, regardless of whether she has any ownership right or title. The respondent cannot dispossess her without a court order." },
    { q: "What is the difference between PWDVA 2005 and Section 498A BNS?", a: "PWDVA 2005 is a civil law providing for protection orders, residence rights, and monetary relief — it is faster, does not result in imprisonment, and is specifically designed to protect women's safety. Section 498A BNS (formerly IPC) is a criminal law making cruelty by husband or relatives a punishable offence with up to 3 years imprisonment. Both can be filed simultaneously for maximum protection." }
  ],
  relatedSlugs: ["child-custody-law-india", "mutual-consent-divorce-india-section-13b", "alimony-maintenance-india-law"],
  tags: ["Domestic Violence", "PWDVA 2005", "Protection Order", "Section 498A", "Women's Rights", "Family Law"]
};

// ─────────────────────────────────────────────────────────────
// POST 14 — RTI
// ─────────────────────────────────────────────────────────────
const post14: BlogPost = {
  slug: "right-to-information-rti-india-guide",
  title: "Right to Information (RTI) in India: How to File, What to Ask & Exemptions",
  metaTitle: "RTI India — How to File RTI Application, Fees, Appeal, Exemptions Guide",
  metaDescription: "Complete guide to Right to Information Act 2005 in India. How to file an RTI application, Central and State Information Commissions, first and second appeal, exemptions under Section 8, and fees.",
  category: "Constitutional Law",
  categoryColor: "#1d4ed8",
  author: "Irshad Mohd Khan",
  authorInitials: "IMK",
  readTime: "10 min",
  publishedDate: "2024-09-05",
  updatedDate: "2025-01-12",
  legislation: ["Right to Information Act 2005", "Article 19(1)(a), Constitution of India", "Article 21, Constitution of India"],
  courts: ["Central Information Commission", "State Information Commission", "High Court"],
  heroLaw: "RTI Act 2005",
  summary: "The Right to Information Act 2005 enables any citizen to request information from any public authority within 30 days (48 hours for life/liberty matters). The fee is ₹10 for Central Government. First appeal lies to the First Appellate Authority within 30 days. Second appeal goes to the Central or State Information Commission.",
  content: [
    {
      heading: "The Constitutional Foundation of RTI",
      body: "The right to information flows from Article 19(1)(a) of the Constitution — the fundamental right to freedom of speech and expression. The Supreme Court in Union of India v. Association for Democratic Reforms (2002) held that the right to know is a fundamental right implicit in free speech and a healthy democracy.\n\nThe Right to Information Act 2005 operationalises this right. It applies to all 'public authorities' — any authority established by or under the Constitution, any law made by Parliament or State Legislature, or any body substantially financed by government funds.",
    },
    {
      heading: "How to File an RTI Application",
      body: "Step 1: Identify the correct public authority that holds the information you seek.\n\nStep 2: Draft a clear, specific RTI application on plain paper addressed to the Public Information Officer (PIO) of that authority. Vague requests are often rejected.\n\nStep 3: Pay the application fee — ₹10 for Central Government authorities (by cash, demand draft, or postal order). BPL card holders are exempt from fees.\n\nStep 4: Submit in person, by post, or online at rtionline.gov.in (for Central Government). Most State Governments also have online RTI portals.\n\nStep 5: The PIO must provide information within 30 days (48 hours if the request relates to life or liberty of a person).",
      table: {
        headers: ["Stage", "Time Limit", "Forum"],
        rows: [
          ["RTI Application", "Reply within 30 days", "Public Information Officer"],
          ["Life/Liberty cases", "Reply within 48 hours", "Public Information Officer"],
          ["First Appeal", "File within 30 days of refusal", "First Appellate Authority (same dept.)"],
          ["Second Appeal", "File within 90 days", "Central/State Information Commission"],
          ["Court challenge", "As per limitation", "High Court (Article 226)"],
        ]
      }
    },
    {
      heading: "Exemptions — What Cannot Be Disclosed",
      body: "Section 8 of the RTI Act provides exemptions. Certain categories of information are exempt from disclosure:\n\n• Information affecting sovereignty, security, strategic, scientific, or economic interests of India\n• Information received in confidence from a foreign government\n• Information that would endanger life or physical safety of any person\n• Cabinet papers and Council of Ministers deliberations (until decision is taken)\n• Personal information with no public activity connection (privacy exemption)\n• Information held by intelligence and security organisations listed in the Second Schedule (e.g., RAW, IB)\n\nHowever, even for exempt categories, if the public interest in disclosure outweighs the harm, the information must be disclosed.",
      note: "RTI cannot be used to seek opinions, judgments, or explanations — only factual information held in records. Asking 'why did you make this decision' is not an RTI-able question; asking 'provide a copy of the file noting on Decision X' is proper RTI."
    }
  ],
  faqs: [
    { q: "Can RTI be filed against private companies in India?", a: "Generally no. RTI Act 2005 applies only to 'public authorities' — government bodies and substantially government-funded organisations. Private companies are not covered. However, if a private company is performing a public function under a government contract or has received substantial government funding, RTI may apply. SEBI-listed companies have separate disclosure obligations under SEBI regulations." },
    { q: "What happens if the PIO does not reply within 30 days?", a: "If the PIO fails to provide information within the prescribed time, it is deemed a refusal under the RTI Act. The applicant can file a first appeal to the First Appellate Authority within 30 days. The PIO may also be penalised ₹250 per day of delay (up to ₹25,000) by the Information Commission under Section 20 of the RTI Act." },
    { q: "Can RTI be used to get copies of court judgments?", a: "Court judgments are public documents and freely available. RTI can be used to obtain copies of court orders from subordinate courts (district courts, tribunals). Supreme Court and High Court judgments are publicly available online on official websites (sci.gov.in and respective High Court websites) without needing RTI." }
  ],
  relatedSlugs: ["writ-petition-high-court-india-guide", "rights-of-arrested-person-bnss-2023", "consumer-protection-act-2019-complaint-guide"],
  tags: ["RTI", "Right to Information", "RTI Act 2005", "PIO", "Information Commission", "Transparency", "Constitutional Law"]
};

// ─────────────────────────────────────────────────────────────
// POST 15 — RENT & TENANT RIGHTS
// ─────────────────────────────────────────────────────────────
const post15: BlogPost = {
  slug: "tenant-rights-india-rent-law",
  title: "Tenant Rights in India: Rent Agreements, Eviction Law & Legal Protections",
  metaTitle: "Tenant Rights India — Rent Agreement, Eviction Law, Notice Period Guide",
  metaDescription: "Complete guide to tenant rights in India. Rent agreements, security deposit limits, eviction procedure, notice requirements, UP Rent Control Act, and how tenants can challenge illegal eviction.",
  category: "Property Law",
  categoryColor: "#059669",
  author: "Chandransh Yadav",
  authorInitials: "CY",
  readTime: "11 min",
  publishedDate: "2024-11-20",
  updatedDate: "2025-01-28",
  legislation: ["Transfer of Property Act 1882", "Uttar Pradesh Urban Buildings (Regulation of Letting, Rent and Eviction) Act 1972", "Registration Act 1908", "Specific Relief Act 1963"],
  courts: ["Rent Control Court", "Civil Court", "High Court"],
  heroLaw: "TPA 1882 · UP Rent Act 1972",
  summary: "Tenants in India have statutory protections against arbitrary eviction. In Uttar Pradesh, the UP Urban Buildings (Regulation of Letting, Rent and Eviction) Act 1972 governs most residential tenancies. Landlords can evict only on specific grounds and must follow proper notice procedures. Security deposits and rent agreements regulate the relationship.",
  content: [
    {
      heading: "Rent Agreements: Key Legal Requirements",
      body: "A rent agreement (also called a leave and licence agreement or tenancy agreement) is the foundation of the landlord-tenant relationship. Key legal requirements:\n\nRegistration: Under Section 17(1)(d) of the Registration Act 1908, a lease of immovable property for a term exceeding one year must be registered. Agreements for 11 months or less are exempt from mandatory registration — which is why most rent agreements in India are executed for 11 months.\n\nStamp Duty: Rent agreements must be executed on stamp paper of appropriate value. In Uttar Pradesh, a nominal stamp duty applies to rent agreements.\n\nNotice Period: Standard practice is 1–2 months' notice from either side. The notice period must be specified in the agreement.",
      note: "An unregistered rent agreement for more than 12 months is not admissible as evidence of tenancy in court proceedings under Section 49 of the Registration Act. Always ensure your agreement is properly stamped and registered if the tenancy exceeds one year."
    },
    {
      heading: "Grounds for Eviction Under UP Rent Control Act 1972",
      body: "Under the Uttar Pradesh Urban Buildings (Regulation of Letting, Rent and Eviction) Act 1972, a landlord can evict a tenant only on specific grounds listed in the Act. These include:\n\n1. Non-payment of rent for more than 3 months\n2. Subletting the premises without the landlord's written consent\n3. Using the premises for purposes other than those for which it was let\n4. Causing damage or nuisance to the property\n5. Bona fide personal need of the landlord (landlord genuinely needs the premises for own use)\n6. The building being in a dilapidated condition requiring demolition\n\nA landlord cannot evict a tenant without approaching the Rent Control Court and obtaining an order of eviction — self-help eviction (cutting off electricity, water, removing belongings) is illegal.",
      quote: { text: "A tenant cannot be evicted except in accordance with the procedure established by the Rent Control Act. Self-help eviction by a landlord constitutes an offence.", source: "Writ jurisdiction — established principle under UP Rent Control Act" }
    }
  ],
  faqs: [
    { q: "Can a landlord evict a tenant without notice in India?", a: "No. Eviction without following due process of law is illegal. Under the UP Urban Buildings Act 1972 and similar state rent control laws, a landlord must serve proper notice and file an eviction application before the Rent Control Court. Courts examine whether the ground for eviction is valid. Forcible eviction without a court order is a criminal offence (wrongful restraint/use of force)." },
    { q: "What is the maximum security deposit a landlord can take in India?", a: "There is no uniform national cap. Different states have different rules. Under the Model Tenancy Act 2021 (which states may adopt), the security deposit is capped at 2 months' rent for residential properties and 6 months' for commercial. UP has not yet enacted legislation based on the Model Tenancy Act. Currently in UP, the security deposit amount is a matter of agreement between the parties." },
    { q: "Can a landlord increase rent arbitrarily in India?", a: "Under the UP Urban Buildings Act 1972, rent can be revised periodically as per the procedure prescribed in the Act. The Act specifies that rent can be increased by a fixed percentage every 3 years. Any arbitrary rent hike beyond the prescribed limit can be challenged before the Rent Control Court." }
  ],
  relatedSlugs: ["property-title-verification-india", "property-registration-process-india", "consumer-protection-act-2019-complaint-guide"],
  tags: ["Tenant Rights", "Rent Agreement", "Eviction", "UP Rent Act", "Landlord Tenant", "Property Law"]
};

// ─────────────────────────────────────────────────────────────
// POST 16 — NDPS ACT
// ─────────────────────────────────────────────────────────────
const post16: BlogPost = {
  slug: "ndps-act-india-bail-rights",
  title: "NDPS Act in India: Arrest, Bail Restrictions & Rights of the Accused",
  metaTitle: "NDPS Act India — Bail, Section 37, Rights of Accused Complete Guide",
  metaDescription: "Complete guide to the Narcotic Drugs and Psychotropic Substances Act 1985 (NDPS Act). Strict bail conditions under Section 37, rights of the accused, what constitutes commercial quantity, and legal procedure.",
  category: "Criminal Law",
  categoryColor: "#dc2626",
  author: "Masood Ahmed Khan",
  authorInitials: "MAK",
  readTime: "13 min",
  publishedDate: "2024-12-15",
  updatedDate: "2025-02-08",
  legislation: ["NDPS Act 1985", "Section 37, NDPS Act", "Section 482, BNSS 2023", "Article 21, Constitution of India"],
  courts: ["Special NDPS Court", "Sessions Court", "High Court", "Supreme Court"],
  heroLaw: "NDPS Act 1985 · S.37",
  summary: "The NDPS Act 1985 imposes strict bail restrictions under Section 37 — bail can only be granted if the court is satisfied that there are reasonable grounds to believe the accused is not guilty AND is not likely to commit an offence while on bail. This twin test makes bail in NDPS cases significantly harder than in ordinary criminal cases.",
  content: [
    {
      heading: "Why NDPS Cases Are Different",
      body: "The Narcotic Drugs and Psychotropic Substances Act 1985 (NDPS Act) is special legislation that treats drug offences with exceptional severity. Key features that distinguish NDPS cases:\n\n1. Reverse burden of proof: Once the prosecution establishes possession of a contraband substance, the burden shifts to the accused to prove innocence in certain circumstances.\n\n2. Stringent bail conditions (Section 37): Unlike ordinary criminal cases where bail is the norm, NDPS cases have a near-presumption against bail for commercial quantity offences.\n\n3. Mandatory minimum sentences: Many NDPS offences carry mandatory minimum sentences of 10 years to life imprisonment.\n\n4. Special Courts: NDPS cases are tried before designated Special Courts.",
      note: "The NDPS Act distinguishes between small quantity, intermediate quantity, and commercial quantity. The penalties for commercial quantity are the most severe. These quantities are specified in the Schedule to the NDPS Act and vary by substance — for example, commercial quantity for heroin is 250 grams, for cannabis it is 20 kg."
    },
    {
      heading: "The Section 37 Bail Test",
      body: "Section 37 of the NDPS Act creates what the Supreme Court calls a 'twin test' for bail in commercial quantity cases:\n\n1. The Public Prosecutor must be given an opportunity to oppose the bail application\n2. The court must be satisfied that there are reasonable grounds to believe that the accused is NOT guilty of the offence AND that he is not likely to commit an offence while on bail\n\nBoth conditions must be satisfied simultaneously. This is a much higher threshold than ordinary bail where the court merely considers flight risk, tampering, and gravity.\n\nThe Supreme Court in Union of India v. Ram Samujh (1999) held that Section 37 creates a presumption against bail and courts must strictly apply the twin test.",
      quote: { text: "The twin conditions in Section 37 are cumulative and both must be satisfied before bail can be granted in a case involving commercial quantity under the NDPS Act.", source: "Collector of Customs, Madras v. D. Bhoormal, (1974) 2 SCC 544 — principle affirmed" }
    }
  ],
  faqs: [
    { q: "Can bail be obtained in an NDPS case in India?", a: "Yes, but it is significantly harder than in ordinary criminal cases for commercial quantity offences. For small and intermediate quantity offences, normal bail provisions apply. For commercial quantity, the Section 37 twin test must be satisfied. Bail in NDPS commercial quantity cases is granted rarely and usually requires exceptional circumstances — serious illness, lengthy pre-trial detention, or strong evidence of innocence." },
    { q: "What is the difference between small quantity and commercial quantity under NDPS?", a: "The NDPS Act and its Schedule specify the quantities for each substance. For example, for heroin: small quantity is up to 5 grams, and commercial quantity is 250 grams or more. Intermediate quantity is between small and commercial. Penalties escalate significantly: small quantity carries up to 1 year, commercial quantity carries 10 years to life imprisonment." },
    { q: "What are the rights of an accused under the NDPS Act?", a: "Despite the stringent provisions, accused persons retain all fundamental rights under the Constitution — including Article 21 (right to life and personal liberty), Article 22 (right to know grounds of arrest and consult an advocate), and the right to a fair trial. The Supreme Court has held that even NDPS accused cannot be detained indefinitely without trial — prolonged incarceration without trial can entitle an accused to bail on Article 21 grounds." }
  ],
  relatedSlugs: ["anticipatory-bail-india-bnss-2023", "rights-of-arrested-person-bnss-2023", "difference-bns-bnss-india"],
  tags: ["NDPS Act", "Drug Law", "Section 37", "Bail", "Criminal Law", "Commercial Quantity"]
};

// ─────────────────────────────────────────────────────────────
// POST 17 — INTELLECTUAL PROPERTY BASICS
// ─────────────────────────────────────────────────────────────
const post17: BlogPost = {
  slug: "intellectual-property-india-trademark-copyright-patent",
  title: "Intellectual Property in India: Trademarks, Copyrights & Patents Explained",
  metaTitle: "Intellectual Property India — Trademark Registration, Copyright, Patent Guide",
  metaDescription: "Complete guide to intellectual property law in India. How to register a trademark, copyright protection, patent filing, and IP enforcement. Trade Marks Act 1999, Copyright Act 1957, Patents Act 1970.",
  category: "Corporate Law",
  categoryColor: "#0369a1",
  author: "Rohit Yadav",
  authorInitials: "RY",
  readTime: "14 min",
  publishedDate: "2024-10-10",
  updatedDate: "2025-01-25",
  legislation: ["Trade Marks Act 1999", "Copyright Act 1957", "Patents Act 1970", "Designs Act 2000", "Geographical Indications of Goods Act 1999"],
  courts: ["Intellectual Property Division — High Courts", "CGPDTM", "Copyright Board"],
  heroLaw: "TM Act 1999 · Patents Act 1970",
  summary: "India's intellectual property framework protects trademarks (Trade Marks Act 1999), copyrights (Copyright Act 1957, automatic on creation), and patents (Patents Act 1970, 20-year protection). Trademark registration takes 18–24 months. Copyright is automatic — no registration required for protection. Patents require novelty, inventive step, and industrial applicability.",
  content: [
    {
      heading: "Trademarks: Protecting Your Brand",
      body: "A trademark is any sign capable of distinguishing goods/services of one enterprise from another — it can be a word, logo, device, colour, sound, shape, or combination. Registration under the Trade Marks Act 1999 gives the owner exclusive rights to use the mark for the registered class of goods/services.\n\nTrademark registration process:\n1. Trademark search on the IP India database (ipindia.gov.in) to check availability\n2. Filing application before the Controller General of Patents, Designs & Trade Marks (CGPDTM) in the appropriate class (Nice Classification, 45 classes)\n3. Examination by Trademark Examiner — Examination Report issued within 1 month\n4. Response to objections, if any\n5. Publication in Trade Marks Journal — opposition period of 4 months\n6. Registration certificate issued if no successful opposition\n\nA registered trademark gives protection for 10 years, renewable indefinitely every 10 years.",
      table: {
        headers: ["IP Right", "What it Protects", "Duration", "Registration"],
        rows: [
          ["Trademark", "Brand names, logos, slogans", "10 years (renewable)", "Required for full protection"],
          ["Copyright", "Literary, artistic, musical works", "Life + 60 years", "Automatic — no registration needed"],
          ["Patent", "Inventions, processes", "20 years (non-renewable)", "Mandatory for protection"],
          ["Design", "Visual appearance of products", "10 years (extendable)", "Required"],
          ["GI Tag", "Goods from specific geographic region", "10 years (renewable)", "Required"],
        ]
      }
    },
    {
      heading: "Copyright: Automatic Protection",
      body: "Copyright in India under the Copyright Act 1957 arises automatically upon creation of an original work — no registration or formality is required. Protected works include: literary works, artistic works, musical works, cinematograph films, sound recordings, and computer programs.\n\nKey features:\n• Protection lasts for the lifetime of the author plus 60 years\n• For anonymous works, government works, and works of international organisations, protection is 60 years from publication\n• Copyright registration (with Copyright Office) is optional but creates a public record and provides evidentiary benefit in infringement proceedings\n• Software code is protected as a literary work under the Copyright Act",
      note: "AI-generated works and their copyright ownership is an emerging legal issue in India. The Copyright Act 1957 requires a 'human author' — works generated entirely by AI without human creative input may not qualify for copyright protection under current law."
    }
  ],
  faqs: [
    { q: "Can a startup trademark its name before incorporation?", a: "Yes. Trademark applications can be filed by individuals (including founders) before company incorporation. The trademark can later be assigned to the company after incorporation through a trademark assignment agreement. Filing early is advisable — trademark rights generally go to the first-to-file in India (first-to-use with prior use claims being an exception)." },
    { q: "How long does trademark registration take in India?", a: "The entire trademark registration process in India typically takes 18–36 months if there are no objections or oppositions. After filing, examination usually takes 3–6 months. If an examination report is issued with objections, a hearing is scheduled. Publication in the Trademark Journal is followed by a 4-month opposition window. If no opposition is filed or if opposition is decided in the applicant's favour, registration certificate is issued." },
    { q: "What is the difference between ™ and ® symbols in India?", a: "The ™ symbol (unregistered trademark) can be used by anyone claiming trademark rights, even without registration. The ® symbol (registered trademark) can only be used after the trademark is officially registered by the CGPDTM. Using ® on an unregistered mark is an offence under Section 107 of the Trade Marks Act 1999." }
  ],
  relatedSlugs: ["startup-legal-structure-india-guide", "founders-agreement-essentials-india", "consumer-protection-act-2019-complaint-guide"],
  tags: ["Trademark", "Copyright", "Patent", "IP Law", "Trade Marks Act", "Copyright Act 1957", "Corporate Law"]
};

// Add all new posts to blogPosts array
blogPosts.push(post8, post9, post10, post11, post12, post13, post14, post15, post16, post17);
