// ─── Bihar Librarian LET 2026 — Official Exam Info & Weightage Data ─────────
// Source: Bihar School Examination Board (BSEB) framework

export const examInfo = {
  name: 'Bihar Librarian Eligibility Test (LET) 2026',
  shortName: 'Bihar Librarian LET 2026',
  conductedBy: 'Bihar School Examination Board (BSEB)',
  officialWebsite: 'https://biharboardonline.bihar.gov.in/',
  totalMarks: 150,
  totalQuestions: 150,
  durationMinutes: 120,
  negativeMarking: false,
  questionType: 'Multiple Choice Questions (MCQ) — Single Correct Answer',
  mode: 'Online (Computer Based Test)',
};

// ─── Part-wise Distribution ─────────────────────────────────────────────────

export const parts = [
  {
    id: 'part-1',
    label: 'Part 1 — Library & Information Science',
    shortLabel: 'Library Science',
    marks: 100,
    questions: 100,
    percentage: '66.6%',
    color: 'blue',
    icon: '📚',
    description: 'Core technical section covering Library Science concepts, classification, cataloguing, management and digital libraries.',
  },
  {
    id: 'part-2',
    label: 'Part 2 — General Paper (Non-Technical)',
    shortLabel: 'General Paper',
    marks: 50,
    questions: 50,
    percentage: '33.4%',
    color: 'green',
    icon: '🌏',
    description: 'General awareness, Bihar GK, Reasoning and basic Computer Awareness.',
  },
];

// ─── Weightage Tiers for Library Science (100 Marks) ────────────────────────

export interface WeightageTier {
  tier: 1 | 2 | 3;
  label: string;
  percentage: string;
  expectedQuestions: string;
  color: string;      // tailwind color name
  bgClass: string;
  textClass: string;
  badgeClass: string;
  borderClass: string;
  units: WeightageUnit[];
}

export interface WeightageUnit {
  unitId: string;
  unitLabel: string;
  expectedQ: string;  // e.g. "22–25"
  priority: 'critical' | 'important' | 'moderate';
  keyTopics: string[];
  strategy: string;
}

