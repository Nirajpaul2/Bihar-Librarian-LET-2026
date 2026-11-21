import type { MockTestConfig } from '@/types';

// Mock test configurations aligned with Bihar Librarian LET 2026 pattern.
// 150 Questions | 120 Minutes | No Negative Marking | BSEB

export const mockTests: MockTestConfig[] = [
  {
    id: 'mt-001',
    title: 'Full LET Mock Test — Set 1',
    isFree: true,
    description:
      'Complete 150-question mock test matching the Bihar Librarian LET 2026 pattern — 100 Library Science + 50 General Paper (GK, Bihar GK, Reasoning, Computer). 100% Free for all candidates.',
    totalQuestions: 100, // Limited by available questions; full 150 when bank grows
    durationMinutes: 120,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      'This test simulates the Bihar Librarian LET 2026 exam pattern.',
      'Total: 150 marks | Duration: 120 minutes | No negative marking.',
      'Part 1 — Library Science: 100 Questions (100 Marks).',
      'Part 2 — General Paper: 50 Questions (50 Marks: GK, Bihar GK, Reasoning, Computer).',
      'All questions are MCQ with single correct answer.',
      'Navigate freely using the question panel on the right (desktop) or the grid button (mobile).',
      'Mark questions for review and return to them before submitting.',
      'Your answers are auto-saved after each selection.',
      'The test will auto-submit when the timer reaches zero.',
      'Attempt ALL questions — there is NO negative marking.',
      'Do not refresh or close the browser during the test.',
    ],
    sections: [
      { id: 'sec-ls',  label: 'Library & Information Science', subjectId: 'library-science',    questionCount: 50 },
      { id: 'sec-gk',  label: 'General Knowledge',             subjectId: 'general-knowledge',  questionCount: 15 },
      { id: 'sec-bh',  label: 'Bihar GK',                      subjectId: 'bihar-gk',           questionCount: 10 },
      { id: 'sec-rs',  label: 'Reasoning',                     subjectId: 'reasoning',          questionCount: 15 },
      { id: 'sec-cp',  label: 'Computer Awareness',            subjectId: 'computer',           questionCount: 10 },
    ],
  },
  {
    id: 'mt-002',
    title: 'Library Science Focus Test (Part 1)',
    description:
      'Targeted 50-question test on Library & Information Science only — ideal for deep preparation of the core paper. Covers all 6 units as per LET syllabus.',
    totalQuestions: 50,
    durationMinutes: 60,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      'This test covers Part 1 — Library & Information Science (50 questions in 60 minutes).',
      'Covers all 6 units: Foundations, Classification, Cataloguing, Management, Reference, IT & Networks.',
      'Prioritize Unit 2 (Knowledge Organisation) and Unit 3 (Management) — they carry the highest weightage.',
      'No negative marking — attempt all questions.',
      'Review your answers carefully before submitting.',
    ],
    sections: [
      { id: 'sec-ls2', label: 'Library & Information Science', subjectId: 'library-science', questionCount: 50 },
    ],
  },
  {
    id: 'mt-003',
    title: 'General Paper Focus Test (Part 2)',
    description:
      'Targeted 30-question test covering the 50-mark General Paper — GK, Bihar GK, Reasoning and Computer Awareness as per LET 2026 pattern.',
    totalQuestions: 30,
    durationMinutes: 36,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      'This test covers Part 2 — General Paper (30 questions in 36 minutes).',
      'Sections: GK & Current Affairs, Bihar GK, Reasoning, Basic Computer Awareness.',
      'Bihar GK and Reasoning are frequently tested — do not skip them.',
      'No negative marking — attempt all questions.',
    ],
    sections: [
      { id: 'sec-gp-gk', label: 'General Knowledge',  subjectId: 'general-knowledge', questionCount: 10 },
      { id: 'sec-gp-bh', label: 'Bihar GK',            subjectId: 'bihar-gk',          questionCount: 7  },
      { id: 'sec-gp-rs', label: 'Reasoning',           subjectId: 'reasoning',         questionCount: 8  },
      { id: 'sec-gp-cp', label: 'Computer Awareness',  subjectId: 'computer',          questionCount: 5  },
    ],
  },
  {
    id: 'mt-004',
    title: 'Classification & Cataloguing Sprint',
    description:
      'High-intensity 25-question sprint focused on DDC, Colon Classification, AACR-2, and Cataloguing — the highest-weightage topics of LET 2026.',
    totalQuestions: 25,
    durationMinutes: 25,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      '25 questions on Classification & Cataloguing in 25 minutes.',
      'Focus area: DDC (all 10 main classes), Colon Classification (PMEST), AACR-2, types of catalogue.',
      'These topics account for 22–25 marks in the actual exam.',
      'No negative marking — attempt all 25 questions.',
      'Aim for at least 20/25 before attempting the full mock test.',
    ],
    sections: [
      { id: 'sec-cc', label: 'Classification & Cataloguing', subjectId: 'library-science', questionCount: 25 },
    ],
  },
  {
    id: 'mt-005',
    title: 'Quick Warm-Up Test — 20 Questions',
    description:
      'A quick 20-question mixed test for daily warm-up practice. 20 minutes. Mixed subjects.',
    totalQuestions: 20,
    durationMinutes: 20,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      '20 questions across all subjects in 20 minutes.',
      'Use this as a daily warm-up before your study session.',
      'No negative marking — attempt all questions.',
    ],
    sections: [
      { id: 'sec-w1', label: 'Library Science',   subjectId: 'library-science',   questionCount: 10 },
      { id: 'sec-w2', label: 'General Knowledge', subjectId: 'general-knowledge', questionCount: 4  },
      { id: 'sec-w3', label: 'Reasoning',         subjectId: 'reasoning',         questionCount: 4  },
      { id: 'sec-w4', label: 'Computer',          subjectId: 'computer',          questionCount: 2  },
    ],
  },
  {
    id: 'mt-006',
    title: 'Full LET Mock Test — Set 2',
    description:
      'Comprehensive 100-question full-length simulator matching the official BSEB Bihar Librarian LET 2026 pattern (50 Core Library Science + 50 General Paper).',
    totalQuestions: 100,
    durationMinutes: 120,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      'Simulates full BSEB Bihar Librarian LET 2026 examination.',
      'Total: 100 questions | Duration: 120 minutes | No negative marking.',
      'Part 1: 50 Library Science Core Questions.',
      'Part 2: 50 General Paper Questions (15 GK, 10 Bihar GK, 15 Reasoning, 10 Computer).',
      'Attempt all questions and review marked answers before final submission.',
    ],
    sections: [
      { id: 'sec-ls-06', label: 'Library & Information Science', subjectId: 'library-science',    questionCount: 50 },
      { id: 'sec-gk-06', label: 'General Knowledge',             subjectId: 'general-knowledge',  questionCount: 15 },
      { id: 'sec-bh-06', label: 'Bihar GK & Heritage',          subjectId: 'bihar-gk',           questionCount: 10 },
      { id: 'sec-rs-06', label: 'Logical Reasoning',            subjectId: 'reasoning',          questionCount: 15 },
      { id: 'sec-cp-06', label: 'Computer Awareness',            subjectId: 'computer',           questionCount: 10 },
    ],
  },
  {
    id: 'mt-007',
    title: 'Full LET Mock Test — Set 3',
    description:
      'Full LET examination test series Set 3 with balanced high-weightage questions from Classification, Cataloguing, Reference Services, and General Paper.',
    totalQuestions: 100,
    durationMinutes: 120,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      'Real exam time simulator: 120 minutes for 100 questions.',
      'Covers in-depth DDC, CC, AACR-2, Dublin Core, Five Laws, and General Paper.',
      'No negative marking — maximize your attempts.',
    ],
    sections: [
      { id: 'sec-ls-07', label: 'Library & Information Science', subjectId: 'library-science',    questionCount: 50 },
      { id: 'sec-gk-07', label: 'General Knowledge',             subjectId: 'general-knowledge',  questionCount: 15 },
      { id: 'sec-bh-07', label: 'Bihar GK & History',           subjectId: 'bihar-gk',           questionCount: 10 },
      { id: 'sec-rs-07', label: 'Reasoning Ability',            subjectId: 'reasoning',          questionCount: 15 },
      { id: 'sec-cp-07', label: 'Computer Awareness',            subjectId: 'computer',           questionCount: 10 },
    ],
  },
  {
    id: 'mt-008',
    title: 'Full LET Mock Test — Set 4 (Speed Booster)',
    description:
      'Speed and accuracy booster full-length test designed to train pacing and quick decision making for the Bihar Librarian LET 2026 exam.',
    totalQuestions: 100,
    durationMinutes: 100,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      'Fast-paced 100 questions in 100 minutes (1 minute per question average).',
      'Sharpens time management across both Library Science and General Paper.',
      'Review answers and learn from detailed bilingual solutions after submission.',
    ],
    sections: [
      { id: 'sec-ls-08', label: 'Library Science Core',          subjectId: 'library-science',    questionCount: 50 },
      { id: 'sec-gk-08', label: 'General Awareness',             subjectId: 'general-knowledge',  questionCount: 15 },
      { id: 'sec-bh-08', label: 'Bihar Special GK',              subjectId: 'bihar-gk',           questionCount: 10 },
      { id: 'sec-rs-08', label: 'Verbal & Non-Verbal Reasoning', subjectId: 'reasoning',          questionCount: 15 },
      { id: 'sec-cp-08', label: 'Information Technology',        subjectId: 'computer',           questionCount: 10 },
    ],
  },
  {
    id: 'mt-009',
    title: 'Full LET Mock Test — Set 5 (Final Grand Simulation)',
    description:
      'The comprehensive benchmark mock test reflecting expected question difficulty and topic distribution for the upcoming 2026 exam.',
    totalQuestions: 100,
    durationMinutes: 120,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      'Comprehensive final rehearsal mock exam.',
      '50 Questions Library Science + 50 Questions General Paper.',
      'Simulate actual test room conditions without distractions.',
    ],
    sections: [
      { id: 'sec-ls-09', label: 'Library & Information Science', subjectId: 'library-science',    questionCount: 50 },
      { id: 'sec-gk-09', label: 'General Knowledge',             subjectId: 'general-knowledge',  questionCount: 15 },
      { id: 'sec-bh-09', label: 'Bihar GK',                      subjectId: 'bihar-gk',           questionCount: 10 },
      { id: 'sec-rs-09', label: 'Reasoning',                     subjectId: 'reasoning',          questionCount: 15 },
      { id: 'sec-cp-09', label: 'Computer Awareness',            subjectId: 'computer',           questionCount: 10 },
    ],
  },
  {
    id: 'mt-010',
    title: 'Library Science Advanced Core Drill — Set A',
    description:
      '50-question deep-dive into Units 1–3: Foundations of LIS, Classification schemes (DDC, UDC, CC), and Cataloguing standards (AACR-2, CCC, MARC21).',
    totalQuestions: 50,
    durationMinutes: 60,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      '50 questions on core classification, cataloguing, and library legislation.',
      'Time: 60 minutes. No negative marking.',
      'Focus on notation rules, main classes, and Ranganathan principles.',
    ],
    sections: [
      { id: 'sec-ls-10', label: 'Library Science Core A', subjectId: 'library-science', questionCount: 50 },
    ],
  },
  {
    id: 'mt-011',
    title: 'Library Science Advanced Core Drill — Set B',
    description:
      '50-question deep-dive into Units 4–6: Library Management, Reference & Information Sources, Digital Libraries, Koha, and Automation Networks.',
    totalQuestions: 50,
    durationMinutes: 60,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      '50 questions covering Management, Reference Services, Digital Repositories, and ILMS software.',
      'Duration: 60 minutes. All questions are multiple choice.',
    ],
    sections: [
      { id: 'sec-ls-11', label: 'Library Science Core B', subjectId: 'library-science', questionCount: 50 },
    ],
  },
  {
    id: 'mt-012',
    title: 'Bihar Special & General Knowledge Championship',
    description:
      '40-question high-scoring drill focusing on Bihar History, Geography, Khuda Bakhsh Library, Rajgir, Nalanda, and National Indian Polity/GK.',
    totalQuestions: 40,
    durationMinutes: 45,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      '40 questions dedicated to maximizing your General Paper score.',
      '25 questions Bihar Special + 15 questions Indian Polity, History, and Science.',
      'Duration: 45 minutes.',
    ],
    sections: [
      { id: 'sec-bh-12', label: 'Bihar GK & Heritage', subjectId: 'bihar-gk',          questionCount: 25 },
      { id: 'sec-gk-12', label: 'General Knowledge',   subjectId: 'general-knowledge', questionCount: 15 },
    ],
  },
  {
    id: 'mt-013',
    title: 'Reasoning & Analytical Ability Marathon',
    description:
      '30-question intensive reasoning test covering Coding-Decoding, Blood Relations, Syllogisms, Number Series, and Direction Sense for LET 2026.',
    totalQuestions: 30,
    durationMinutes: 35,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      '30 reasoning questions in 35 minutes.',
      'Test your speed and logic on questions frequently asked in Bihar state teacher and librarian exams.',
    ],
    sections: [
      { id: 'sec-rs-13', label: 'Reasoning & Mental Ability', subjectId: 'reasoning', questionCount: 30 },
    ],
  },
  {
    id: 'mt-014',
    title: 'Computer Awareness & Digital Library Systems',
    description:
      '30 questions on Computer Fundamentals, Hardware/Software, Networking protocols, DBMS, Boolean Search, and Koha/DSpace digital library tools.',
    totalQuestions: 30,
    durationMinutes: 30,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      '30 questions on Computer Fundamentals and Digital Library IT tools.',
      '20 Computer Awareness questions + 10 Digital Library Systems questions.',
      'Duration: 30 minutes.',
    ],
    sections: [
      { id: 'sec-cp-14', label: 'Computer Awareness', subjectId: 'computer',        questionCount: 20 },
      { id: 'sec-ls-14', label: 'Digital Libraries',  subjectId: 'library-science', questionCount: 10 },
    ],
  },
  {
    id: 'mt-015',
    title: 'Super 50 High-Yield Mixed Booster',
    description:
      'Curated 50-question all-subject booster containing the most frequently repeated questions in Library Science and General Paper competitive examinations.',
    totalQuestions: 50,
    durationMinutes: 60,
    marksPerQuestion: 1,
    negativeMarks: 0,
    instructions: [
      '50 high-yield questions covering all 5 syllabus areas in 60 minutes.',
      '25 Library Science + 10 Bihar GK + 5 GK + 5 Reasoning + 5 Computer.',
      'Perfect for quick daily performance evaluation.',
    ],
    sections: [
      { id: 'sec-ls-15', label: 'Library Science',        subjectId: 'library-science',    questionCount: 25 },
      { id: 'sec-bh-15', label: 'Bihar GK',               subjectId: 'bihar-gk',           questionCount: 10 },
      { id: 'sec-gk-15', label: 'General Knowledge',      subjectId: 'general-knowledge',  questionCount: 5  },
      { id: 'sec-rs-15', label: 'Logical Reasoning',     subjectId: 'reasoning',          questionCount: 5  },
      { id: 'sec-cp-15', label: 'Computer Fundamentals',  subjectId: 'computer',           questionCount: 5  },
    ],
  },
];
