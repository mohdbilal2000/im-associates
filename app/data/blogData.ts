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