export const libSciWeightageTiers: WeightageTier[] = [
  {
    tier: 1,
    label: 'Tier 1 — Highest Weightage',
    percentage: '~45% of Core Paper',
    expectedQuestions: '40–47 Questions',
    color: 'red',
    bgClass: 'bg-red-50 dark:bg-red-950/20',
    textClass: 'text-red-700 dark:text-red-400',
    badgeClass: 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300',
    borderClass: 'border-red-200 dark:border-red-800/50',
    units: [
      {
        unitId: 'knowledge-organisation',
        unitLabel: 'Unit 2: Knowledge Organisation & Information Processing',
        expectedQ: '22–25',
        priority: 'critical',
        keyTopics: [
          'Dewey Decimal Classification (DDC) — schedules, tables, auxiliary schedules',
          'Colon Classification (CC) — PMEST, connecting symbols, main classes',
          'Universal Decimal Classification (UDC)',
          'Cataloguing Rules — AACR-2 & CCC',
          'Types of Catalogue (Dictionary, Classified, Alphabetico-Classed)',
          'Subject Cataloguing — SLSH, Chain Procedure, POPSI, PRECIS',
          'MARC 21 & Dublin Core metadata standards',
          'Bibliographic Description & RDA',
        ],
        strategy: 'Master DDC main classes (000–900), CC PMEST categories, and AACR-2 rules for choice and rendering of headings. These alone fetch 22–25 marks.',
      },
      {
        unitId: 'library-management',
        unitLabel: 'Unit 3: Library Management & Administration',
        expectedQ: '18–22',
        priority: 'critical',
        keyTopics: [
          'Fayol\'s Principles of Management & POSDCORB',
          'Library Sections — Acquisition, Technical, Circulation, Periodical',
          'Charging Systems — Browne System, Newark System, Detroit System',
          'Stock Verification, Weeding & Binding policies',
          'Budgeting Types — PPBS, Zero-Based Budgeting (ZBB)',
          'Periodical Management — Kardex System, Three-Card System',
          'Accessioning & Technical Processing',
          'Human Resource Management in Libraries',
        ],
        strategy: 'Focus on charging systems (Browne vs Newark), POSDCORB full form, and budgeting types. Ranganathan\'s management principles are frequently tested.',
      },
    ],
  },
  {
    tier: 2,
    label: 'Tier 2 — Medium Weightage',
    percentage: '~35% of Core Paper',
    expectedQuestions: '27–33 Questions',
    color: 'amber',
    bgClass: 'bg-amber-50 dark:bg-amber-950/20',
    textClass: 'text-amber-700 dark:text-amber-400',
    badgeClass: 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300',
    borderClass: 'border-amber-200 dark:border-amber-800/50',
    units: [
      {
        unitId: 'foundations',
        unitLabel: 'Unit 1: Foundations of Library Science',
        expectedQ: '12–15',
        priority: 'important',
        keyTopics: [
          'Five Laws of Library Science — S.R. Ranganathan (1931)',
          'Library Legislation in India — state-wise Public Library Acts & years',
          'Bihar Public Libraries and Information Centres Act 2008',
          'Model Public Library Bill, Delivery of Books Act',
          'Professional Associations — ILA, IASLIC, ALA, IFLA (headquarters, objectives, publications)',
          'Types of Libraries — Public, Academic, Special, National',
          'History & Development of Libraries in India',
          'Library as a Social Institution',
        ],
        strategy: 'Memorize the year and state of each Public Library Act (Tamil Nadu 1948, Andhra Pradesh 1960, Bihar 2008). BSEB frequently tests these chronological facts.',
      },
      {
        unitId: 'it-networks',
        unitLabel: 'Units 5 & 6: Computer Basics, Library Automation & Networks',
        expectedQ: '15–18',
        priority: 'important',
        keyTopics: [
          'Integrated Library Management Systems — KOHA, SOUL, LibSys, e-Granthalaya',
          'Barcode and RFID Technology in Libraries',
          'INFLIBNET — e-ShodhSindhu, Shodhganga',
          'DELNET — Delhi Library Network',
          'OCLC — WorldCat, interlibrary loan',
          'National Digital Library of India (NDLI)',
          'OAI-PMH — Open Archives Initiative Protocol',
          'DSpace, EPrints — Institutional Repository software',
          'Internet fundamentals — HTTP, URL, search engines',
          'Metadata standards — MARC 21, Dublin Core',
        ],
        strategy: 'Learn library software names (KOHA = open-source, SOUL = INFLIBNET-developed). Know INFLIBNET and DELNET\'s services. Digital initiatives like NDLI are frequently asked.',
      },
    ],
  },
  {
    tier: 3,
    label: 'Tier 3 — Lower Weightage',
    percentage: '~20% of Core Paper',
    expectedQuestions: '10–12 Questions',
    color: 'green',
    bgClass: 'bg-green-50 dark:bg-green-950/20',
    textClass: 'text-green-700 dark:text-green-400',
    badgeClass: 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300',
    borderClass: 'border-green-200 dark:border-green-800/50',
    units: [
      {
        unitId: 'reference-services',
        unitLabel: 'Unit 4: Reference & Information Services',
        expectedQ: '10–12',
        priority: 'moderate',
        keyTopics: [
          'Types of Reference Service — Ready Reference vs Long-Range Reference',
          'CAS — Current Awareness Service',
          'SDI — Selective Dissemination of Information',
          'Reference Sources — Dictionaries, Encyclopedias, Yearbooks, Directories',
          'Encyclopaedia Britannica, Europa World Year Book, Webster\'s dictionary',
          'Reference Interview Techniques',
          'User Education & Information Literacy',
          'Inter-Library Loan (ILL) & Document Delivery',
          'Information Seeking Behaviour & User Studies',
          'Bibliometrics — Bradford\'s, Lotka\'s, Zipf\'s Laws',
        ],
        strategy: 'Know the difference between CAS and SDI, the types of reference sources (primary/secondary/tertiary), and basic bibliometric laws. These are straightforward marks.',
      },
    ],
  },
];

// ─── General Paper Breakdown (50 Marks) ─────────────────────────────────────

