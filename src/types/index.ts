// ─── Question Types ──────────────────────────────────────────────────────────

export type Difficulty = 'easy' | 'medium' | 'hard';
export type SubjectKey = 'library-science' | 'general-knowledge' | 'bihar-gk' | 'reasoning' | 'computer';
export type AnswerKey = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: string;
  question: string;
  options: Record<AnswerKey, string>;
  correct: AnswerKey;
  explanation: string;
  subject: SubjectKey;
  unit: string;      // unit slug e.g. "foundations"
  topic: string;     // topic slug e.g. "five-laws"
  topicLabel: string; // display label e.g. "Five Laws of Library Science"
  difficulty: Difficulty;
  tags?: string[];
}

// ─── Syllabus Types ──────────────────────────────────────────────────────────

export interface Topic {
  id: string;         // slug
  label: string;
  questionCount?: number; // populated at runtime
}

export interface Unit {
  id: string;         // slug
  label: string;
  topics: Topic[];
}

export interface Subject {
  id: SubjectKey;
  label: string;
  shortLabel: string;
  description: string;
  color: string;      // tailwind color class prefix e.g. "blue"
  icon: string;       // emoji or icon name
  units: Unit[];
}

// ─── Practice Session Types ──────────────────────────────────────────────────

export type PracticeMode =
  | 'quick'
  | 'topic'
  | 'unit'
  | 'subject'
  | 'bookmarked'
  | 'daily';

export interface PracticeSessionConfig {
  mode: PracticeMode;
  subjectId?: SubjectKey;
  unitId?: string;
  topicId?: string;
  questionCount?: number;
  label: string;
}

export interface SessionAnswer {
  questionId: string;
  selectedAnswer: AnswerKey | null;
  isCorrect: boolean | null;
  timeTaken?: number;
}

// ─── Mock Test Types ─────────────────────────────────────────────────────────

export type QuestionStatus = 'not-visited' | 'answered' | 'not-answered' | 'marked-review';

export interface MockTestConfig {
  id: string;
  title: string;
  description: string;
  totalQuestions: number;
  durationMinutes: number;
  marksPerQuestion: number;
  negativeMarks: number;
  instructions: string[];
  sections: MockTestSection[];
}

export interface MockTestSection {
  id: string;
  label: string;
  subjectId: SubjectKey;
  questionCount: number;
}

export interface MockTestState {
  testId: string;
  startedAt: number;
  answers: Record<string, AnswerKey | null>;
  markedForReview: Set<string>;
  questionOrder: string[];
  currentIndex: number;
  submitted: boolean;
}

export interface MockTestResult {
  testId: string;
  score: number;
  totalMarks: number;
  percentage: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  timeTakenSeconds: number;
  answers: Record<string, AnswerKey | null>;
  sectionWise: SectionResult[];
}

export interface SectionResult {
  sectionId: string;
  label: string;
  correct: number;
  total: number;
  percentage: number;
}

// ─── Current Affairs Types ───────────────────────────────────────────────────

export type CACategory = 'india' | 'bihar' | 'world' | 'science' | 'schemes' | 'awards' | 'sports' | 'economy';

export interface CurrentAffair {
  id: string;
  title: string;
  summary: string;
  source?: string;
  date: string;           // ISO date string "YYYY-MM-DD"
  category: CACategory;
  tags?: string[];
  relatedQuestionIds?: string[];
}

// ─── Bookmark Types ──────────────────────────────────────────────────────────

export type BookmarkSet = Set<string>; // Set of question IDs
