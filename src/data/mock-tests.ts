import type { MockTestConfig } from '@/types';

// Mock test configurations aligned with Bihar Librarian LET 2026 pattern.
// 150 Questions | 120 Minutes | No Negative Marking | BSEB

export const mockTests: MockTestConfig[] = [
  {
    id: 'mt-001',
    title: 'Full LET Mock Test — Set 1',
    description:
      'Complete 150-question mock test matching the Bihar Librarian LET 2026 pattern — 100 Library Science + 50 General Paper (GK, Bihar GK, Reasoning, Computer). No negative marking.',
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
];