export const generalPaperTopics = [
  {
    id: 'gk-current',
    label: 'General Knowledge & Current Affairs',
    expectedQ: '15–20',
    marks: '15–20',
    icon: '🌍',
    color: 'blue',
    badgeClass: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300',
    keyTopics: [
      'National & International Current Events',
      'Indian National Movement & Freedom Struggle',
      'Indian Geography (rivers, mountains, states)',
      'Indian Constitution — key articles & amendments',
      'Fundamental Rights, DPSP, Fundamental Duties',
      'National Awards — Bharat Ratna, Padma awards',
      'Government Schemes — PM Awas, Jan Dhan, Ayushman Bharat',
    ],
  },
  {
    id: 'bihar-gk',
    label: 'Bihar State GK',
    expectedQ: '10–12',
    marks: '10–12',
    icon: '🏛️',
    color: 'amber',
    badgeClass: 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300',
    keyTopics: [
      'History of Bihar — Pataliputra, Mauryan Empire, Nalanda, Vikramshila',
      'Geography of Bihar — Rivers (Ganga, Kosi, Gandak), Districts, climate',
      'Culture & Festivals — Chhath Puja, Sonepur Mela, Sama Chakeva',
      'Economy & Agriculture — Makhana, Litchi, Maize',
      'Bihar Government Schemes — Har Ghar Bijli, Jal-Jeevan-Hariyali',
      'Administrative Setup — Districts, divisions, Chief Minister & Governor',
      'Important Personalities — JP Narayan, Chandragupta Maurya',
    ],
  },
  {
    id: 'reasoning',
    label: 'Reasoning & Analytical Ability',
    expectedQ: '10–12',
    marks: '10–12',
    icon: '🧩',
    color: 'purple',
    badgeClass: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300',
    keyTopics: [
      'Coding-Decoding',
      'Blood Relations',
      'Number Series & Alphabet Series',
      'Analogy & Classification',
      'Direction Sense & Ranking',
      'Syllogism & Logical Deduction',
      'Basic Arithmetic — Percentages, Ratios, Simple Interest',
    ],
  },
  {
    id: 'computer',
    label: 'Basic Computer Awareness',
    expectedQ: '8–10',
    marks: '8–10',
    icon: '💻',
    color: 'rose',
    badgeClass: 'bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300',
    keyTopics: [
      'Computer Hardware — CPU, RAM, ROM, Input/Output devices',
      'Memory Units — KB, MB, GB, TB',
      'Operating System features — Windows shortcuts',
      'MS Word, MS Excel, MS PowerPoint basics',
      'Internet & Web Browsers — HTTP, URL, Search Engines',
      'Networking basics — LAN, WAN, IP address',
      'Cyber Security — Malware, Phishing, Firewalls',
    ],
  },
];

// ─── 10-Day Final Sprint Study Plan (Exam Countdown Mode) ───────────────────────

export interface StudyDay {
  day: number;
  phase: 1 | 2 | 3;
  coreTask: string;
  coreFocus: string;
  generalTask: string;
}

