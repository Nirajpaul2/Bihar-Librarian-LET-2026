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

// ─── 30-Day Study Plan ───────────────────────────────────────────────────────

export interface StudyDay {
  day: number;
  phase: 1 | 2 | 3 | 4;
  coreTask: string;
  coreFocus: string;
  generalTask: string;
}

export const studyPlan: StudyDay[] = [
  // Phase 1: Days 1–10
  { day: 1,  phase: 1, coreTask: 'Five Laws of Library Science', coreFocus: 'S.R. Ranganathan\'s Five Laws (1931), implications, and variants', generalTask: 'Bihar History — Ancient Bihar, Mauryan Empire, Buddhism & Jainism' },
  { day: 2,  phase: 1, coreTask: 'Library Legislation in India', coreFocus: 'Model Public Library Bill, Delivery of Books Act, state-wise chronological years (incl. Bihar 2008)', generalTask: 'Bihar Geography — Rivers, climate, and soil distribution' },
  { day: 3,  phase: 1, coreTask: 'Professional Associations', coreFocus: 'ILA, IASLIC, ALA, IFLA — objectives, headquarters, and key publications', generalTask: 'Modern Indian History — Freedom struggle & 1857 revolt in Bihar' },
  { day: 4,  phase: 1, coreTask: 'Library Classification: Fundamentals', coreFocus: 'Purpose, terminology (Genus, Species, Facet), types of classification (enumerative, faceted)', generalTask: 'Indian Polity — Fundamental Rights, DPSP, and key constitutional amendments' },
  { day: 5,  phase: 1, coreTask: 'Dewey Decimal Classification (DDC)', coreFocus: 'Ten main classes (000–900), structure, Table 1 (Standard Subdivisions), Table 2 (Geographic), auxiliary schedules', generalTask: 'Reasoning — Series, analogies, and coding-decoding' },
  { day: 6,  phase: 1, coreTask: 'Colon Classification (CC)', coreFocus: 'PMEST fundamental categories, connecting symbols, main classes, personality-matter-energy-space-time', generalTask: 'Basic Arithmetic — Percentages and ratios' },
  { day: 7,  phase: 1, coreTask: 'Cataloguing Principles', coreFocus: 'Objectives of catalogue, physical forms, inner forms — Author, Title, Subject, Classified catalogues', generalTask: 'Computer Literacy — Hardware, memory units: RAM, ROM, Cache' },
  { day: 8,  phase: 1, coreTask: 'Cataloguing Codes (AACR-2 & CCC)', coreFocus: 'Structure, rules for choice and rendering of headings, personal vs corporate authors, three-author rule', generalTask: 'Bihar GK — State administrative setup, districts, and budget highlights' },
  { day: 9,  phase: 1, coreTask: 'Subject Cataloguing & Indexing', coreFocus: 'Sears List of Subject Headings (SLSH), Chain Procedure, POPSI, PRECIS indexing techniques', generalTask: 'Reasoning — Blood relations and direction sense' },
  { day: 10, phase: 1, coreTask: 'Phase 1 Assessment & Review', coreFocus: 'Revise Days 1–9 and solve 100 MCQs specifically on DDC, CC, and AACR-2', generalTask: 'Full general paper revision of Days 1–9 topics' },
  // Phase 2: Days 11–20
  { day: 11, phase: 2, coreTask: 'Library Management Principles', coreFocus: 'Fayol\'s 14 principles, POSDCORB applied to libraries, scientific management (F.W. Taylor)', generalTask: 'Indian Economy — Planning Commission to NITI Aayog, basic inflation terms' },
  { day: 12, phase: 2, coreTask: 'Acquisition & Technical Processing', coreFocus: 'Book selection tools, ordering, accessioning, accessioning register, technical preparation, accession number', generalTask: 'Computer Literacy — Software types, system vs application software, OS basics' },
  { day: 13, phase: 2, coreTask: 'Circulation & Periodical Section', coreFocus: 'Browne System, Newark System, Detroit System; Kardex system for serial control; Three-Card System (Ranganathan)', generalTask: 'Current Affairs — National awards, summits, and sports updates' },
  { day: 14, phase: 2, coreTask: 'Stock Verification, Weeding & Budgeting', coreFocus: 'Weeding policies (5th Law basis), binding, shelf rectification, PPBS, Zero-Based Budgeting (Peter Phyrr)', generalTask: 'Elementary Mathematics — Time & work, simple interest' },
  { day: 15, phase: 2, coreTask: 'Reference Services', coreFocus: 'Ready reference vs Long-range reference, reference interview techniques, types of reference sources', generalTask: 'Reasoning — Syllogisms and logical deduction' },
  { day: 16, phase: 2, coreTask: 'Information Services & Sources', coreFocus: 'CAS vs SDI, primary/secondary/tertiary sources, Encyclopaedia Britannica, Europa World Year Book, almanacs', generalTask: 'General Science — Everyday physics, vitamins, human body systems' },
  { day: 17, phase: 2, coreTask: 'Library Automation Systems', coreFocus: 'ILMS — KOHA, SOUL, LibSys, e-Granthalaya; barcode vs RFID technology; OPAC features', generalTask: 'Computer Awareness — Networking basics: LAN, WAN, IP address, web browsers' },
  { day: 18, phase: 2, coreTask: 'Information Networks & Consortia', coreFocus: 'INFLIBNET (e-ShodhSindhu, Shodhganga), DELNET, OCLC, NDLI, resource sharing and consortia benefits', generalTask: 'Bihar Current Affairs — State schemes and development projects' },
  { day: 19, phase: 2, coreTask: 'Metadata & Digital Standards', coreFocus: 'MARC 21 fields, Dublin Core 15 elements, OAI-PMH, DSpace, EPrints, open-access institutional repositories', generalTask: 'Environmental Studies — Bio-reserves, climate pacts' },
  { day: 20, phase: 2, coreTask: 'Phase 2 Assessment & Review', coreFocus: 'Revise Days 11–19 and complete 100-question timed practice set on Library Automation and Management', generalTask: 'Full general paper revision of Days 11–19 topics' },
  // Phase 3: Days 21–25
  { day: 21, phase: 3, coreTask: 'Indian Public Library Acts — Master Table', coreFocus: 'Memorize state-wise years: Tamil Nadu 1948, Andhra Pradesh 1960, Maharashtra 1967, Bihar 2008, etc.', generalTask: 'Mixed Reasoning set — 25 questions timed practice' },
  { day: 22, phase: 3, coreTask: 'Classification Notations & Mnemonics', coreFocus: 'DDC Table 1 (Standard Subdivisions), Table 2 (Geographic Areas); CC fundamental common facets deep-dive', generalTask: 'General Science & Environmental Biology revision' },
  { day: 23, phase: 3, coreTask: 'Reference Works Deep Dive', coreFocus: 'Landmark reference works — Encyclopaedia Britannica structure, Europa World Year Book, Webster\'s, Who\'s Who', generalTask: 'Modern Indian History & National Movement revision' },
  { day: 24, phase: 3, coreTask: 'Information Seeking Behaviour & User Studies', coreFocus: 'User profiles, information literacy models — SCONUL, Big6; Bibliometrics — Bradford, Lotka, Zipf\'s laws', generalTask: 'Indian Constitution Articles — Fundamental Duties, President\'s rule, Panchayati Raj' },
  { day: 25, phase: 3, coreTask: 'Comprehensive General Studies Revision', coreFocus: 'Revise all library legislation dates, association details, and digital library names', generalTask: 'Bihar GK — census figures, geography, key landmarks, cultural facts' },
  // Phase 4: Days 26–30
  { day: 26, phase: 4, coreTask: 'Full-Length Mock Test 1 (150 Questions)', coreFocus: 'Strict 2-hour timed drill (120 min); analyze incorrect questions especially in core section', generalTask: 'Attempt all 50 general paper questions. Note weak areas.' },
  { day: 27, phase: 4, coreTask: 'Targeted Revision of Weak Spots', coreFocus: 'Review chapters identified as weak during Mock 1 — e.g., cataloguing entries or state Acts', generalTask: 'Revise Bihar GK and Reasoning weak areas from Mock 1' },
  { day: 28, phase: 4, coreTask: 'Full-Length Mock Test 2 (150 Questions)', coreFocus: 'Simulate full exam conditions — aim for under 48 seconds per question (120 min ÷ 150 Q)', generalTask: 'Attempt all sections — aim for improved accuracy over Mock 1' },
  { day: 29, phase: 4, coreTask: 'Formula & Year Rapid-Fire Revision', coreFocus: 'Quick review of all foundational years, association founders, publication titles, DDC schedules 000–900', generalTask: 'Rapid-fire Bihar GK, GK current affairs, and Reasoning shortcuts' },
  { day: 30, phase: 4, coreTask: 'Final Rest & Light Review', coreFocus: 'Skim summary notes only — rest is a priority before the exam. Trust your preparation.', generalTask: 'Light revision of Bihar GK dates. No new topics.' },
];

