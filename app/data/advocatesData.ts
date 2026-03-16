export interface Advocate {
  id: string;
  initials: string;
  name: string;
  designation: string;
  qualifications: string[];
  bio: string;
  barCouncil: string;
  enrollmentNo: string; // Placeholder — to be updated with actual number
  courts: string[];
  areas: string[];
  languages: string[];
}

// ─── BCI COMPLIANCE NOTE ───────────────────────────────────────────────────
// Profiles are factual and educational in nature.
// No superlatives, no outcome guarantees, no comparative claims.
// Per BCI Rules on Professional Standards — Rule 36 prohibits solicitation.
// These profiles list qualifications and areas of practice only.
// ──────────────────────────────────────────────────────────────────────────

export const advocates: Advocate[] = [
  {
    id: "masood-ahmed-khan",
    initials: "MAK",
    name: "Masood Ahmed Khan",
    designation: "Advocate, M.A., LL.M.",
    qualifications: ["M.A.", "LL.M."],
    bio: "Advocate Masood Ahmed Khan holds a Master of Arts and a Master of Laws (LL.M.) and is enrolled with the Bar Council. He practices primarily in criminal law, constitutional matters, and civil litigation, with academic grounding in jurisprudence and legal theory.",
    barCouncil: "Bar Council of Uttar Pradesh",
    enrollmentNo: "UP/XXXX/XXXX", // Update with actual enrolment number
    courts: [
      "Agra District Court",
      "Allahabad High Court",
      "Sessions Court",
    ],
    areas: ["Criminal Law", "Civil Litigation", "Constitutional Law"],
    languages: ["Hindi", "Urdu", "English"],
  },
  {
    id: "irshad-mohd-khan",
    initials: "IMK",
    name: "Irshad Mohd Khan",
    designation: "Advocate, B.Sc., LL.M.",
    qualifications: ["B.Sc.", "LL.M."],
    bio: "Advocate Irshad Mohd Khan holds a Bachelor of Science and a Master of Laws (LL.M.). His scientific background and advanced legal qualification inform his work in areas requiring technical and evidentiary analysis, including property disputes and civil litigation.",
    barCouncil: "Bar Council of Uttar Pradesh",
    enrollmentNo: "UP/XXXX/XXXX",
    courts: [
      "Agra District Court",
      "Revenue Courts",
      "Allahabad High Court",
    ],
    areas: ["Property Law", "Civil Litigation", "Revenue Law"],
    languages: ["Hindi", "Urdu", "English"],
  },
  {
    id: "aman-mohd-khan",
    initials: "AMK",
    name: "Aman Mohd Khan",
    designation: "Advocate",
    qualifications: ["LLB"],
    bio: "Advocate Aman Mohd Khan is enrolled with the Bar Council and practices in criminal law, civil disputes, and general legal advisory work before district courts in Agra and the surrounding region.",
    barCouncil: "Bar Council of Uttar Pradesh",
    enrollmentNo: "UP/XXXX/XXXX",
    courts: [
      "Agra District Court",
      "Family Court",
      "Magistrate Courts",
    ],
    areas: ["Criminal Law", "Civil Litigation", "Family Law"],
    languages: ["Hindi", "Urdu", "English"],
  },
  {
    id: "urooj-ahmed-khan",
    initials: "UAK",
    name: "Urooj Ahmed Khan",
    designation: "Advocate",
    qualifications: ["LLB"],
    bio: "Advocate Urooj Ahmed Khan is enrolled with the Bar Council and focuses on family law matters including matrimonial disputes, maintenance, and child custody proceedings, as well as civil litigation before the courts in Agra.",
    barCouncil: "Bar Council of Uttar Pradesh",
    enrollmentNo: "UP/XXXX/XXXX",
    courts: [
      "Family Court, Agra",
      "Agra District Court",
      "Magistrate Courts",
    ],
    areas: ["Family Law", "Civil Litigation", "Consumer Protection"],
    languages: ["Hindi", "Urdu", "English"],
  },
  {
    id: "chandransh-yadav",
    initials: "CY",
    name: "Chandransh Yadav",
    designation: "Advocate, LL.M.",
    qualifications: ["LLB", "LL.M."],
    bio: "Advocate Chandransh Yadav holds an LL.M. and practices in property law, corporate advisory, and startup legal structuring. His postgraduate specialisation informs detailed transactional and advisory work for individuals and business entities.",
    barCouncil: "Bar Council of Uttar Pradesh",
    enrollmentNo: "UP/XXXX/XXXX",
    courts: [
      "Agra District Court",
      "Revenue Courts",
      "NCLT (through senior counsel)",
    ],
    areas: ["Property Law", "Corporate Law", "Startup Law", "Contract Law"],
    languages: ["Hindi", "English"],
  },
  {
    id: "rohit-yadav",
    initials: "RY",
    name: "Rohit Yadav",
    designation: "Advocate",
    qualifications: ["LLB"],
    bio: "Advocate Rohit Yadav is enrolled with the Bar Council and practices in business law, startup structuring, and civil litigation. He advises clients on incorporation, compliance, and commercial agreements.",
    barCouncil: "Bar Council of Uttar Pradesh",
    enrollmentNo: "UP/XXXX/XXXX",
    courts: [
      "Agra District Court",
      "Consumer Forum",
      "Civil Courts",
    ],
    areas: ["Startup Law", "Contract Law", "Consumer Protection", "Civil Litigation"],
    languages: ["Hindi", "English"],
  },
  {
    id: "mohit-yadav",
    initials: "MY",
    name: "Mohit Yadav",
    designation: "Advocate",
    qualifications: ["LLB"],
    bio: "Advocate Mohit Yadav is enrolled with the Bar Council and practices in consumer protection law, civil litigation, and general legal advisory. He handles matters before Consumer Commissions and civil courts in Agra.",
    barCouncil: "Bar Council of Uttar Pradesh",
    enrollmentNo: "UP/XXXX/XXXX",
    courts: [
      "District Consumer Commission, Agra",
      "Civil Courts",
      "Magistrate Courts",
    ],
    areas: ["Consumer Protection", "Civil Litigation", "Criminal Law"],
    languages: ["Hindi", "English"],
  },
];