export const studyPlan: StudyDay[] = [
  // Phase 1: Days 1–4 (Core Heavyweight Paper: Foundations, Classification & Cataloguing — 60% of LET Marks)
  {
    day: 1,
    phase: 1,
    coreTask: 'Five Laws of Library Science & Concept of Library',
    coreFocus: 'Dr. S.R. Ranganathan\'s 5 Laws (1931) implications, variants, and open access system principles.',
    generalTask: 'Bihar History & Geography — Ancient Nalanda & Vikramshila, Mauryan Empire, Rivers and Soil.',
  },
  {
    day: 2,
    phase: 1,
    coreTask: 'Dewey Decimal Classification (DDC) & Colon Classification (CC)',
    coreFocus: 'DDC 10 Main Classes (000–900), Table 1 & Table 2; CC PMEST categories, connecting symbols & facet formula.',
    generalTask: 'Logical Reasoning — Coding-Decoding, Number Series & Analogies frequently asked in Bihar exams.',
  },
  {
    day: 3,
    phase: 1,
    coreTask: 'Cataloguing Codes (AACR-2 & CCC) and Subject Indexing',
    coreFocus: 'AACR-2 structure, heading rules, single/three-author rules, CCC, SLSH, POPSI & PRECIS indexing.',
    generalTask: 'Bihar Cultural Heritage & Libraries — Khuda Bakhsh Oriental Library, Sachchidananda Sinha Library & 1857 Revolt.',
  },
  {
    day: 4,
    phase: 1,
    coreTask: 'Library Management Principles, POSDCORB & Budgeting',
    coreFocus: 'Fayol\'s 14 principles, POSDCORB, book selection tools, accession register, PPBS & Zero-Based Budgeting (ZBB).',
    generalTask: 'Computer Fundamentals — Input/Output hardware, CPU, RAM, ROM, Cache, and byte memory conversions.',
  },

  // Phase 2: Days 5–7 (Services, Digital Automation & All State Library Legislation)
  {
    day: 5,
    phase: 2,
    coreTask: 'Reference & Information Services (CAS vs SDI)',
    coreFocus: 'Ready vs Long-Range reference, CAS vs SDI alert services, bibliographies, encyclopedias & yearbooks.',
    generalTask: 'General Paper — Indian Constitution (Preamble, Fundamental Rights, DPSP) & Direction Sense reasoning.',
  },
  {
    day: 6,
    phase: 2,
    coreTask: 'Library Automation (Koha, SOUL) & Digital Standards (MARC 21)',
    coreFocus: 'ILMS software (Koha, SOUL, e-Granthalaya), RFID vs Barcode, MARC 21 fields, Dublin Core 15 elements & DSpace.',
    generalTask: 'Bihar Government Welfare Schemes — Kanya Utthan Yojana, Student Credit Card & Computer Software/OS.',
  },
  {
    day: 7,
    phase: 2,
    coreTask: 'Indian Public Library Acts (All 19 States) & Bihar Act 2008',
    coreFocus: 'Memorize all 19 state library acts chronologically (Tamil Nadu 1948 to Arunachal 2009), Bihar Act 2008 & ILA/IASLIC.',
    generalTask: 'Verbal Reasoning — Blood Relations, Syllogisms & sitting arrangement tricks.',
  },

  // Phase 3: Days 8–10 (General Paper Booster, Full 150Q CBT Mocks & Final Countdown)
  {
    day: 8,
    phase: 3,
    coreTask: 'Information Networks (INFLIBNET, DELNET, NDLI) & Consortia',
    coreFocus: 'Shodhganga, e-ShodhSindhu, DELNET, National Digital Library of India (NDLI) & Open Access repositories.',
    generalTask: 'Computer Networking & Cybersecurity — LAN, WAN, IP address, protocols, malware & firewall concepts.',
  },
  {
    day: 9,
    phase: 3,
    coreTask: 'Full-Length Timed LET Mock Test 1 (150 Questions Simulation)',
    coreFocus: 'Simulate official BSEB 120-minute timed exam: 100 Library Science + 50 General Paper. Analyze weak topics.',
    generalTask: 'Rapid error analysis of missed questions; strengthen high-weightage formulas.',
  },
  {
    day: 10,
    phase: 3,
    coreTask: 'Rapid-Fire Formula, Year Memorization & Full Mock Test 2',
    coreFocus: 'Last-mile quick revision of all 19 state act years, DDC main classes, Ranganathan dates & final confidence booster.',
    generalTask: 'Final review of Bihar GK statistics, national current affairs, and positive exam mindset.',
  },
];

export const phaseInfo = [
  {
    phase: 1,
    label: 'Phase 1 (Days 1–4)',
    subtitle: 'Core Heavyweight Paper',
    days: 'Days 1–4',
    color: 'blue',
    bgClass: 'bg-blue-600',
    lightBg: 'bg-blue-50 dark:bg-blue-950/30',
    goal: 'Lock down Unit 1 (Foundations), Unit 2 (Classification & Cataloguing), and Unit 3 (Management) — accounts for ~65% of exam marks.',
  },
  {
    phase: 2,
    label: 'Phase 2 (Days 5–7)',
    subtitle: 'Services, Automation & Acts',
    days: 'Days 5–7',
    color: 'purple',
    bgClass: 'bg-purple-600',
    lightBg: 'bg-purple-50 dark:bg-purple-950/30',
    goal: 'Master Reference/CAS/SDI, Koha/ILMS automation, MARC 21, and all 19 Indian State Public Library Acts (incl. Bihar 2008).',
  },
  {
    phase: 3,
    label: 'Phase 3 (Days 8–10)',
    subtitle: 'Full Mock Exams & Final Polish',
    days: 'Days 8–10',
    color: 'emerald',
    bgClass: 'bg-emerald-600',
    lightBg: 'bg-emerald-50 dark:bg-emerald-950/30',
    goal: 'Network tools, Computer/Reasoning speed shortcuts, and taking two full 150Q / 120-minute timed LET CBT simulation tests.',
  },
];