export const phaseInfo = [
  { phase: 1, label: 'Phase 1', subtitle: 'Core Foundations', days: 'Days 1–10', color: 'blue',  bgClass: 'bg-blue-600',  lightBg: 'bg-blue-50 dark:bg-blue-950/30',  goal: 'Lock down Unit 1 (Foundations) and Unit 2 (Classification & Cataloguing) — ~40% of core paper' },
  { phase: 2, label: 'Phase 2', subtitle: 'Operations & Digital', days: 'Days 11–20', color: 'purple', bgClass: 'bg-purple-600', lightBg: 'bg-purple-50 dark:bg-purple-950/30', goal: 'Master Unit 3 (Management), Unit 4 (Services), and Units 5 & 6 (Automation & Networks)' },
  { phase: 3, label: 'Phase 3', subtitle: 'Consolidation', days: 'Days 21–25', color: 'amber',  bgClass: 'bg-amber-500',  lightBg: 'bg-amber-50 dark:bg-amber-950/30',  goal: 'Clear factual memory — dates, timelines, legislation years, association details' },
  { phase: 4, label: 'Phase 4', subtitle: 'Mock & Polish', days: 'Days 26–30', color: 'green',  bgClass: 'bg-green-600',  lightBg: 'bg-green-50 dark:bg-green-950/30',  goal: 'Build exam stamina with full 150Q / 120-minute mock tests and targeted revision' },
];
